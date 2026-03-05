export interface IBackup {
  nombre: string;
  fecha: string;
  tamano_bytes: number;
  ruta: string;
}
export namespace IBackup {
  export interface IRestaurar {
    confirmar_password: string;
  }
}
