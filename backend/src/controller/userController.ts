import { Request, Response } from 'express';
import User from 'models/user.models';
import { z } from 'zod';
const createUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({
      auth0Id: auth0Id,
    });
    if (existingUser) {
      return res.status(200).json({ message: 'User already exists' });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error Creating user',
    });
  }
};

const updateUserSchema = z.object({
  name: z.string().optional(),
  addressLine1: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});
const updateUser = async (req: Request, res: Response) => {
  try {
    type UpdateUser = z.infer<typeof updateUserSchema>;
    const updateData: UpdateUser = updateUserSchema.parse(req.body);
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const updatedUser = await User.findByIdAndUpdate(req.userId, updateData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Unable to update user' });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error while updating user',
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.userId });
    if (!user) {
      return res.status(404).json({ message: 'no user exist' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(Error);
    res.status(500).json({
      message: 'Error while getting user info',
    });
  }
};

export { createUser, updateUser, getUser };
