function Home() {
  return (
    <div className="bg-indigo-900 flex justify-center">
      {/* Grid que divide a tela em 2 Colunas */}
      <div className="container grid grid-cols-2 text-white">

        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-5xl font-bold">Seja bem vinde!</h2>

          <p className="text-xl">
            Expresse aqui os seus pensamentos!
          </p>

          {/* Botão */}
          <div className="flex justify-around gap-4">
            <div className="rounded text-white border-white border-solid border-2 py-2 px-4">
              Nova Postagem
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div
          className="flex justify-center"
        >
          <img
            src="https://i.imgur.com/fyfri1v.png"
            alt="Imagem da página home"
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
