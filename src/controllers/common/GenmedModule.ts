import { Module } from "@nestjs/common";

import { AjusteInventarioController } from "./AjusteInventarioController";
import { AlmacenController } from "./AlmacenController";
import { FamiliaProductoController } from "./FamiliaProductoController";
import { HabilitacionController } from "./HabilitacionController";
import { OrdenCompraController } from "./OrdenCompraController";
import { ProductoController } from "./ProductoController";
import { ProveedorController } from "./ProveedorController";
import { SistemaController } from "./SistemaController";
import { StockController } from "./StockController";
import { TransferenciaController } from "./TransferenciaController";
import { VentaController } from "./VentaController";

@Module({
  controllers: [
    AlmacenController,
    AjusteInventarioController,
    FamiliaProductoController,
    HabilitacionController,
    OrdenCompraController,
    ProductoController,
    ProveedorController,
    SistemaController,
    StockController,
    TransferenciaController,
    VentaController,
  ],
})
export class GenmedModule {}
