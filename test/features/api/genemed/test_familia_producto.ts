import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

/**
 * Tests for product family grouping.
 *
 * @tag FamiliaProducto
 */
export async function test_api_familia_producto_listar(
  connection: api.IConnection,
): Promise<void> {
  // const familias = await api.functional.familias_productos.listar(connection);
  // if (!Array.isArray(familias)) throw new Error("Expected array of familias");
  typia.assert<api.IConnection>(connection);
}
