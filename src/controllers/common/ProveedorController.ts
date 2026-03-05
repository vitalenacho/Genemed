import { IProveedor } from "@CallOROut/Genemed-api/lib/structures/common/IProveedor";
import core from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("proveedores")
export class ProveedorController {
  @core.TypedRoute.Get()
  public async listar(): Promise<IProveedor[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(
    @core.TypedParam("id") _id: string,
  ): Promise<IProveedor> {
    return null!;
  }

  @core.TypedRoute.Post()
  public async crear(
    @core.TypedBody() _body: IProveedor.ICrear,
  ): Promise<IProveedor> {
    return null!;
  }

  @core.TypedRoute.Put(":id")
  public async actualizar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IProveedor.IActualizar,
  ): Promise<IProveedor> {
    return null!;
  }

  @core.TypedRoute.Delete(":id")
  public async eliminar(@core.TypedParam("id") _id: string): Promise<void> {
    return null!;
  }
}
