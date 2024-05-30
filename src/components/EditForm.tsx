import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { marsSchema, earthSchema } from "../utils/formSchema";
import { MarsForm } from "./MarsForm";
import { EarthForm } from "./EarthForm";
import { Button } from "./ui/button";
import { updateAddressToLocalStorage } from "../utils/localStorageUtils";
import { Address } from "../types/Address";
import { AddressData } from "../types/AddressData";

export const EditForm = () => {
  const [planet, setPlanet] = useState("terra");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const getAddressById = (id: string) => {
    const storedAddresses = localStorage.getItem("addresses");
    if (storedAddresses) {
      const addresses = JSON.parse(storedAddresses);
      return addresses.find((address: Address) => address.id === id);
    }
    return null;
  };

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

  useEffect(() => {
    if (id) {
      const address = getAddressById(id);
      if (address) {
        setPlanet(address.planet || "terra");
        methods.reset(address);
      }
    }
    setLoading(false);
  }, [id, methods]);

  const onSubmit = (data: AddressData) => {
    try {
      if (id) {
        updateAddressToLocalStorage(data, planet, id);
        navigate("/view-address");
      } else {
        console.error(
          "ID não encontrado. Não é possível atualizar o endereço."
        );
      }
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center text-slate-50"
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
