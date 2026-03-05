import { Module } from "@nestjs/common";

import { GenmedModule } from "./controllers/common/GenmedModule";
import { MonitorModule } from "./controllers/monitors/MonitorModule";

@Module({
  imports: [MonitorModule, GenmedModule],
})
export class MyModule {}
