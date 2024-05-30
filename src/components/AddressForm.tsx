import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
import { AddressData } from "../types/AddressData";

export const AddressForm = () => {
  const [planet, setPlanet] = useState("terra");
  const navigate = useNavigate();

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
            lote: "",
          },
  });

  const onSubmit = (data: AddressData) => {
    try {
      saveAddressToLocalStorage(data, planet);
      navigate("/view-address");
    } catch (error) {
      console.error("Erro ao salvar os dados", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center text-slade-50"
      >
        <h1 className="text-2xl text-slate-50 font-bold">
          Registre os dados de envio
        </h1>
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
                    lote: "",
                  }
            );
          }}
        >
          <SelectTrigger className="btn-outline-orange w-1/2 bg-zinc-900 font-mono border-r-4">
            <SelectValue placeholder="Select planet" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 text-slate-50">
            <SelectItem
              className="bg-zinc-900 btn-outline-orange"
              value="terra"
            >
              Terra
            </SelectItem>
            <SelectItem value="marte">Marte</SelectItem>
          </SelectContent>
        </Select>

        {planet === "terra" ? <EarthForm /> : <MarsForm />}

        <Button
          variant={"outline"}
          className="text-slate-50 border-green-700 rounded-full hover:bg-green-700 mt-5"
          type="submit"
        >
          Salvar Endereço
        </Button>
      </form>
    </FormProvider>
  );
};
