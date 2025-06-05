import { Telegraf } from 'telegraf';
import express from 'express';
import prisma from '../lib/prisma';
import 'dotenv/config';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

bot.start((ctx) => ctx.reply('Welcome to NextChat'));

bot.command('balance', async (ctx) => {
  const user = await prisma.user.findFirst({ where: { telegramId: BigInt(ctx.from.id) } });
  ctx.reply(`Balance: ${user?.balance ?? 0}`);
});

const app = express();
app.use(express.json());
app.post('/notify', (req, res) => {
  const { chatId, message } = req.body;
  bot.telegram.sendMessage(chatId, message.slice(0, 4096));
  res.json({ ok: true });
});

bot.launch();
app.listen(3001);
