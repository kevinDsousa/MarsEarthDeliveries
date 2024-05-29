export const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const saveAddressToLocalStorage = (data: any) => {
  const currentAddresses = JSON.parse(
    localStorage.getItem("addresses") || "[]"
  );
  const newAddress = { id: generateId(), ...data };
  currentAddresses.push(newAddress);
  localStorage.setItem("addresses", JSON.stringify(currentAddresses));
};
