import React from 'react';
import { Button } from './ui/button';
import { User } from 'lucide-react';

const MainNav = () => {
  return (
    <Button
      variant={'ghost'}
      className="font-bold text-lg text-[#14110F] bg-[#FFEAEC] rounded-xl hover:bg-[#FFEAEC] flex gap-2"
    >
      <User />
      Login
    </Button>
  );
};

export default MainNav;
