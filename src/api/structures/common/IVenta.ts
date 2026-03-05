export interface IVenta {
  id: string;
  numero_venta: string;
  almacen_id: string;
  estado: IVenta.Estado;
  notas: string | null;
  vendido_en: string;
  items: IVenta.IItem[];
  creado_en: string;
  actualizado_en: string;
}
export namespace IVenta {
  export type Estado = "PENDIENTE" | "COMPLETADA" | "ANULADA";
  export interface IItem {
    id: string;
    producto_id: string;
    cantidad: number;
    alicuota_iva_bps: number;
    precio_neto_unitario: number;
    precio_final_unitario: number;
  }
  export interface ICrear {
    almacen_id: string;
    notas?: string;
    items: IItemCrear[];
  }
  export interface IItemCrear {
    producto_id: string;
    cantidad: number;
  }
  export interface IAnular {
    motivo?: string;
  }
}
