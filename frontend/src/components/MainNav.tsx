import { Button } from './ui/button';
import { User } from 'lucide-react';
import UserNavMenu from './UserNavMenu';
import { Skeleton } from './ui/skeleton';
import useLogin from '@/hooks/useLogin';

const MainNav = () => {
  const { loginHandler, isAuthenticated, isLoading } = useLogin();

  if (isLoading) {
    return <Skeleton className="w-[40px] h-[40px] rounded-full" />;
  }
  return isAuthenticated ? (
    <UserNavMenu />
  ) : (
    <Button
      variant={'ghost'}
      className="font-bold text-lg text-[#14110F] bg-[#FFEAEC] rounded-xl hover:bg-[#FFEAEC] flex gap-2"
      onClick={loginHandler}
    >
      <User />
      Login
    </Button>
  );
};

export default MainNav;
