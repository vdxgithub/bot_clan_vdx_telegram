const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const app = express();

// Cargar las variables de entorno desde Replit
const token = process.env["TELEGRAM_TOKEN"];

if (!token) {
    throw new Error(
        "El token de Telegram no está proporcionado. Asegúrate de que la variable de entorno TELEGRAM_TOKEN está configurada.",
    );
}

// Crear una instancia del bot
const bot = new TelegramBot(token, { polling: true });

// Responder al comando /help
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Necesitas Ayuda 1. /helpsi 2./helpno");
});

// Responder al comando /helpsi
bot.onText(/\/helpsi/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Vale entra al telegram de vDx (prox)");
});

// Responder al comando /helpno
bot.onText(/\/helpno/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Ok");
});

// Responder al comando /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "¡Hola! Soy el bot del clan vDx");
    bot.sendMessage(chatId, "Todos mis Comandos Estan En El Boton De Web");
});

// Responder al comando /start
bot.onText(/\/web/, (msg) => {
    const chatId = msg.chat.id;
bot.sendMessage(chatId, "La web de los bots de vDx es");    
bot.sendMessage(chatId, "bots-vdx.vercel.app");    
});

// Configurar un servidor básico para mantener vivo el bot
app.get("/", (req, res) => {
    res.send("El bot está funcionando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
const mySecret = process.env["TELEGRAM_TOKEN"];
