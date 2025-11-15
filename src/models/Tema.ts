// Local minimal Postagem type to avoid requiring ./Postagem module
interface Postagem {
  id?: number;
  titulo?: string;
  texto?: string;
}

export default interface Tema {
  id: number;
  descricao: string;
  postagem?: Postagem[] | null;
}