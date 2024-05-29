import { v4 as uuidv4 } from "uuid";

export const saveAddressToLocalStorage = (data: any, planet: string) => {
  const id = uuidv4();

  const existingAddresses = JSON.parse(
    localStorage.getItem("addresses") || "[]"
  );

  const addressWithId = { id, ...data, planet };

  const updatedAddresses = [...existingAddresses, addressWithId];

  localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
};

export const removeAddressFromLocalStorage = (id: string) => {
  const existingAddresses = JSON.parse(
    localStorage.getItem("addresses") || "[]"
  );

  let updatedAddresses: any[];

  if (id !== undefined) {
    updatedAddresses = existingAddresses.filter(
      (address: any) => address.id.toString() !== id.toString()
    );

    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  } else {
    console.error("ID is undefined. Cannot remove address.");
    updatedAddresses = existingAddresses;
  }

  return updatedAddresses;
};

export const updateAddressToLocalStorage = (
  data: any,
  planet: string,
  id: string
) => {};
