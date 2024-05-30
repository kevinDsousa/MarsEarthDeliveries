import { v4 as uuidv4 } from "uuid";
import { Address } from "../types/Address";
import { AddressData } from "../types/AddressData";

export const saveAddressToLocalStorage = (
  data: AddressData,
  planet: string
) => {
  const id = uuidv4();

  const existingAddresses: Address[] = JSON.parse(
    localStorage.getItem("addresses") || "[]"
  );

  const addressWithId: Address = { id, ...data, planet };

  const updatedAddresses = [...existingAddresses, addressWithId];

  localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
};

export const removeAddressFromLocalStorage = (id: string): Address[] => {
  const existingAddresses: Address[] = JSON.parse(
    localStorage.getItem("addresses") || "[]"
  );

  const updatedAddresses = existingAddresses.filter(
    (address: Address) => address.id !== id
  );

  localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  return updatedAddresses;
};

export const updateAddressToLocalStorage = (
  updatedData: AddressData,
  planet: string,
  id: string
) => {
  const existingAddresses: Address[] = JSON.parse(
    localStorage.getItem("addresses") || "[]"
  );

  const addressIndex = existingAddresses.findIndex(
    (address: Address) => address.id === id
  );

  if (addressIndex !== -1) {
    existingAddresses[addressIndex] = {
      ...existingAddresses[addressIndex],
      ...updatedData,
      planet,
    };
    localStorage.setItem("addresses", JSON.stringify(existingAddresses));
  } else {
    console.error("Endereço não encontrado. Não é possível atualizar.");
  }
};
