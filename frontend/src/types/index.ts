import { ReactNode } from 'react';

export type ChildrenProps = {
  children: ReactNode;
};

export type CreateUserRequest = {
  auth0Id: string;
  email: string;
};
