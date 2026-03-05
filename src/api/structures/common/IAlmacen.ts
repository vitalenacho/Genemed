export interface IAlmacen {
  id: string;
  nombre: string;
  codigo: string;
  tipo: IAlmacen.Tipo;
  direccion: string | null;
  telefono: string | null;
  email: string | null;
  activo: boolean;
  habilitaciones_alertas?: IAlmacen.IHabilitacionAlerta[];
  creado_en: string;
  actualizado_en: string;
}
export namespace IAlmacen {
  export type Tipo = "FARMACIA" | "DROGUERIA" | "DEPOSITO";
  export interface IHabilitacionAlerta {
    habilitacion_id: string;
    tipo: string;
    dias_para_vencer: number;
    estado: "VIGENTE" | "POR_VENCER" | "VENCIDA";
  }
  export interface ICrear {
    nombre: string;
    codigo: string;
    tipo: Tipo;
    direccion?: string;
    telefono?: string;
    email?: string;
  }
  export interface IActualizar {
    nombre?: string;
    direccion?: string;
    telefono?: string;
    email?: string;
    activo?: boolean;
  }
}
