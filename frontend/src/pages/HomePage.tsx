import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Phone from '@/assets/landing.png';
import AppDownload from '@/assets/appDownload.png';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 ">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-semibold text-[#14110F] tracking-tight">
          Order delivery near you
        </h1>
        <span className="text-xl ">Food is just a click away!</span>
        <div className="flex gap-5 justify-center flex-col sm:flex-row px-5">
          <Input
            className="sm:w-72 w-full"
            placeholder="Enter Delivery Location"
          />
          <Button>Search</Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5  rounded-lg shadow-md">
        <div className="rounded-lg shadow-md  ">
          <img src={Phone} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order Delivery even faster!
          </span>
          <span>
            Download the Eat-Elite App for faster ordering and personalised
            recommendations
          </span>
          <img src={AppDownload} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
