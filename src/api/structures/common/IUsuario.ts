export interface IUsuario {
  id: string;
  email: string;
  nombre: string;
  apellido: string;
  rol: IUsuario.Rol;
  almacen_id: string | null;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
}
export namespace IUsuario {
  export type Rol = "SUPER_ADMIN" | "ADMIN_FARMACIA" | "ADMIN_DROGUERIA" | "OPERADOR" | "VISUALIZADOR";
  export interface ICrear {
    email: string;
    nombre: string;
    apellido: string;
    password: string;
    rol: Rol;
    almacen_id?: string;
  }
  export interface IActualizar {
    nombre?: string;
    apellido?: string;
    rol?: Rol;
    almacen_id?: string;
    activo?: boolean;
  }
}
