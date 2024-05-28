import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-6">
      <p className="flex gap-5 items-center justify-center text-slate-50 font-mono">
        Desafio
        <Link
          target="_blank"
          to="https://www.linkedin.com/company/beyond-the-bytes/"
          className="text-green-800"
        >
          Beyond the bytes
        </Link>
        feito por
        <Link target="_blank" to="https://github.com/kevinDsousa">
          <img src="./github.png" />
        </Link>
      </p>
    </footer>
  );
};
