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
    const resultado = await MyGlobal.prisma.$queryRaw<{ ultimo_numero: number }[]>`
      UPDATE secuencias_documentos
      SET ultimo_numero = ultimo_numero + 1
      WHERE almacen_id = ${almacenId}::uuid AND tipo = ${tipo}::"tipo_documento_secuencia"
      RETURNING ultimo_numero
    `;

    let numero: number;
    if (resultado.length === 0) {
      // Create initial record
      const creado = await MyGlobal.prisma.secuencia_documento.create({
        data: {
          almacen_id: almacenId,
          tipo: tipo as any,
          ultimo_numero: 1,
        },
      });
      numero = creado.ultimo_numero;
    } else {
      numero = Number(resultado[0].ultimo_numero);
    }

    const prefijo = PREFIJOS[tipo];
    const secuencial = String(numero).padStart(6, "0");
    return `${prefijo}-${almacenCodigo}-${secuencial}`;
  };
}
