// Importando funções e tipos do React
import { createContext, useState, type ReactNode } from "react";

// Importando a interface do usuário que faz login
import type UsuarioLogin from "../models/UsuarioLogin";

// Importando a função que chama a API de login no backend
import { login } from "../services/Service";


//------------------------------------------------------------
// 🔹 Interface que define o QUE vai ser enviado para os componentes
//   que usarem esse contexto.
//------------------------------------------------------------
interface AuthContextProps {
    usuario: UsuarioLogin                        // Dados do usuário logado
    handleLogout(): void                         // Função para sair / limpar usuário
    handlelogin(usuarioLogin: UsuarioLogin): Promise<void>  // Função para fazer login
    isLoading: boolean                            // Exibe ou não o loader na tela
}


//------------------------------------------------------------
// 🔹 Interface do provider: define que ele recebe "children"
//   (ou seja, qualquer componente dentro dele).
//   Ex: <AuthProvider> ... </AuthProvider>
//------------------------------------------------------------
interface AuthProviderProps {
    children: ReactNode
}


//------------------------------------------------------------
// 🔹 Criamos o CONTEXTO em si
//   Ele será usado para compartilhar informações entre componentes
//------------------------------------------------------------
export const AuthContext = createContext({} as AuthContextProps);


//------------------------------------------------------------
// 🔹 Componente responsável por "fornecer" o contexto para todo o app.
//   Tudo o que estiver dentro do <AuthProvider> terá acesso ao AuthContext.
//------------------------------------------------------------
export function AuthProvider({ children }: AuthProviderProps) {

    //--------------------------------------------------------
    // 🔹 Estado que guarda as informações do usuário logado.
    //    Inicialmente o usuário é "vazio".
    //--------------------------------------------------------
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    });

    //--------------------------------------------------------
    // 🔹 Estado responsável por controlar o loader na tela de login.
    //    Quando está "true", mostra o spinner.
    //--------------------------------------------------------
    const [isLoading, setIsLoading] = useState<boolean>(false);


    //--------------------------------------------------------
    // 🔹 Função para autenticar o usuário (login)
    //    Essa função é chamada pela tela de Login
    //--------------------------------------------------------
    async function handlelogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true); // Exibe o loader enquanto a requisição é feita

        try {
            // Faz a requisição para o backend, enviando usuário e senha
            // O backend devolve os dados completos + token
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);

            alert('Usuário autenticado com sucesso!');
        } catch (error) {
            alert("Os dados do usuário estão incorretos. Tente novamente!");
        }

        setIsLoading(false); // Esconde o loader
    }


    //--------------------------------------------------------
    // 🔹 Função de logout (limpa os dados do usuário)
    //    Isso faz o usuário "deslogar"
    //--------------------------------------------------------
    function handleLogout() {

        // Reseta o estado para usuário vazio
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        });
    }


    //--------------------------------------------------------
    // 🔹 Aqui estamos falando para o React:
    //    "Qualquer componente dentro do AuthProvider pode usar:"
    //       - usuario
    //       - handleLogin
    //       - handleLogout
    //       - isLoading
    //--------------------------------------------------------
    return (
        <AuthContext.Provider value={{ usuario, handleLogout, handlelogin, isLoading }}>
            
            {/* Renderiza tudo o que estiver dentro do provider */}
            {children}

        </AuthContext.Provider>
    );
}

