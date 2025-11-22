import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// ------------------------
// 🔵 LOGIN (sem setDado)
// ------------------------
export async function login(url: string, dados: any) {
  const resposta = await api.post(url, dados);
  return resposta.data; // já retorna o objeto final
}

// ------------------------
// 🟣 CADASTRAR USUÁRIO
// ------------------------
export const cadastrarUsuario = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

// ------------------------
// 🟠 GET (buscar)
// ------------------------
export const buscar = async (
  url: string,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

// ------------------------
// 🟢 POST (cadastrar)
// ------------------------
export const cadastrar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

// ------------------------
// 🔵 PUT (atualizar)
// ------------------------
export const atualizar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};

// ------------------------
// 🔴 DELETE
// ------------------------
export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};
