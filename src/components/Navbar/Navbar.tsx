import AnimatedBackground from "../AnimatedBackground";

function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 text-white shadow-lg backdrop-blur-sm z-50 overflow-hidden">
      {/* Fundo animado */}
      <AnimatedBackground />

      {/* Conteúdo da Navbar */}
      <div className="container relative z-10 mx-auto flex justify-between items-center h-16 px-8">
        <h1 className="text-2xl font-semibold tracking-wide">Blog Pessoal</h1>

        <nav className="flex gap-6 text-lg">
          <a href="#" className="hover:text-indigo-300 transition-colors">Postagens</a>
          <a href="#" className="hover:text-indigo-300 transition-colors">Temas</a>
          <a href="#" className="hover:text-indigo-300 transition-colors">Cadastrar Tema</a>
          <a href="#" className="hover:text-indigo-300 transition-colors">Perfil</a>
          <a href="#" className="hover:text-indigo-300 transition-colors">Sair</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
