import { ILogAuditoria } from "@CallOROut/Genemed-api/lib/structures/common/ILogAuditoria";
import { Prisma } from "@prisma/sdk";

import { MyGlobal } from "../../MyGlobal";

export namespace LogAuditoriaProvider {
  export const registrar = async (
    input: ILogAuditoria.ICrear,
  ): Promise<void> => {
    await MyGlobal.prisma.log_auditoria.create({
      data: {
        usuario_id: input.usuario_id ?? null,
        accion: input.accion,
        entidad: input.entidad,
        entidad_id: input.entidad_id ?? null,
        detalle: (input.detalle ?? Prisma.JsonNull) as Prisma.InputJsonValue,
        ip: input.ip ?? null,
      },
    });
  };
}
