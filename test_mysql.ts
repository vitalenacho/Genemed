import { PrismaClient } from "./src/prisma/client";

async function test() {
  // rely on DATABASE_URL env variable
  // ts-ignore: using empty options object
  const client = new PrismaClient({} as any);
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
