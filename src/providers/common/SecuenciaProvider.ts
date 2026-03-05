import { MyGlobal } from "../../MyGlobal";

export type TipoDocumento = "VENTA" | "ORDEN_COMPRA" | "TRANSFERENCIA" | "AJUSTE_INVENTARIO";

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

    // Atomic increment via raw UPDATE … RETURNING to avoid race conditions
    // between concurrent processes (e.g. multiple Electron windows).
    const resultado = await MyGlobal.prisma.$queryRaw<{ ultimo_numero: number }[]>`
      UPDATE secuencias_documentos
      SET ultimo_numero = ultimo_numero + 1
      WHERE almacen_id = ${almacenId}::uuid AND tipo = ${tipo}::"tipo_documento_secuencia"
      RETURNING ultimo_numero
    `;

    const numero = Number(resultado[0].ultimo_numero);
    const prefijo = PREFIJOS[tipo];
    const secuencial = String(numero).padStart(6, "0");
    return `${prefijo}-${almacenCodigo}-${secuencial}`;
  };
}
