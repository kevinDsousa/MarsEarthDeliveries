import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { marsSchema, earthSchema } from "../utils/formSchema";
import { MarsForm } from "./MarsForm";
import { EarthForm } from "./EarthForm";
import { Button } from "./ui/button";
import { updateAddressToLocalStorage } from "../utils/localStorageUtils";

export const EditForm = () => {
  const [planet, setPlanet] = useState("terra");
  const navigate = useNavigate();
  const { id } = useParams();
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

  const onSubmit = (data: any) => {
    try {
      if (id) {
        updateAddressToLocalStorage(data, planet, id);
        console.log("Data edited successfully");
        navigate("/view-address");
      } else {
        console.error("ID is undefined. Cannot update address.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center text-slade-50"
      >
        <h1 className="text-2xl text-slate-50 font-bold">
          Atualize seu cadastro
        </h1>

        {planet === "terra" ? <EarthForm /> : <MarsForm />}

        <Button
          variant={"outline"}
          className="text-slate-50 border-green-700 rounded-full hover:bg-green-700 mt-5"
          type="submit"
        >
          Atualizar
        </Button>
      </form>
    </FormProvider>
  );
};
