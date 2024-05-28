import { useState } from "react";

export const AddressForm: React.FC = () => {
  const [endereco, setEndereco] = useState({
    rua: "",
    numero: "",
    cidade: "",
    estado: "",
    pais: "",
    cep: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEndereco({ ...endereco, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do endereço para o backend ou fazer qualquer outra operação necessária
    console.log("Endereço cadastrado:", endereco);
    // Limpa o formulário após o envio
    setEndereco({
      rua: "",
      numero: "",
      cidade: "",
      estado: "",
      pais: "",
      cep: "",
    });
  };

  return (
    <div>
      <h2>Cadastro de Endereço</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rua:
          <input
            type="text"
            name="rua"
            value={endereco.rua}
            onChange={handleChange}
          />
        </label>
        <label>
          Número:
          <input
            type="text"
            name="numero"
            value={endereco.numero}
            onChange={handleChange}
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            name="cidade"
            value={endereco.cidade}
            onChange={handleChange}
          />
        </label>
        <label>
          Estado:
          <input
            type="text"
            name="estado"
            value={endereco.estado}
            onChange={handleChange}
          />
        </label>
        <label>
          País:
          <input
            type="text"
            name="pais"
            value={endereco.pais}
            onChange={handleChange}
          />
        </label>
        <label>
          CEP:
          <input
            type="text"
            name="cep"
            value={endereco.cep}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Cadastrar Endereço</button>
      </form>
    </div>
  );
};
