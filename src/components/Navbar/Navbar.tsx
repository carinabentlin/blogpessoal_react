import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  
  const { handleLogout } = useContext(AuthContext) 

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso!');
    navigate('/');
  }
  

  return (
    <div className="w-full flex justify-center bg-indigo-900 py-4 text-white">
      <div className="container flex justify-between items-center mx-8">

        {/* Título */}
        <Link to="/home" className="text-2xl font-bold">   
        Blog Pessoal
        </Link>

        {/* Menu */}
        <div className="flex gap-4 text-lg">
          <Link to="/postagens">Postagens</Link>
          <Link to='/temas' className='hover:underline'>Temas</Link>
          <Link to="/cadastro">Cadastrar Tema</Link>
          <Link to="/perfil">Perfil</Link>
          <Link to='' onClick={logout} className="hover:underline">Sair</Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
