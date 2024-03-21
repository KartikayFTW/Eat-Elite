import express from 'express';
import { createRestaurant } from '../controller/restaurantController';
import multer from 'multer';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMiddleware } from '../middleware/validation';
import { createRestaurantSchema } from '../validation/restaurantValidation';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 6 * 1024 * 1024,
  },
});
router.post(
  '/create',
  jwtCheck,
  jwtParse,
  upload.single('imageUrl'),
  validateMiddleware(createRestaurantSchema),

  createRestaurant,
);

export default router;
