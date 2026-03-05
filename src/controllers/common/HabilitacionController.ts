import { IHabilitacionAlmacen } from "@CallOROut/Genemed-api/lib/structures/common/IHabilitacionAlmacen";
import core from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("habilitaciones")
export class HabilitacionController {
  @core.TypedRoute.Get("almacen/:almacenId")
  public async listarPorAlmacen(
    @core.TypedParam("almacenId") _almacenId: string,
  ): Promise<IHabilitacionAlmacen[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(
    @core.TypedParam("id") _id: string,
  ): Promise<IHabilitacionAlmacen> {
    return null!;
  }

  @core.TypedRoute.Post()
  public async crear(
    @core.TypedBody() _body: IHabilitacionAlmacen.ICrear,
  ): Promise<IHabilitacionAlmacen> {
    return null!;
  }

  @core.TypedRoute.Put(":id")
  public async actualizar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IHabilitacionAlmacen.IActualizar,
  ): Promise<IHabilitacionAlmacen> {
    return null!;
  }

  @core.TypedRoute.Delete(":id")
  public async eliminar(@core.TypedParam("id") _id: string): Promise<void> {
    return null!;
  }
}
