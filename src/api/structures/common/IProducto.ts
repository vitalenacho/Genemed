export interface IProducto {
  id: string;
  nombre: string;
  descripcion: string | null;
  codigo_barras: string | null;
  troquel: string | null;
  gtin: string | null;
  clave_cnpm: string | null;
  tipo_venta: IProducto.TipoVenta;
  proveedor_id: string;
  familia_id: string | null;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
}
export namespace IProducto {
  export type TipoVenta = "VENTA_LIBRE" | "RECETA" | "RECETA_ARCHIVADA" | "RECETA_DUPLICADA" | "HOSPITALARIO";
  export interface ICrear {
    nombre: string;
    descripcion?: string;
    codigo_barras?: string;
    troquel?: string;
    gtin?: string;
    clave_cnpm?: string;
    tipo_venta: TipoVenta;
    proveedor_id: string;
    familia_id?: string;
  }
  export interface IActualizar {
    nombre?: string;
    descripcion?: string;
    codigo_barras?: string;
    troquel?: string;
    gtin?: string;
    clave_cnpm?: string;
    tipo_venta?: TipoVenta;
    familia_id?: string;
    activo?: boolean;
  }
}
