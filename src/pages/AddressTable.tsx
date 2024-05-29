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
import { Link } from "react-router-dom";

interface Address {
  id: string;
  rua?: string;
  numero?: string;
  cidade?: string;
  estado?: string;
  pais?: string;
  cep?: string;
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

  const handleRemoveAddress = (id: string) => {
    const updatedAddresses = removeAddressFromLocalStorage(id);
    setAddresses(updatedAddresses);
  };

  return (
    <div className="p-4">
      <h1 className="">Seus Endereços</h1>
      {addresses.length > 0 ? (
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
                <TableCell>{address.lote || "-"}</TableCell>
                <TableCell className="flex gap-1">
                  <Link
                    className="btn-custom btn-outline-yellow"
                    to={`/edit-address/${address.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn-custom btn-outline-red"
                    onClick={() => handleRemoveAddress(address.id)}
                  >
                    Remover
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-slate-50 text-center mt-4">
          <p className="text-zinc-900">
            Nenhum endereço encontrado. Cadastre um novo endereço.
          </p>
        </div>
      )}
    </div>
  );
};
