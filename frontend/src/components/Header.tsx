import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import MainNav from './MainNav';

const Header = () => {
  return (
    <div className=" py-6 bg-[#9bc3a0] sticky">
      {/* <div className="border-b-2 border-[#9bc3a0] py-6 bg-[#9bc3a0]"> */}
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-[#14110F]"
        >
          Eat-Elite
        </Link>
        <div className="lg:block hidden">
          <MainNav />
        </div>
        <div className="block lg:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
