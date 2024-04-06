/** @format */

import { Context } from 'telegraf';
import { UserService } from '@db/services/user';

interface DbServices {
  userService: UserService;
}

export interface BotContext extends Context {
  db: DbServices;
}
