export interface IAjusteInventario {
  id: string;
  numero_ajuste: string;
  almacen_id: string;
  estado: IAjusteInventario.Estado;
  motivo: IAjusteInventario.Motivo;
  notas: string | null;
  iniciado_en: string | null;
  confirmado_en: string | null;
  items: IAjusteInventario.IItem[];
  creado_en: string;
  actualizado_en: string;
}
export namespace IAjusteInventario {
  export type Estado = "EN_CURSO" | "PENDIENTE_APROBACION" | "APROBADO" | "RECHAZADO" | "CANCELADO";
  export type Motivo = "RECUENTO_PERIODICO" | "MERMA" | "ROTURA" | "VENCIMIENTO" | "DIFERENCIA_RECEPCION" | "OTRO";
  export interface IItem {
    id: string;
    producto_id: string;
    lote_id: string | null;
    cantidad_sistema: number;
    cantidad_fisica: number;
    diferencia: number;
  }
  export interface ICrear {
    almacen_id: string;
    motivo: Motivo;
    notas?: string;
  }
  export interface IActualizarItem {
    cantidad_fisica: number;
  }
  export interface IAprobar {
    notas?: string;
  }
  export interface IRechazar {
    motivo?: string;
  }
}
