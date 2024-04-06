/** @format */

import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as _userSchema from './schema/user';

const client = new Pool({
  connectionString: process.env.DB_URI,
});
export const schema = {
  ..._userSchema,
};

export const db = drizzle(client, { schema });
