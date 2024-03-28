import { Request, Response } from 'express';
import Restaurant from '../models/restaurant.models';
import cloudinary from 'cloudinary';
import mongoose from 'mongoose';
import { CreateRestaurantType } from '../validation/restaurantValidation';
const createRestaurant = async (req: Request, res: Response) => {
  try {
    const data: CreateRestaurantType = req.body;
    const existingRestaurent = await Restaurant.findOne({ user: req.userId });
    if (existingRestaurent) {
      return res.status(409).json({
        message: 'User Restaurent already exist',
      });
    }

    const image = req.file as Express.Multer.File;
    const base64Image = Buffer.from(image.buffer).toString('base64');
    const dataUri = `data:${image.mimetype};base64,${base64Image}`;

    const uploadCloudinary = await cloudinary.v2.uploader.upload(dataUri);
    const restaurant = new Restaurant({
      ...data,
      imageUrl: uploadCloudinary.url,
      user: new mongoose.Types.ObjectId(req.userId),
    });

    await restaurant.save();

    res.status(201).send(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error while creating  restaurent',
    });
  }
};
const getRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({ user: req.userId });

    if (!restaurant) {
      return res.status(404).json({
        message: 'Restaurant not found',
      });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error while retrieving the restaurant',
    });
  }
};
const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const existingRestaurant = await Restaurant.findOne({ user: req.userId });
    if (!existingRestaurant) {
      return res.status(404).json({
        message: 'Restaurant not found',
      });
    }

    let imageUrl = existingRestaurant.imageUrl;
    if (req.file) {
      const image = req.file as Express.Multer.File;
      const base64Image = Buffer.from(image.buffer).toString('base64');
      const dataUri = `data:${image.mimetype};base64,${base64Image}`;
      const uploadCloudinary = await cloudinary.v2.uploader.upload(dataUri);
      imageUrl = uploadCloudinary.url;
    }

    const updateData = {
      ...req.body,
      imageUrl: imageUrl,
    };

    await Restaurant.findByIdAndUpdate(existingRestaurant._id, updateData, {
      new: true,
    });

    const updatedRestaurant = await Restaurant.findById(existingRestaurant._id);

    res.status(200).json(updatedRestaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error while updating the restaurant',
    });
  }
};

export { createRestaurant, getRestaurant, updateRestaurant };
