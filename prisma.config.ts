import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { defineConfig, env } from "prisma/config";

dotenvExpand.expand(dotenv.config());

// the project now targets MySQL exclusively
const schemaFile = "prisma/schema/schema.mysql.prisma";
const datasourceUrl = env("MYSQL_URL");

export default defineConfig({
  schema: schemaFile,
  datasource: {
    url: datasourceUrl,
  },
});
