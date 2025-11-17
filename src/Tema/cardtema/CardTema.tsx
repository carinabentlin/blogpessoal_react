// Importa o componente Link, usado para navegação entre páginas
import { Link } from 'react-router-dom'
import type Tema from '../../models/Tema'

interface CardTemaProps {
    tema: Tema
}

// Componente funcional chamado CardTema
function CardTema({ tema }: CardTemaProps) {

  // Tudo que retornar aqui dentro será renderizado na tela
  return (
    // Div principal do card → borda, coluna, cantos arredondados, 
    // escondendo overflow e distribuindo espaço entre os elementos
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>

      {/* Cabeçalho do card com título "Tema" */}
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
        Tema
      </header>

      {/* Corpo do card com descrição */}
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
      

      {/* Container dos botões de ação: editar e deletar */}
      <div className="flex">

        {/* Link para navegar para página de edição */}
        <Link to= {`/editartema/${tema.id}`}
          className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800
          flex items-center justify-center py-2'
        >
          {/* O botão em si */}
          <button>Editar</button>
        </Link>

        {/* Link para navegar para página de exclusão */}
        <Link to={`/deletartema/${tema.id}`}
          className='text-slate-100 bg-red-400 hover:bg-red-700 w-full
          flex items-center justify-center'
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

// Exporta o componente para poder ser usado em outros arquivos
export default CardTema
