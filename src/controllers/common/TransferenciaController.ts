import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ITransferenciaAlmacen } from "@ORGANIZATION/PROJECT-api/lib/structures/common/ITransferenciaAlmacen";

@Controller("transferencias")
export class TransferenciaController {
  @core.TypedRoute.Get()
  public async listar(): Promise<ITransferenciaAlmacen[]> {
    return null!;
  }

  @core.TypedRoute.Get(":id")
  public async obtener(
    @core.TypedParam("id") _id: string,
  ): Promise<ITransferenciaAlmacen> {
    return null!;
  }

  @core.TypedRoute.Post()
  public async crear(
    @core.TypedBody() _body: ITransferenciaAlmacen.ICrear,
  ): Promise<ITransferenciaAlmacen> {
    return null!;
  }

  @core.TypedRoute.Put(":id")
  public async actualizar(
    @core.TypedParam("id") _id: string,
    @core.TypedBody() _body: ITransferenciaAlmacen.IActualizar,
  ): Promise<ITransferenciaAlmacen> {
    return null!;
  }
}
