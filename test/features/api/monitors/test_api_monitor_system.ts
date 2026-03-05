import api from "@CallOROut/Genemed-api";
import { ISystem } from "@CallOROut/Genemed-api/lib/structures/monitors/ISystem";
import { assert } from "typia";

export async function test_api_monitor_system(
  connection: api.IConnection,
): Promise<void> {
  const system: ISystem = await api.functional.monitors.system.get(connection);
  assert<typeof system>(system);
}
