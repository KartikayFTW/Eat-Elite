import Header from '@/components/Header';
import { ChildrenProps } from '@/types';
import Hero from '@/components/Hero';

const AppLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-col min-h-screen  ">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 ">{children}</div>
    </div>
  );
};

export default AppLayout;
