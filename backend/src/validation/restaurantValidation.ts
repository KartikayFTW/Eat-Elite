import { z } from 'zod';

const menuItemSchema = z.object({
  name: z.string(),
  price: z.string().transform(Number), // Coerce string to number
});

export const createRestaurantSchema = z.object({
  restaurantName: z.string(),
  city: z.string(),
  country: z.string(),
  deliveryPrice: z.string().transform(Number), // Coerce string to number
  estimatedDeliveryTime: z.string().transform(Number), // Coerce string to number
  cuisines: z.array(z.string()),
  menuItems: z.array(menuItemSchema),
});

export type CreateRestaurantType = z.infer<typeof createRestaurantSchema>;
