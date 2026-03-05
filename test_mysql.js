// load the generated client directly (MySQL schema)
const { PrismaClient } = require("./src/prisma");

async function test() {
  // override the URL using __internal.configOverride; this mirrors the
  // runtime behaviour in the application code and avoids constructor errors.
  const client = new PrismaClient({
    __internal: {
      configOverride: (c) => ({
        ...c,
        datasources: {
          ...c.datasources,
          db: {
            ...c.datasources.db,
            url: "mysql://root:ipsx4w@localhost:3306/",
          },
        },
      }),
    },
  });
  try {
    await client.$connect();
    console.log("connected successfully");
  } catch (e) {
    console.error("connection failed", e);
  } finally {
    await client.$disconnect();
  }
}

test();
