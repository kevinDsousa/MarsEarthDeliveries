import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../components/ui/table";
import { removeAddressFromLocalStorage } from "../utils/localStorageUtils";

interface Address {
  id: string;
  rua?: string;
  numero?: string;
  cidade?: string;
  estado?: string;
  pais?: string;
  cep?: string;
  coordenadas?: string;
  lote?: string;
  planet?: string;
}

export const AddressTable = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    const storedAddresses = localStorage.getItem("addresses");
    if (storedAddresses) {
      setAddresses(JSON.parse(storedAddresses));
    }
  }, []);

  return (
    <Table className="bg-zinc-600 text-slate-50">
      <TableHeader>
        <TableRow className="bg-zinc-900">
          <TableHead>Planeta</TableHead>
          <TableHead>Rua</TableHead>
          <TableHead>Número</TableHead>
          <TableHead>Cidade</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>País</TableHead>
          <TableHead>CEP</TableHead>
          <TableHead>Coordenadas</TableHead>
          <TableHead>Lote</TableHead>
          <TableHead>Opções</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {addresses.map((address) => (
          <TableRow key={address.id}>
            <TableCell>{address.planet || "-"}</TableCell>
            <TableCell>{address.rua || "-"}</TableCell>
            <TableCell>{address.numero || "-"}</TableCell>
            <TableCell>{address.cidade || "-"}</TableCell>
            <TableCell>{address.estado || "-"}</TableCell>
            <TableCell>{address.pais || "-"}</TableCell>
            <TableCell>{address.cep || "-"}</TableCell>
            <TableCell>{address.coordenadas || "-"}</TableCell>
            <TableCell>{address.lote || "-"}</TableCell>
            <TableCell className="flex gap-1">
              <button
                className="btn-custom btn-outline-yellow"
                onClick={() => console.log("Editar")}
              >
                Editar
              </button>
              <button
                className="btn-custom btn-outline-red"
                onClick={() => removeAddressFromLocalStorage(address.id)}
              >
                Remover
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AddressTable;
