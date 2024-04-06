/** @format */

import { Telegraf } from 'telegraf';
import { middlewares } from '@bot/middleware';
import { BotContext } from '@bot/types';
import * as process from 'node:process';

// Log environment variables
if (process.env.NODE_ENV === 'dev') {
  console.log('Environment: ', process.env);
}

// Check if bot token exists
if (!process.env.BOT_TOKEN) {
  throw new Error('Set BOT_TOKEN environment variable');
}

// create bot
const bot = new Telegraf<BotContext>(String(process.env.BOT_TOKEN));

// register middlewares
middlewares.map(mw => bot.use(mw));

bot.command('start', async ctx => {
  const user = await ctx.db.userService.getOrCreate(ctx.from);
  return await ctx.reply('Hello world!');
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
