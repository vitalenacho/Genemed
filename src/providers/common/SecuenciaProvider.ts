import { MyGlobal } from "../../MyGlobal";

export type TipoDocumento =
  | "VENTA"
  | "ORDEN_COMPRA"
  | "TRANSFERENCIA"
  | "AJUSTE_INVENTARIO";

const PREFIJOS: Record<TipoDocumento, string> = {
  VENTA: "VTA",
  ORDEN_COMPRA: "OC",
  TRANSFERENCIA: "TRF",
  AJUSTE_INVENTARIO: "AJU",
};

export namespace SecuenciaProvider {
  export const siguienteNumero = async (
    almacenId: string,
    almacenCodigo: string,
    tipo: TipoDocumento,
  ): Promise<string> => {
    // Ensure the sequence record exists before attempting the atomic UPDATE.
    // Using upsert with a no-op update avoids a race condition on first use.
    await MyGlobal.prisma.secuencia_documento.upsert({
      where: { almacen_id_tipo: { almacen_id: almacenId, tipo: tipo as any } },
      create: { almacen_id: almacenId, tipo: tipo as any, ultimo_numero: 0 },
      update: {},
    });

    // MySQL implementation: increment then select in separate queries to avoid multi-statement config bugs
    let numero: number;
    await MyGlobal.prisma.$executeRaw`
        UPDATE secuencias_documentos
        SET ultimo_numero = ultimo_numero + 1
        WHERE almacen_id = ${almacenId} AND tipo = ${tipo}
      `;
    const resultado = await MyGlobal.prisma.$queryRaw<
      { ultimo_numero: number }[]
    >`
        SELECT ultimo_numero
        FROM secuencias_documentos
        WHERE almacen_id = ${almacenId} AND tipo = ${tipo}
      `;
    numero = Number(resultado[0].ultimo_numero);
    const prefijo = PREFIJOS[tipo];
    const secuencial = String(numero).padStart(6, "0");
    return `${prefijo}-${almacenCodigo}-${secuencial}`;
  };
}
