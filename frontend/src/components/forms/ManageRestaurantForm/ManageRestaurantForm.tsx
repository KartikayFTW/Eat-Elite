import { Form } from '@/components/ui/form';
import { ManageRestaurantFormType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import DetailsSection from './DetailsSection';
import { Separator } from '@/components/ui/separator';
import { CuisinesSection } from './CuisinesSection';
import { MenuItemsSection } from './MenuItemsSection';
import { ImageSection } from './ImageSection';
import { LoadingButton } from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const formSchema = z
  .object({
    restaurantName: z.string({
      required_error: 'restaurent name is required',
    }),
    city: z.string({
      required_error: 'city is required',
    }),
    country: z.string({
      required_error: 'country is required',
    }),
    deliveryPrice: z.coerce.number({
      required_error: 'country is required',
      invalid_type_error: 'must be a valid number',
    }),
    estimatedDeliveryTime: z.coerce.number({
      required_error: 'country is required',
      invalid_type_error: 'must be a valid number',
    }),
    cuisines: z.array(z.string()).nonempty({
      message: 'please select at least item',
    }),
    menuItems: z.array(
      z.object({
        name: z.string().min(1, 'name is required'),
        price: z.coerce.number().min(1, 'price is required'),
      }),
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: 'image is required' }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: 'Either imageUrl or imageFile must be provided',
    path: ['imageFile'],
  });

type RestaurentFormData = z.infer<typeof formSchema>;

const ManageRestaurantForm = ({
  isLoading,
  onSumbit,
  restaurantData,
}: ManageRestaurantFormType) => {
  const form = useForm<RestaurentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: '', price: 0 }],
    },
  });
  useEffect(() => {
    if (!restaurantData) {
      return;
    }
    const formattedDeliveryPrice = parseInt(
      (restaurantData.deliveryPrice / 100).toFixed(2),
    );
    const formattedmenuItems = restaurantData.menuItems.map((menu) => ({
      ...menu,
      price: parseInt((menu.price / 100).toFixed(2)),
    }));

    const updatedRestaurant = {
      ...restaurantData,
      deliveryPrice: formattedDeliveryPrice,
      menuItems: formattedmenuItems,
    };
    form.reset(updatedRestaurant);
  }, [form, restaurantData]);
  const onSubmit = (formDataValue: RestaurentFormData) => {
    const formData = new FormData();
    formData.append('restaurantName', formDataValue.restaurantName);
    formData.append('city', formDataValue.city);
    formData.append('country', formDataValue.country);
    formData.append(
      'deliveryPrice',
      (formDataValue.deliveryPrice * 100).toString(),
    );
    formData.append(
      'estimatedDeliveryTime',
      formDataValue.estimatedDeliveryTime.toString(),
    );
    formDataValue.cuisines.forEach((item, index) => {
      formData.append(`cuisines[${index}]`, item);
    });
    formDataValue.menuItems.forEach((item, index) => {
      formData.append(`menuItems[${index}][name]`, item.name);
      formData.append(
        `menuItems[${index}][price]`,
        (item.price * 100).toString(),
      );
    });
    if (formDataValue.imageFile) {
      formData.append('imageUrl', formDataValue.imageFile);
    }

    onSumbit(formData);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuItemsSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
