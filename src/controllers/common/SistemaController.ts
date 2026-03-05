import { IBackup } from "@CallOROut/Genemed-api/lib/structures/common/IBackup";
import { ILogAuditoria } from "@CallOROut/Genemed-api/lib/structures/common/ILogAuditoria";
import { ISincronizacionPrecios } from "@CallOROut/Genemed-api/lib/structures/common/ISincronizacionPrecios";
import core from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("sistema")
export class SistemaController {
  @core.TypedRoute.Post("backup")
  public async generarBackup(): Promise<IBackup> {
    return null!;
  }

  @core.TypedRoute.Get("backups")
  public async listarBackups(): Promise<IBackup[]> {
    return null!;
  }

  @core.TypedRoute.Post("restore/:nombre")
  public async restaurar(
    @core.TypedParam("nombre") _nombre: string,
    @core.TypedBody() _body: IBackup.IRestaurar,
  ): Promise<void> {
    return null!;
  }

  @core.TypedRoute.Get("logs")
  public async listarLogs(): Promise<ILogAuditoria[]> {
    return null!;
  }

  @core.TypedRoute.Post("sincronizar-precios")
  public async sincronizarPrecios(
    @core.TypedBody() _body: ISincronizacionPrecios.IIniciar,
  ): Promise<ISincronizacionPrecios> {
    return null!;
  }
}
