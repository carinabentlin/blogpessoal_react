function Home() {
  return (
    <div 
      className="bg-[#0f0e17] flex items-center justify-center px-6"
      style={{ height: "calc(100vh - 144px)" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 text-white">

        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-6 animate-fade-slide">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl text-center md:text-left">
            Seja bem vinde!
          </h2>

          <p className="text-lg md:text-xl opacity-90 text-center md:text-left">
            Expresse aqui os seus pensamentos!
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              className="border-2 border-white px-6 py-2 rounded-lg text-lg font-medium text-white hover:bg-white hover:text-[#4c1d95] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            >
              Nova Postagem
            </button>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/fyfri1v.png"
            alt="Imagem da página home"
            className="w-56 md:w-72 lg:w-80 object-contain animate-float"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
