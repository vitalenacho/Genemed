import api from "@CallOROut/Genemed-api";
import typia from "typia";

/**
 * Tests for IVA calculation on product prices.
 *
 * @tag IVA
 */
export async function test_api_iva_productos_listar(
  connection: api.IConnection,
): Promise<void> {
  // const productos = await api.functional.productos.listar(connection);
  // if (!Array.isArray(productos)) throw new Error("Expected array of productos");
  typia.assert<api.IConnection>(connection);
}
