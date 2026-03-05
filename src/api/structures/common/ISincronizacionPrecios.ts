export interface ISincronizacionPrecios {
  id: string;
  iniciado_en: string;
  finalizado_en: string | null;
  productos_actualizados: number;
  productos_nuevos: number;
  errores: number;
  detalle: Record<string, unknown> | null;
  creado_en: string;
  creado_por: string;
}
export namespace ISincronizacionPrecios {
  export interface IIniciar {
    forzar?: boolean;
  }
}
