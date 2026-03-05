import { IPrecioProducto } from "@CallOROut/Genemed-api/lib/structures/common/IPrecioProducto";

import { MyGlobal } from "../../MyGlobal";
import { LoggerProvider } from "./LoggerProvider";

// IVA rules:
// VENTA_LIBRE → 10.5% (1050 bps)
// RECETA, RECETA_ARCHIVADA, RECETA_DUPLICADA, HOSPITALARIO → 0%
const IVA_POR_TIPO_VENTA: Record<string, number> = {
  VENTA_LIBRE: 1050,
  RECETA: 0,
  RECETA_ARCHIVADA: 0,
  RECETA_DUPLICADA: 0,
  HOSPITALARIO: 0,
};

export namespace PrecioProductoProvider {
  export const calcularIva = (tipoVenta: string): number => {
    const alicuota = IVA_POR_TIPO_VENTA[tipoVenta];
    if (alicuota === undefined) {
      LoggerProvider.warn(
        `tipo_venta desconocido: "${tipoVenta}". Se aplica IVA 0%.`,
        "PrecioProductoProvider",
        { tipoVenta },
      );
      return 0;
    }
    return alicuota;
  };

  export const calcularNeto = (
    precioFinal: number,
    alicuotaBps: number,
  ): number => {
    if (alicuotaBps === 0) return precioFinal;
    return Math.round((precioFinal * 10000) / (10000 + alicuotaBps));
  };

  export const calcularFinal = (
    precioNeto: number,
    alicuotaBps: number,
  ): number => {
    return precioNeto + Math.round((precioNeto * alicuotaBps) / 10000);
  };

  export const crear = async (
    input: IPrecioProducto.ICrear,
    creado_por: string,
  ): Promise<IPrecioProducto> => {
    const producto = await MyGlobal.prisma.producto.findUniqueOrThrow({
      where: { id: input.producto_id },
    });
    const alicuota = calcularIva(producto.tipo_venta);
    const precioFinal = BigInt(input.precio_final);
    const precioNeto =
      alicuota === 0
        ? precioFinal
        : BigInt(calcularNeto(input.precio_final, alicuota));

    const precio = await MyGlobal.prisma.precio_producto.create({
      data: {
        producto_id: input.producto_id,
        alicuota_iva_bps: alicuota,
        precio_neto: precioNeto,
        precio_final: precioFinal,
        vigente_desde: new Date(input.vigente_desde),
        vigente_hasta: input.vigente_hasta
          ? new Date(input.vigente_hasta)
          : null,
        fuente: input.fuente ?? null,
        creado_por,
        actualizado_por: creado_por,
      },
    });

    return {
      id: precio.id,
      producto_id: precio.producto_id,
      alicuota_iva_bps: precio.alicuota_iva_bps,
      precio_neto: Number(precio.precio_neto),
      precio_final: Number(precio.precio_final),
      vigente_desde: precio.vigente_desde.toISOString(),
      vigente_hasta: precio.vigente_hasta?.toISOString() ?? null,
      fuente: precio.fuente ?? null,
      creado_en: precio.creado_en.toISOString(),
      actualizado_en: precio.actualizado_en.toISOString(),
    };
  };
}
