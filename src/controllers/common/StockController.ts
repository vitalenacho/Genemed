import { IStockAlmacen } from "@CallOROut/Genemed-api/lib/structures/common/IStockAlmacen";
import core from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("stocks")
export class StockController {
  @core.TypedRoute.Get("almacen/:almacenId")
  public async listarPorAlmacen(
    @core.TypedParam("almacenId") _almacenId: string,
  ): Promise<IStockAlmacen[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(
    @core.TypedParam("id") _id: string,
  ): Promise<IStockAlmacen> {
    return null!;
  }

  @core.TypedRoute.Put(":id")
  public async actualizar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IStockAlmacen.IActualizar,
  ): Promise<IStockAlmacen> {
    return null!;
  }
}
