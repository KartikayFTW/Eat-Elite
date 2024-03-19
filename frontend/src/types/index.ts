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
