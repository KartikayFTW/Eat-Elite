import { useAuth0 } from '@auth0/auth0-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

type UpdateUserType = {
  email?: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

const useUpdateUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  console.log('API_BASE_URL', API_BASE_URL);
  const updateUserRequest = async (user: UpdateUserType) => {
    try {
      const accessToken = await getAccessTokenSilently();

      const response = await axios.patch(
        `${API_BASE_URL}/api/user/update`,
        user,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        },
      );
      console.log('ee', response);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message ||
            'An error occured during the API request',
        );
      } else {
        throw new Error('An error occurred');
      }
    }
  };
  const queryClient = useQueryClient();
  const {
    mutateAsync: updateUser,
    isPending,
    isError,
    error,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: updateUserRequest,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['getUserDetails'] });
    },
  });
  if (isSuccess) {
    toast.success('User Details Updated');
  }
  if (isError) {
    toast.error(error.toString());
    reset();
  }

  return {
    updateUser,
    isPending,
    isError,
    error,
    isSuccess,
  };
};
export default useUpdateUser;
