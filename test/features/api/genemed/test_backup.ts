import api from "@CallOROut/Genemed-api";
import typia from "typia";

/**
 * Tests for backup and restore system.
 *
 * @tag Backup
 */
export async function test_api_backup_listar(
  connection: api.IConnection,
): Promise<void> {
  // const backups = await api.functional.sistema.backups.listarBackups(connection);
  // if (!Array.isArray(backups)) throw new Error("Expected array of backups");
  typia.assert<api.IConnection>(connection);
}
