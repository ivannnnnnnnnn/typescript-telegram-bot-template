/** @format */

import { db } from '@db/index';
import { BotContext } from '@bot/types';

interface AppContext {
  tgCtx?: Exclude<BotContext, 'db'>;
}

export abstract class AbstractService<Ctx extends AppContext = AppContext> {
  protected readonly db = db;

  constructor(protected readonly context: Ctx) {}
}
