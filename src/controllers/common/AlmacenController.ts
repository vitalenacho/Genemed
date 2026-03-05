import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IAlmacen } from "@ORGANIZATION/PROJECT-api/lib/structures/common/IAlmacen";

@Controller("almacenes")
export class AlmacenController {
  @core.TypedRoute.Get()
  public async listar(): Promise<IAlmacen[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(@core.TypedParam("id") _id: string): Promise<IAlmacen> {
    return null!;
  }

  @core.TypedRoute.Post()
  public async crear(@core.TypedBody() _body: IAlmacen.ICrear): Promise<IAlmacen> {
    return null!;
  }

  @core.TypedRoute.Put(":id")
  public async actualizar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IAlmacen.IActualizar,
  ): Promise<IAlmacen> {
    return null!;
  }

  @core.TypedRoute.Delete(":id")
  public async eliminar(@core.TypedParam("id") _id: string): Promise<void> {
    return null!;
  }
}
