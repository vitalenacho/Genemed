export interface IHabilitacionAlmacen {
  id: string;
  almacen_id: string;
  tipo: IHabilitacionAlmacen.Tipo;
  numero_habilitacion: string;
  organismo_emisor: string;
  fecha_emision: string;
  fecha_vencimiento: string;
  archivo_url: string | null;
  notas: string | null;
  creado_en: string;
  actualizado_en: string;
}
export namespace IHabilitacionAlmacen {
  export type Tipo = "ANMAT" | "MINISTERIO_PROVINCIAL" | "MUNICIPAL" | "OTRA";
  export interface ICrear {
    almacen_id: string;
    tipo: Tipo;
    numero_habilitacion: string;
    organismo_emisor: string;
    fecha_emision: string;
    fecha_vencimiento: string;
    archivo_url?: string;
    notas?: string;
  }
  export interface IActualizar {
    numero_habilitacion?: string;
    organismo_emisor?: string;
    fecha_emision?: string;
    fecha_vencimiento?: string;
    archivo_url?: string;
    notas?: string;
  }
}
