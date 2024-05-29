import { FormField, FormControl, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useFormContext } from "react-hook-form";

export const EarthForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <div className="flex flex-col gap-3 mt-3">
        <FormField
          control={control}
          name="rua"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
                <Input width={500} placeholder="Rua" {...field} />
              </FormControl>
              <FormMessage className="text-red-300 text-[10px]">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="numero"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
                <Input width={500} placeholder="Número" {...field} />
              </FormControl>
              <FormMessage className="text-red-300 text-[10px]">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="cidade"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
                <Input width={500} placeholder="Cidade" {...field} />
              </FormControl>
              <FormMessage className="text-red-300 text-[10px]">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="estado"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
                <Input width={500} placeholder="Estado" {...field} />
              </FormControl>
              <FormMessage className="text-red-300 text-[10px]">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="pais"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
                <Input width={500} placeholder="País" {...field} />
              </FormControl>
              <FormMessage className="text-red-300 text-[10px]">
                {fieldState.error?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="cep"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
                <Input width={500} placeholder="CEP" {...field} />
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
