// React Hooks e Tipagens
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

// Hook do React Router para navegação
import { useNavigate } from "react-router-dom";

// Componente de loading
import { ClipLoader } from "react-spinners";

// Modelo (interface) do usuário
import type Usuario from "../../models/Usuario";

// Serviço que chama a API do backend
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {

  //=== Navegação ===========================================================
  const navigate = useNavigate();

  //=== Estados do componente ===============================================
  const [isLoading, setIsLoading] = useState(false);          // exibe loader
  const [confirmarSenha, setConfirmarSenha] = useState("");   // repete senha

  // Dados do formulário
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  //=== Redirecionamento automático após cadastro ===========================
  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();   // navega para home
    }
  }, [usuario.id]);

  // Função para retornar ao início
  function retornar() {
    navigate('/');
  }

  //=== Funções de atualização dos inputs ==================================

  // Atualiza o objeto usuário conforme digitação
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  // Atualiza campo Confirmar Senha
  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  //=== Função principal de cadastro ========================================
  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();   // evita reload da página

    // Validação de senha
    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true);   // inicia loader

      try {
        // envia dados para o backend
        await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuario);
        alert('Usuário cadastrado com sucesso!');
      } catch (error) {
        alert('Erro ao cadastrar o usuário!');
      }

    } else {
      alert('Dados inconsistentes! Verifique a senha.');
      setUsuario({ ...usuario, senha: '' });
      setConfirmarSenha('');
    }

    setIsLoading(false);   // encerra loader
  }

  //=== Layout ==============================================================

  return (
    <>
      {/* Grid 2 colunas: esquerda = imagem, direita = formulário */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center">

        {/* COLUNA ESQUERDA — IMAGEM */}
        <div
          className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] 
                     lg:block hidden bg-no-repeat 
                     w-full min-h-screen bg-cover bg-center"
        ></div>

        {/* COLUNA DIREITA — FUNDO BRANCO */}
        <div className="w-full h-full flex justify-center items-center bg-white">

          {/* FORMULÁRIO */}
          <form
            className='flex justify-center items-center flex-col w-2/3 gap-3 text-black' 
            // ↑ ADICIONADO text-black PARA OS LABELS APARECEREM
            onSubmit={cadastrarNovoUsuario}
          >

            <h2 className='text-slate-900 text-5xl mb-4'>Cadastrar</h2>

            {/* Nome */}
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.nome}
                onChange={atualizarEstado}
              />
            </div>

            {/* Usuário */}
            <div className="flex flex-col w-full">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.usuario}
                onChange={atualizarEstado}
              />
            </div>

            {/* Foto */}
            <div className="flex flex-col w-full">
              <label htmlFor="foto">Foto</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="URL da Foto"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.foto}
                onChange={atualizarEstado}
              />
            </div>

            {/* Senha */}
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.senha}
                onChange={atualizarEstado}
              />
            </div>

            {/* Confirmar senha */}
            <div className="flex flex-col w-full">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={confirmarSenha}
                onChange={handleConfirmarSenha}
              />
            </div>

            {/* Botões */}
            <div className="flex justify-around w-full gap-8 mt-4">

              {/* Botão cancelar */}
              <button
                type='reset'
                className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2'
                onClick={retornar}
              >
                Cancelar
              </button>

              {/* Botão cadastrar */}
              <button
                type='submit'
                className='rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2 flex justify-center'
              >
                {isLoading ? (
                  <ClipLoader color="#ffffff" size={24} />
                ) : (
                  <span>Cadastrar</span>
                )}
              </button>

            </div>

          </form>

        </div>

      </div>
    </>
  );
}

export default Cadastro;
