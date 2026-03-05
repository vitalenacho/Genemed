export interface IPrecioProducto {
  id: string;
  producto_id: string;
  alicuota_iva_bps: number;
  precio_neto: number;
  precio_final: number;
  vigente_desde: string;
  vigente_hasta: string | null;
  fuente: string | null;
  creado_en: string;
  actualizado_en: string;
}
export namespace IPrecioProducto {
  export interface ICrear {
    producto_id: string;
    /** Precio final en centavos (con IVA). El sistema calcula neto automáticamente. */
    precio_final: number;
    vigente_desde: string;
    vigente_hasta?: string;
    fuente?: string;
  }
}
