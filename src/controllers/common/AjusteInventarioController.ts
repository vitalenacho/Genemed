import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IAjusteInventario } from "@ORGANIZATION/PROJECT-api/lib/structures/common/IAjusteInventario";

@Controller("ajustes-inventario")
export class AjusteInventarioController {
  @core.TypedRoute.Get()
  public async listar(): Promise<IAjusteInventario[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(@core.TypedParam("id") _id: string): Promise<IAjusteInventario> {
    return null!;
  }

  @core.TypedRoute.Post()
  public async crear(
    @core.TypedBody() _body: IAjusteInventario.ICrear,
  ): Promise<IAjusteInventario> {
    return null!;
  }

  @core.TypedRoute.Put(":id/items/:itemId")
  public async actualizarItem(
    @core.TypedParam("id") _id: string,
    @core.TypedParam("itemId") _itemId: string,
    @core.TypedBody() _body: IAjusteInventario.IActualizarItem,
  ): Promise<IAjusteInventario> {
    return null!;
  }

  @core.TypedRoute.Put(":id/aprobar")
  public async aprobar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IAjusteInventario.IAprobar,
  ): Promise<IAjusteInventario> {
    return null!;
  }

  @core.TypedRoute.Put(":id/rechazar")
  public async rechazar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: IAjusteInventario.IRechazar,
  ): Promise<IAjusteInventario> {
    return null!;
  }

  @core.TypedRoute.Delete(":id")
  public async cancelar(@core.TypedParam("id") _id: string): Promise<IAjusteInventario> {
    return null!;
  }
}
