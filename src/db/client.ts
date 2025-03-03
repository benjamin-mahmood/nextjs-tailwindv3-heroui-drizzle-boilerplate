import * as schema from '@/db/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connection = postgres(process.env.DATABASE_URL!, {
  ssl: 'prefer',
  max: undefined,
});

export const db = drizzle(connection, {
  schema,
  logger: true,
  casing: 'snake_case',
});

export type db = typeof db;

export default db;
