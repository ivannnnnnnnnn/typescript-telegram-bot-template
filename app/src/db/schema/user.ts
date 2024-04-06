/** @format */

import {
  pgTable,
  serial,
  integer,
  boolean,
  varchar,
} from 'drizzle-orm/pg-core';

export const userTable = pgTable('user', {
  id: serial('id').primaryKey(),
  telegram_id: integer('telegram_id').unique().notNull(),
  is_bot: boolean('is_bot').default(false),
  is_premium: boolean('is_premium').default(false),
  added_to_attachment_menu: boolean('added_to_attachment_menu').default(false),
  first_name: varchar('first_name', { length: 256 }),
  last_name: varchar('last_name', { length: 256 }),
  username: varchar('username', { length: 256 }),
  language_code: varchar('language_code', { length: 2 }),
});
