import asyncio
import logging
import sys
from os import getenv

from aiogram import Bot, Dispatcher, Router, types
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart
from aiogram.types import Message

TOKEN = '6618478172:AAGWplMN-0hvPft560M36_e-krr6X7Yclso'

dp = Dispatcher()

def webAppKeyboard():
   webAppTest = types.WebAppInfo(url="https://averpower.github.io/amazday_bot.gitub.io/")
   one_butt = types.KeyboardButton(text="Текущий месяц", web_app=webAppTest)
   kb = [[one_butt, ]]
   keyboard = types.ReplyKeyboardMarkup(keyboard=kb)
   return keyboard


@dp.message(CommandStart())
async def command_start_handler(message: Message) -> None:
   await message.answer('Привет, я бот для ведения календаря.', reply_markup=webAppKeyboard())


@dp.message()
async def echo_handler(message: types.Message) -> None:
    try:
        await message.send_copy(chat_id=message.chat.id)
    except TypeError:
        await message.answer("Nice try!")


async def main() -> None:
   bot = Bot(TOKEN, parse_mode=ParseMode.HTML)
   await dp.start_polling(bot)


if __name__ == "__main__":
   asyncio.run(main())