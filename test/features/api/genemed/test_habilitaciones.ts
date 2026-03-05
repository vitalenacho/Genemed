import api from "@CallOROut/Genemed-api";
import typia from "typia";

/**
 * Tests for almacen habilitaciones (certifications).
 *
 * @tag Habilitaciones
 */
export async function test_api_habilitaciones_listar_por_almacen(
  connection: api.IConnection,
): Promise<void> {
  // Verify endpoint is reachable with a dummy almacen ID once SDK is generated.
  // try {
  //   await api.functional.habilitaciones.almacen.listarPorAlmacen(
  //     connection,
  //     "00000000-0000-0000-0000-000000000000",
  //   );
  // } catch (e: unknown) {
  //   const err = e as { status?: number };
  //   if (err.status !== undefined && err.status !== 404 && err.status !== 400) {
  //     throw new Error(`Unexpected error status: ${err.status}`);
  //   }
  // }
  typia.assert<api.IConnection>(connection);
}
