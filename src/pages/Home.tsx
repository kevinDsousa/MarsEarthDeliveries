export const Home = () => {
  return (
    <section className="bg-zinc-600 h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold drop-shadow-lg">
          Seja <span className="text-red-700">bem</span> vindo
        </h1>
        <h3 className="text-white text-2xl font-bold drop-shadow-lg">
          "yI'el"
        </h3>
        <div className="flex items-center justify-center">
          <img width={100} src="./terra.gif" alt="" />
          <div className="flex gap-2 flex-col my-5">
            <p className="text-slate-50 text-lg">
              Aqui você poderá enviar e receber pedidos entre as colonias (Gaia
              - Ares)
            </p>
            <p className="text-slate-50 text-sm">
              "Qun'a'vaD noblaHbe'wI' vIQorghlaHbe'chugh, vaj mu'tlheghmeyraj
              wIQoylaHbe'! 'oSrIq"
            </p>
          </div>
          <img width={100} src="./marte.gif" alt="" />
        </div>
        <p className="text-green-600 text-sm">
          Cadastre um endereço interplanetário.
        </p>
      </div>
    </section>
  );
};
