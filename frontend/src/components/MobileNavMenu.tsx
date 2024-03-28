import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import useLogin from '@/hooks/useLogin';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const MobileNavMenu = () => {
  const { user, logoutHandler } = useLogin();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center gap-x-10  gap-y-4 mt-5">
        <Avatar>
          <AvatarImage src={user?.picture} alt="user profile picture" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <span className="font-bold text-black text-md">Hi , {user?.name}</span>
        <span onClick={() => navigate('/user-profile')}>User Profile</span>
        <span onClick={() => navigate('/manage-restaurant')}>
          Manage Restaurant
        </span>

        <Button variant={'default'} onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default MobileNavMenu;
