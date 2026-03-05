import { PrismaClient } from "@prisma/sdk";

import { MyGlobal } from "../MyGlobal";
import { MySetupWizard } from "../setup/MySetupWizard";

async function execute(
  database: string,
  username: string,
  password: string,
  script: string,
): Promise<void> {
  try {
    const env = MyGlobal.env;
    const connectionString = `mysql://${username}:${password}@${env.MYSQL_HOST}:${env.MYSQL_PORT}/${database}`;
    const prisma = new PrismaClient({
      // `accelerateUrl` satisfies Prisma's engine validation when running
      // with engine type "client". It is harmless in this context.
      accelerateUrl: connectionString,
      __internal: {
        configOverride: (c: any) => {
          const ds = c.datasources ?? {};
          return {
            ...c,
            datasources: {
              ...ds,
              db: { ...(ds.db ?? {}), url: connectionString },
            },
          };
        },
      },
    } as any);

    const queries: string[] = script
      .split("\n")
      .map((str) => str.trim())
      .filter((str) => !!str);
    for (const query of queries) {
      try {
        await prisma.$queryRawUnsafe(query);
      } catch {
        await prisma.$disconnect();
      }
    }
    await prisma.$disconnect();
  } catch (err) {
    console.error(err);
  }
}

async function main(): Promise<void> {
  const env = MyGlobal.env;
  const config = {
    database: env.MYSQL_DATABASE!,
    username: env.MYSQL_USERNAME!,
    readonlyUsername: env.MYSQL_USERNAME_READONLY!,
    password: env.MYSQL_PASSWORD!,
  };
  const root = {
    account: process.argv[2] ?? "root",
    password: process.argv[3] ?? "ipsx4w",
  };

  await execute(
    "mysql",
    root.account,
    root.password,
    `
        CREATE DATABASE IF NOT EXISTS \`${config.database}\`;
        CREATE USER IF NOT EXISTS '${config.username}'@'%' IDENTIFIED BY '${config.password}';
        GRANT ALL PRIVILEGES ON \`${config.database}\`.* TO '${config.username}'@'%';

        CREATE USER IF NOT EXISTS '${config.readonlyUsername}'@'%' IDENTIFIED BY '${config.password}';
        GRANT SELECT ON \`${config.database}\`.* TO '${config.readonlyUsername}'@'%';
      `,
  );

  MyGlobal.testing = true;
  await MySetupWizard.schema();
}

main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
