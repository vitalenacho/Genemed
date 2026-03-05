export interface IFamiliaProducto {
  id: string;
  nombre_generico: string;
  accion_terapeutica: string | null;
  via_administracion: string | null;
  proveedor_id: string;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
}
export namespace IFamiliaProducto {
  export interface ICrear {
    nombre_generico: string;
    accion_terapeutica?: string;
    via_administracion?: string;
    proveedor_id: string;
  }
  export interface IActualizar {
    nombre_generico?: string;
    accion_terapeutica?: string;
    via_administracion?: string;
    activo?: boolean;
  }
}
