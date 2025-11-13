import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-center bg-indigo-900 py-4 text-white">
      <div className="container flex justify-between items-center mx-8">

        {/* Título */}
        <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>

        {/* Menu */}
        <div className="flex gap-4 text-lg">
          <Link to="/postagens">Postagens</Link>
          <Link to="/temas">Temas</Link>
          <Link to="/cadastro">Cadastrar Tema</Link>
          <Link to="/perfil">Perfil</Link>
          <Link to="/login">Sair</Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
