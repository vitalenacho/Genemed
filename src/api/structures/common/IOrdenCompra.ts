export interface IOrdenCompra {
  id: string;
  numero_orden: string;
  almacen_id: string;
  proveedor_id: string;
  estado: IOrdenCompra.Estado;
  notas: string | null;
  fecha_esperada: string | null;
  recibido_en: string | null;
  items: IOrdenCompra.IItem[];
  creado_en: string;
  actualizado_en: string;
}
export namespace IOrdenCompra {
  export type Estado = "BORRADOR" | "ENVIADA" | "PARCIALMENTE_RECIBIDA" | "RECIBIDA" | "CANCELADA";
  export interface IItem {
    id: string;
    producto_id: string;
    cantidad_pedida: number;
    cantidad_recibida: number;
    precio_unitario: number;
  }
  export interface ICrear {
    almacen_id: string;
    proveedor_id: string;
    notas?: string;
    fecha_esperada?: string;
    items: IItemCrear[];
  }
  export interface IItemCrear {
    producto_id: string;
    cantidad_pedida: number;
    precio_unitario: number;
  }
  export interface IActualizar {
    estado?: Estado;
    notas?: string;
    fecha_esperada?: string;
  }
}
