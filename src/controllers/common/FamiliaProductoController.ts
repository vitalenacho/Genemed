import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IFamiliaProducto } from "@ORGANIZATION/PROJECT-api/lib/structures/common/IFamiliaProducto";

@Controller("familias-productos")
export class FamiliaProductoController {
  @core.TypedRoute.Get()
  public async listar(): Promise<IFamiliaProducto[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(@core.TypedParam("id") _id: string): Promise<IFamiliaProducto> {
    return null!;
  }

  @core.TypedRoute.Post()
  public async crear(@core.TypedBody() _body: IFamiliaProducto.ICrear): Promise<IFamiliaProducto> {
    return null!;
  }

  @core.TypedRoute.Put(":id")
  public async actualizar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IFamiliaProducto.IActualizar,
  ): Promise<IFamiliaProducto> {
    return null!;
  }

  @core.TypedRoute.Delete(":id")
  public async eliminar(@core.TypedParam("id") _id: string): Promise<void> {
    return null!;
  }
}
