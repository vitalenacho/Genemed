import { IPrecioProducto } from "@CallOROut/Genemed-api/lib/structures/common/IPrecioProducto";
import { IProducto } from "@CallOROut/Genemed-api/lib/structures/common/IProducto";
import core from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("productos")
export class ProductoController {
  @core.TypedRoute.Get()
  public async listar(): Promise<IProducto[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(@core.TypedParam("id") _id: string): Promise<IProducto> {
    return null!;
  }

  @core.TypedRoute.Post()
  public async crear(
    @core.TypedBody() _body: IProducto.ICrear,
  ): Promise<IProducto> {
    return null!;
  }

  @core.TypedRoute.Put(":id")
  public async actualizar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IProducto.IActualizar,
  ): Promise<IProducto> {
    return null!;
  }

  @core.TypedRoute.Delete(":id")
  public async eliminar(@core.TypedParam("id") _id: string): Promise<void> {
    return null!;
  }

  @core.TypedRoute.Get(":id/precios")
  public async listarPrecios(
    @core.TypedParam("id") _id: string,
  ): Promise<IPrecioProducto[]> {
    return null!;
  }

  @core.TypedRoute.Post(":id/precios")
  public async crearPrecio(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IPrecioProducto.ICrear,
  ): Promise<IPrecioProducto> {
    return null!;
  }
}
