/** @format */

import { Middleware } from 'telegraf';
import { UserService } from '@db/services/user';
import { BotContext } from '@bot/types';

export const dbServicesMiddleware: Middleware<BotContext> = async (
  ctx,
  next
) => {
  ctx.db = {
    userService: new UserService({ tgCtx: ctx }),
  };
  return next();
};
