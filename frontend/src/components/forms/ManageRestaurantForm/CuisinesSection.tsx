import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cuisinesList } from '@/config/cuisinesList';
import { useFormContext } from 'react-hook-form';

export const CuisinesSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Cuisines</h2>
      <FormDescription>
        Select the cuisines that restaurent serves
      </FormDescription>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1 ">
              {cuisinesList.map((cuisine) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0 mt-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes(cuisine)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...field.value, cuisine]);
                        } else {
                          field.onChange(
                            field.value.filter(
                              (value: string) => value !== cuisine,
                            ),
                          );
                        }
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm">{cuisine}</FormLabel>
                </FormItem>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
