import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import type Tema from "../models/Tema";
import { buscar } from "../services/Service";
import { ClipLoader } from "react-spinners";

// Componente responsável por exibir a tela de confirmação de exclusão de um tema
function DeletarTema() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { usuario, handleLogout } = useContext(AuthContext);
  const [tema, setTema] = useState<Tema>({} as Tema);
  const token = usuario.token;
  const { id } = useParams<{ id: string }>();

  async function buscarTemasPorId() {
    try {
      await buscar('/temas/${id}', setTema, {
        headers: { Authorization: token },
      });

    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarTemasPorId();
    }
  }, [id])

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado!');
      navigate('/');
    }
  }, [token]);

  function retornar() {
    navigate("/temas");
  }

async function deletarTema() {
  setIsLoading(true);

  try {
    await deletar(`/temas/${id}`, {
      headers: { Authorization: token }
    });

    alert('Tema deletado com sucesso!');
    navigate('/temas');

  } catch (error: any) {
    if (error.toString().includes('401')) {
      handleLogout();
    } else {
      alert('Erro ao deletar o tema!');
    }
  }

  setIsLoading(false);
  retornar();
}


  return (
    // Container geral centralizado com largura de 1/3 da tela
    <div className='container w-1/3 mx-auto'>

      {/* Título principal da página */}
      <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

      {/* Mensagem de aviso ao usuário */}
      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar o tema a seguir?
      </p>

      {/* Card que envolve o conteúdo do tema + botões */}
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>

        {/* Cabeçalho do card com o título "Tema" */}
        <header
          className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
          Tema
        </header>

        {/* Aqui aparece o nome/descrição do tema que será deletado */}
        <p className='p-8 text-3xl bg-slate-200 h-full'>tema.descricao</p>

        {/* Container dos botões de ação */}
        <div className="flex">

          {/* Botão para cancelar (não deletar) */}
          <button
            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
              onClick={retornar}
            >
            Não
          </button>

          {/* Botão para confirmar a exclusão */}
          <button
            className='w-full text-slate-100 bg-indigo-400
            hover:bg-indigo-600 flex items-center justify-center'
            onClick={DeletarTema}
            >
              {
                isLoading ?
                <ClipLoader
                  color="ffffff
                  size{24}"
                />
                :
                <span>Sim</span>
              }
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

// Exportação do componente para uso em outras partes da aplicação
export default DeletarTema
function deletar(arg0: string, arg1: { headers: { Authorization: string; }; }) {
  throw new Error("Function not implemented.");
}

