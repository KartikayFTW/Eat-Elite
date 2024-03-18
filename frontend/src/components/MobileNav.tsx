import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Menu, User } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import useLogin from '@/hooks/useLogin';
import { Skeleton } from './ui/skeleton';
import UserNavMenu from './UserNavMenu';
import MobileNavMenu from './MobileNavMenu';

const MobileNav = () => {
  const { loginHandler, isAuthenticated, isLoading, user } = useLogin();
  if (isLoading) {
    return <Skeleton className="w-[40px] h-[40px] rounded-full" />;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-[#14110F]  " height={32} width={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span>Welcome to Eat-Elite</span>
          <Separator className="mt-6" />
          <SheetDescription>
            {isAuthenticated ? (
              <MobileNavMenu />
            ) : (
              <Button
                className="flex-1 mt-5  font-bold w-full"
                onClick={loginHandler}
              >
                Login
              </Button>
            )}
          </SheetDescription>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
