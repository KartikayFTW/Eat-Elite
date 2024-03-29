import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import useLogin from '@/hooks/useLogin';

const UserNavMenu = () => {
  const { user, logoutHandler } = useLogin();

  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {user && user.picture && (
            <AvatarImage src={user.picture} alt="user profile picture" />
          )}
          <AvatarFallback>user</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hi , {user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/user-profile')}>
          User Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/manage-restaurant')}>
          Manage Restaurant
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logoutHandler}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNavMenu;
