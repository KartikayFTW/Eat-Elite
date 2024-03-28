import { Restaurant } from '@/types';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

const useUpdateRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const updateRestaurantRequest = async (
    formDataValue: FormData,
  ): Promise<Restaurant> => {
    try {
      console.log('update');
      const accessToken = await getAccessTokenSilently();
      const response = await axios.put(
        `${API_BASE_URL}/api/restaurent/update`,
        formDataValue,
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
  const queryClient = useQueryClient();
  const {
    mutateAsync: updateRestaurant,
    isPending,
    isError,
    error,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: updateRestaurantRequest,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['getRestaurant'] });
    },
  });

  if (isSuccess) {
    toast.success('Restaurant Details Updated');
  }
  if (isError) {
    toast.error(error.toString());
    reset();
  }

  return {
    updateRestaurant,
    isPending,
    isError,
    error,
    isSuccess,
  };
};

export default useUpdateRestaurant;
