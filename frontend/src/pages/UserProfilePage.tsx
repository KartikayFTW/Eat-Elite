import useGetUser from '@/api/User/getuserApi';
import useUpdateUser from '@/api/User/updateUserApi';
import UserProfileForm from '@/components/forms/UserProfileForm';
const UserProfilePage = () => {
  const { updateUser, isPending } = useUpdateUser();
  const { currentUser, isUserDetailsLoading } = useGetUser();

  return (
    <>
      <UserProfileForm
        isPending={isPending}
        onSubmit={updateUser}
        currentUser={currentUser}
        isUserDetailsLoading={isUserDetailsLoading}
      />
    </>
  );
};

export default UserProfilePage;
