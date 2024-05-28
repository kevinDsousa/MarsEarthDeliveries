import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="bg-zinc-800 h-screen w-full flex items-center justify-center flex-col gap-3">
      <h1 className="text-slate-50">
        Ops... parece que deu um erro em sua navegação
      </h1>
      <img src="./browser.png" alt="not found" width={100} height={100} />
      <p className="text-slate-50 text-xl">
        Clique abaixo para retornar o inicio
      </p>
      <Link className="btn-custom btn-outline-red" to="/">
        Voltar
      </Link>
    </section>
  );
};
