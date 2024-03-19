import { User } from '@/types';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const getUserDetailsRequest = async (): Promise<User> => {
    try {
      const accessToken = await getAccessTokenSilently();
      const response = await axios.get(`${API_BASE_URL}/api/user`, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      });
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

  const {
    data: currentUser,
    isLoading: isUserDetailsLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ['getUserDetails'],
    queryFn: getUserDetailsRequest,
  });

  return {
    currentUser,
    isUserDetailsLoading,
    error,
    isError,
  };
};

export default useGetUser;
