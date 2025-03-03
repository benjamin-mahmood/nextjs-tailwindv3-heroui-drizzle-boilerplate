import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const tasksTable = pgTable('tasks', {
  id: uuid().primaryKey().defaultRandom(),
  task: varchar({ length: 128 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});

export default tasksTable;
