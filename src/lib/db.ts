import type { PrismaClient } from "@prisma/client";

export type DB = PrismaClient;

let db: DB | undefined;

export function getDb(client?: DB): DB {
  if (client) return client;
  if (!db) {
    const { PrismaClient } = eval("require")("@prisma/client");
    db = new PrismaClient();
  }
  return db as DB;
}
