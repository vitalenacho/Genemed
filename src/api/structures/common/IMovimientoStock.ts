export interface IMovimientoStock {
  id: string;
  almacen_id: string;
  producto_id: string;
  tipo_movimiento: IMovimientoStock.TipoMovimiento;
  cantidad: number;
  referencia_id: string | null;
  referencia_tipo: string | null;
  notas: string | null;
  creado_en: string;
  creado_por: string;
}
export namespace IMovimientoStock {
  export type TipoMovimiento = "ENTRADA" | "SALIDA" | "AJUSTE" | "TRANSFERENCIA_ENTRADA" | "TRANSFERENCIA_SALIDA" | "DEVOLUCION";
}
