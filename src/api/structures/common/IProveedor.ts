export interface IProveedor {
  id: string;
  razon_social: string;
  cuit: string;
  telefono: string | null;
  email: string | null;
  direccion: string | null;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
}
export namespace IProveedor {
  export interface ICrear {
    razon_social: string;
    cuit: string;
    telefono?: string;
    email?: string;
    direccion?: string;
  }
  export interface IActualizar {
    razon_social?: string;
    telefono?: string;
    email?: string;
    direccion?: string;
    activo?: boolean;
  }
}
