import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Menu } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const MobileNav = () => {
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
            <Button className="flex-1 mt-5  font-bold w-full">Login</Button>
          </SheetDescription>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
