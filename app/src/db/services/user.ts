/** @format */

import { AbstractService } from '@db/services/abstract';
import { userTable } from '@db/schema';
import { eq } from 'drizzle-orm';
import { User } from 'telegraf/types';
import { DbUser } from '@db/types';

export class UserService extends AbstractService {
  getUserByTgId = async (tgId: number): Promise<DbUser | undefined> => {
    return this.db.query.userTable.findFirst({
      where: eq(userTable.telegram_id, tgId),
    });
  };
  userExists = async (tgId: number): Promise<boolean> => {
    return !!(await this.getUserByTgId(tgId));
  };

  haveDifference = (dbUser: DbUser, tgUser: User): boolean => {
    const _compare = <T, T1>(obj1: T, obj2: T1, key: string) => {
      // @ts-ignore
      return obj1[key] && obj2[key] && obj1[key] === obj2[key];
    };
    return Object.keys(tgUser)
      .map(key => _compare({ ...dbUser, id: dbUser.telegram_id }, tgUser, key))
      .every(Boolean);
  };

  getOrCreate = async (tgUser: User): Promise<DbUser> => {
    let dbUser = await this.getUserByTgId(tgUser.id);
    if (!dbUser) {
      let [newUser] = await this.db
        .insert(userTable)
        .values({
          ...tgUser,
          telegram_id: tgUser.id,
        })
        .returning();
      return newUser;
    }
    if (!this.haveDifference(dbUser, tgUser)) {
      return dbUser;
    }
    const [updatedUser] = await this.db
      .update(userTable)
      .set({
        ...tgUser,
        telegram_id: tgUser.id,
      })
      .where(eq(userTable.telegram_id, tgUser.id))
      .returning();
    return updatedUser;
  };
}
