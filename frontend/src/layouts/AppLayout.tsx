import Header from '@/components/Header';
import { ChildrenPropsWithHero } from '@/types';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const AppLayout = ({ children, showHero = false }: ChildrenPropsWithHero) => {
  return (
    <div className="flex flex-col min-h-screen  ">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 ">{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
