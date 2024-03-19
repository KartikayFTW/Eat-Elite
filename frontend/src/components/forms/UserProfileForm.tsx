import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { LoadingButton } from '../LoadingButton';
import { useEffect } from 'react';
import { User } from '@/types';
import { Skeleton } from '../ui/skeleton';

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  addressLine1: z.string().min(1, 'Address Line 1 is required'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
});

type userFormData = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (userProfileData: userFormData) => void;
  isPending: boolean;
  currentUser?: User;
  isUserDetailsLoading: boolean;
};

const UserProfileForm = ({
  isPending,
  onSubmit,
  currentUser,
  isUserDetailsLoading,
}: Props) => {
  console.log('currentUser', currentUser);
  const form = useForm<userFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  if (isUserDetailsLoading) {
    return (
      <div className="">
        <div className="flex justify-center items-center  ">
          <div className="space-y-4 rounded-lg p-10 flex flex-col bg-white shadow-2xl ">
            <div className="flex flex-col gap-2 ml-10">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
            <div className="flex flex-col md:flex-row gap-10 px-10 ">
              <div className="w-full">
                <div className="flex-1">
                  {/* <Skeleton className="h-4 w-[250px]" /> */}
                  <Skeleton className="h-10 w-[250px]" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex-1">
                  {/* <Skeleton className="h-4 w-[250px]" /> */}
                  <Skeleton className="h-10 w-[250px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 px-10 ">
              <div className="w-full">
                <div className="flex flex-1">
                  {/* <Skeleton className="h-4 w-[250px]" /> */}
                  <Skeleton className="h-10 w-[150px]" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-1">
                  {/* <Skeleton className="h-4 w-[250px]" /> */}
                  <Skeleton className="h-10 w-[150px]" />
                </div>
              </div>
              <div className="w-full">
                <div className=" flex flex-1">
                  {/* <Skeleton className="h-4 w-[250px]" /> */}
                  <Skeleton className="h-10 w-[150px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <div className="flex justify-center items-center ">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 bg-white shadow-2xl rounded-lg p-10 flex flex-col "
        >
          <div className="flex flex-col gap-2 ml-10">
            <h1 className="text-3xl">User Profile Details</h1>
            <p>View or change your information</p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 px-10 ">
            <div className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="user@gmail.com" {...field} disabled />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 px-10 ">
            <div className="w-full">
              <FormField
                control={form.control}
                name="addressLine1"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Address Line 1</FormLabel>
                    <FormControl>
                      <Input placeholder="Ward no 2" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Delhi" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="India" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center justify-center ">
            {isPending ? (
              <LoadingButton />
            ) : (
              <Button className="w-20" type="submit">
                Save
              </Button>
            )}
          </div>
        </form>
      </div>
    </Form>
  );
};

export default UserProfileForm;
