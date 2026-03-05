export interface IPaginado<T> {
  datos: T[];
  total: number;
  pagina: number;
  limite: number;
}
export namespace IPaginado {
  export interface IRequest {
    pagina?: number;
    limite?: number;
  }
}
