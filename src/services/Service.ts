import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-spring-i851.onrender.com'
})


// ------------------------------------------------------
// Função para CONSULTAR dados na API usando token (GET)
// ------------------------------------------------------
export const buscar = async (
  url: string,          // Rota da API que será chamada
  setDados: Function,   // Função que atualiza o estado com a resposta
  header: Object        // Cabeçalho contendo o token de autorização
) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
}



// ------------------------------------------------------
// Função para CADASTRAR dados na API usando token (POST)
// ------------------------------------------------------
export const cadastrar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
}



// ------------------------------------------------------
// Função para ATUALIZAR dados na API usando token (PUT)
// ------------------------------------------------------
export const atualizar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
}



// ------------------------------------------------------
// Função para DELETAR dados na API usando token (DELETE)
// ------------------------------------------------------
export const deletar = async (
  url: string,
  header: Object
) => {
  await api.delete(url, header);
}



// ------------------------------------------------------
// Função ESPECÍFICA para cadastrar USUÁRIO (SEM TOKEN)
// usada na página Cadastro
// ------------------------------------------------------
export const cadastrarUsuario = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  // Aqui não envia header/token, pois cadastro é público
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
}
