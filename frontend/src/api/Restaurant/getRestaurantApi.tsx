import { Restaurant } from '@/types';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const getRestaurantRequest = async (): Promise<Restaurant> => {
    try {
      const accessToken = await getAccessTokenSilently();
      const response = await axios.get(
        `
            ${API_BASE_URL}/api/restaurent
        `,
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
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['getRestaurant'],
    queryFn: getRestaurantRequest,
  });
  return {
    data,
    isLoading,
    error,
    isError,
  };
};

export default useGetRestaurant;
