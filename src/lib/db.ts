import type { PrismaClient } from "@prisma/client";

export type DB = PrismaClient;

let db: DB | undefined;

export function getDb(client?: DB): DB {
  if (client) return client;
  if (!db) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PrismaClient } = require("@prisma/client");
    db = new PrismaClient();
  }
  return db as DB;
}
