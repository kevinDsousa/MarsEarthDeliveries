import { FormField, FormControl, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useFormContext } from "react-hook-form";

export const MarsForm = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-3 mt-3">
      <FormField
        control={control}
        name="lote"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
              <Input
                type="number"
                min={1}
                defaultValue={1}
                placeholder="Lote"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-300 text-[10px]">
              {fieldState.error?.message}
            </FormMessage>
          </FormItem>
        )}
      />
    </div>
  );
};
