export interface IStockAlmacen {
  id: string;
  almacen_id: string;
  producto_id: string;
  cantidad: number;
  stock_minimo: number;
  creado_en: string;
  actualizado_en: string;
}
export namespace IStockAlmacen {
  export interface IActualizar {
    stock_minimo?: number;
  }
}
