import { FormField, FormControl, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useFormContext } from "react-hook-form";

export const MarsForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <div className="py-2">
        <FormField
          control={control}
          name="coordenadas"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
                <Input width={500} placeholder="Coordenadas" {...field} />
              </FormControl>
              <FormMessage className="text-red-300 text-[10px]">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lote"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
                <Input width={500} placeholder="Lote" {...field} />
              </FormControl>
              <FormMessage className="text-red-300 text-[10px]">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
      </div>
    </>
  );
};
