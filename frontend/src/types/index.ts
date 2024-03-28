import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export interface ChildrenPropsWithHero extends ChildrenProps {
  showHero?: boolean;
}

export type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  addressLine1: string;
  city: string;
  country: string;
};
export type MenuItem = {
  _id: string;
  name: string;
  price: number;
};
export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
};

export interface ManageRestaurantFormType {
  onSumbit: (restaurantFormData: FormData) => void;
  isLoading: boolean;
  restaurantData: Restaurant | undefined;
}
