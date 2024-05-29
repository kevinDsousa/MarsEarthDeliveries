import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { marsSchema, earthSchema } from "../utils/formSchema";
import { MarsForm } from "./MarsForm";
import { EarthForm } from "./EarthForm";
import { Button } from "./ui/button";
import { saveAddressToLocalStorage } from "../utils/localStorageUtils";

export const AddressForm = () => {
  const [planet, setPlanet] = useState("terra");

  const methods = useForm({
    resolver: zodResolver(planet === "terra" ? earthSchema : marsSchema),
    defaultValues:
      planet === "terra"
        ? {
            rua: "",
            numero: "",
            cidade: "",
            estado: "",
            pais: "",
            cep: "",
          }
        : {
            coordenadas: "",
            lote: "",
          },
  });

  const onSubmit = (data: any) => {
    try {
      saveAddressToLocalStorage(data);
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="text-slate-50 flex flex-col items-center justify-end py-5"
      >
        <h1 className="text-2xl text-slate-50 font-bold">
          Registre os dados de envio
        </h1>
        <div className="py-2">
          <Select
            value={planet}
            onValueChange={(value) => {
              setPlanet(value);
              methods.reset(
                value === "terra"
                  ? {
                      rua: "",
                      numero: "",
                      cidade: "",
                      estado: "",
                      pais: "",
                      cep: "",
                    }
                  : {
                      coordenadas: "",
                      lote: "",
                    }
              );
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select planet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="terra">Terra</SelectItem>
              <SelectItem value="marte">Marte</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {planet === "terra" ? <EarthForm /> : <MarsForm />}

        <Button
          variant={"outline"}
          className="border-green-700 rounded-full hover:bg-green-700"
          type="submit"
        >
          Salvar Endereço
        </Button>
      </form>
    </FormProvider>
  );
};
