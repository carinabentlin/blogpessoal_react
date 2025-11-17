import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import type Tema from "../models/Tema";
import { buscar, cadastrar } from "../services/Service";
import { ClipLoader } from "react-spinners";

function FormTema() {

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

    // Atualiza o objeto tema conforme digitação
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        });

        console.log(JSON.stringify(tema));
    }

    async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            //atualização
        } else {
            //cadastro

            try {
                await cadastrar('/tema', tema, setTema, {
                    headers: { Authorization: token }

                })
                alert('O Tema foi cadastrado com sucesso!')

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else { }
                alert('Erro ao cadastrar o tema!')
            }
        }
    }


    setIsLoading(false);
    retornar();





    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8"> {id == undefined ? 'Cadastrar' : 'Atualizar'} Tema </h1>

            <form className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do Tema</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu tema"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={tema.descricao || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    className="rounded text-slate-100 bg-indigo-400
          hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {
                        isLoading ?
                            <ClipLoader
                                color="ffffff"
                                size={24}
                            /> :
                            <span>{id == undefined ? 'Cadastrar' : 'Atualizae'}</span>
                    }
                </button>
            </form>
        </div>
    );
}


export default FormTema;
function setIsLoading(arg0: boolean) {
    throw new Error("Function not implemented.");
}

