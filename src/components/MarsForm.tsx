import { LoteValues } from "../utils/lotes";
import { FormField, FormControl, FormItem, FormMessage } from "./ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
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
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="btn-outline-orange w-full bg-zinc-900 font-mono border-r-4">
                  <SelectValue placeholder="Selecione um Lote" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 text-slate-50">
                  {Object.values(LoteValues).map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
