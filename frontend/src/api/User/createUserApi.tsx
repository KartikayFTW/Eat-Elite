import { CreateUserRequest } from '@/types';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const createUserRequest = async (user: CreateUserRequest) => {
    try {
      const accessToken = await getAccessTokenSilently();
      const response = await axios.post(
        `${API_BASE_URL}/api/user/create`,
        user,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message ||
            'An error occurred during the API request',
        );
      } else {
        throw new Error('An error occurred');
      }
    }
  };

  const {
    mutateAsync: createUser,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: createUserRequest,
  });

  return {
    createUser,
    isPending,
    isError,
    error,
    isSuccess,
  };
};

export default useCreateUser;
