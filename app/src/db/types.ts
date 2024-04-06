/** @format */

import { userTable } from './schema';

export type DbUser = typeof userTable.$inferSelect;
export type NewDbUser = typeof userTable.$inferInsert;
