import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-zinc-800 py-6 font-mono">
      <ul className="flex flex-row gap-5 px-3">
        <Link className="btn-custom text-slate-50 hover:text-slate-400" to="/">
          Inicio
        </Link>
        <Link className="btn-custom btn-outline-green" to="/new-address">
          Cadastrar um novo endereço
        </Link>
        <Link className="btn-custom btn-outline-yellow" to="/view-address">
          Endereços
        </Link>
      </ul>
    </nav>
  );
};
