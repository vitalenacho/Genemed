import cp from "child_process";

import { MyGlobal } from "../MyGlobal";

export namespace MySetupWizard {
  export async function schema(): Promise<void> {
    if (MyGlobal.testing === false)
      throw new Error(
        "Erron on SetupWizard.schema(): unable to reset database in non-test mode.",
      );

    // build an explicit connection string that includes the database name
    const env = MyGlobal.env;
    const schemaFile = "prisma/schema/schema.mysql.prisma";

    const databaseUrl = `mysql://${env.MYSQL_USERNAME}:${env.MYSQL_PASSWORD}@${env.MYSQL_HOST}:${env.MYSQL_PORT}/${env.MYSQL_DATABASE}`;

    const execute = (type: string) => (argv: string) =>
      cp.execSync(`npx prisma migrate ${type} --schema=${schemaFile} ${argv}`, {
        stdio: "inherit",
        env: {
          ...process.env,
          DATABASE_URL: databaseUrl,
          MYSQL_URL: databaseUrl,
        },
      });

    execute("reset")("--force");
    execute("dev")("--name init");

    // MySQL read‑only privileges are handled by the bootstrap script above
  }

  export async function seed(): Promise<void> {}
}
