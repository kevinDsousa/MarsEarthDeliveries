import { useState, useEffect } from "react";
import { FormField, FormControl, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useFormContext } from "react-hook-form";

export const EarthForm = () => {
  const { control, watch } = useFormContext();
  const cepValue = watch("cep");

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (cepValue && cepValue.length === 8) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [cepValue]);

  return (
    <div className="flex flex-col gap-3 mt-3">
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
      <FormField
        control={control}
        name="rua"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormControl className="border-slate-900 w-80 rounded-xl text-slate-50">
              <Input
                width={500}
                placeholder="Rua"
                {...field}
                disabled={isDisabled}
              />
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
              <Input
                width={500}
                placeholder="Número"
                {...field}
                disabled={isDisabled}
              />
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
              <Input
                width={500}
                placeholder="Cidade"
                {...field}
                disabled={isDisabled}
              />
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
              <Input
                width={500}
                placeholder="Estado"
                {...field}
                disabled={isDisabled}
              />
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
              <Input
                width={500}
                placeholder="País"
                {...field}
                disabled={isDisabled}
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
