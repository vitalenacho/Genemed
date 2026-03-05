import { IOrdenCompra } from "@CallOROut/Genemed-api/lib/structures/common/IOrdenCompra";
import core from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("ordenes-compra")
export class OrdenCompraController {
  @core.TypedRoute.Get()
  public async listar(): Promise<IOrdenCompra[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(
    @core.TypedParam("id") _id: string,
  ): Promise<IOrdenCompra> {
    return null!;
  }

  @core.TypedRoute.Post()
  public async crear(
    @core.TypedBody() _body: IOrdenCompra.ICrear,
  ): Promise<IOrdenCompra> {
    return null!;
  }

  @core.TypedRoute.Put(":id")
  public async actualizar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IOrdenCompra.IActualizar,
  ): Promise<IOrdenCompra> {
    return null!;
  }

  @core.TypedRoute.Delete(":id")
  public async eliminar(@core.TypedParam("id") _id: string): Promise<void> {
    return null!;
  }
}
