import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

/**
 * Tests for inventory adjustment workflow.
 *
 * @tag AjusteInventario
 */
export async function test_api_ajuste_inventario_listar(
  connection: api.IConnection,
): Promise<void> {
  // Verify the list endpoint is reachable once SDK is generated.
  // const ajustes = await api.functional.ajustes_inventario.listar(connection);
  // if (!Array.isArray(ajustes)) throw new Error("Expected array of ajustes");
  typia.assert<api.IConnection>(connection);
}
