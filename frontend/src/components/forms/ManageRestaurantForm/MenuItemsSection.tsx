import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFieldArray, useFormContext } from 'react-hook-form';

export const MenuItemsSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'menuItems',
  });

  return (
    <div className="space-y-2">
      <div className="text-2xl">Menu</div>
      <FormDescription>
        Create your menu and give each item a name and a price
      </FormDescription>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <div
                className="flex sm:flex-row gap-5 sm:items-center flex-col items-baseline "
                items-end
                gap-2
              >
                <FormField
                  control={control}
                  name={`menuItems.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex item-center-gap-1">
                        Name
                      </FormLabel>
                      <FormControl>
                        <div className=" h-16">
                          <Input
                            {...field}
                            placeholder="Pizza"
                            // className="text-white"s
                          />
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`menuItems.${index}.price`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex item-center-gap-1">
                        Price
                      </FormLabel>
                      <FormControl>
                        <div className="h-16">
                          <Input
                            {...field}
                            placeholder="150"
                            // className="text-white"
                          />
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  onClick={() => remove(index)}
                  variant={'destructive'}
                >
                  Remove
                </Button>
              </div>
            ))}
          </FormItem>
        )}
      />
      <Button
        type="submit"
        onClick={() =>
          append({
            name: '',
            price: '',
          })
        }
      >
        Add Menu Item
      </Button>
    </div>
  );
};
