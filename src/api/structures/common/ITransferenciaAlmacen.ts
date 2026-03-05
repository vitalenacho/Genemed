export interface ITransferenciaAlmacen {
  id: string;
  numero_transferencia: string;
  almacen_origen_id: string;
  almacen_destino_id: string;
  estado: ITransferenciaAlmacen.Estado;
  notas: string | null;
  enviado_en: string | null;
  recibido_en: string | null;
  creado_en: string;
  actualizado_en: string;
}
export namespace ITransferenciaAlmacen {
  export type Estado = "PENDIENTE" | "EN_TRANSITO" | "RECIBIDA" | "CANCELADA";
  export interface ICrear {
    almacen_origen_id: string;
    almacen_destino_id: string;
    notas?: string;
  }
  export interface IActualizar {
    estado?: Estado;
    notas?: string;
  }
}
