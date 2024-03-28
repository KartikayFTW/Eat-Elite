import useCreateRestaurant from '@/api/Restaurant/createRestaurantApi';
import useGetRestaurant from '@/api/Restaurant/getRestaurantApi';
import useUpdateRestaurant from '@/api/Restaurant/updateRestaurantApi';
import ManageRestaurantForm from '@/components/forms/ManageRestaurantForm/ManageRestaurantForm';

const ManageRestaurantPage = () => {
  const { createRestaurant, isPending: isCreatePending } =
    useCreateRestaurant();
  const { data: restaurantData } = useGetRestaurant();
  const isEditing = !!restaurantData;
  const { updateRestaurant, isPending: isUpdatePending } =
    useUpdateRestaurant();
  return (
    <ManageRestaurantForm
      onSumbit={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreatePending || isUpdatePending}
      restaurantData={restaurantData}
    />
  );
};

export default ManageRestaurantPage;
