import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IVenta } from "@ORGANIZATION/PROJECT-api/lib/structures/common/IVenta";

@Controller("ventas")
export class VentaController {
  @core.TypedRoute.Get()
  public async listar(): Promise<IVenta[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(@core.TypedParam("id") _id: string): Promise<IVenta> {
    return null!;
  }

  @core.TypedRoute.Post()
  public async crear(@core.TypedBody() _body: IVenta.ICrear): Promise<IVenta> {
    return null!;
  }

  @core.TypedRoute.Put(":id/anular")
  public async anular(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IVenta.IAnular,
  ): Promise<IVenta> {
    return null!;
  }
}
