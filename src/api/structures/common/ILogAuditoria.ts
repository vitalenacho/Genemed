export interface ILogAuditoria {
  id: string;
  usuario_id: string | null;
  accion: string;
  entidad: string;
  entidad_id: string | null;
  detalle: Record<string, unknown> | null;
  ip: string | null;
  creado_en: string;
}
export namespace ILogAuditoria {
  export interface ICrear {
    usuario_id?: string;
    accion: string;
    entidad: string;
    entidad_id?: string;
    detalle?: Record<string, unknown>;
    ip?: string;
  }
}
