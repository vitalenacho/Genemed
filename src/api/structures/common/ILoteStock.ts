export interface ILoteStock {
  id: string;
  producto_id: string;
  numero_lote: string;
  fecha_vencimiento: string | null;
  cantidad: number;
  creado_en: string;
  actualizado_en: string;
}
export namespace ILoteStock {
  export interface ICrear {
    producto_id: string;
    numero_lote: string;
    fecha_vencimiento?: string;
    cantidad: number;
  }
}
