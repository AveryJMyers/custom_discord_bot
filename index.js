const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});;

const token = process.env.DISCORD_BOT_TOKEN;

require('dotenv').config();
const blackjackCommand = require('./commands/blackjack.js');

client.on('messageCreate', message => {
    if (message.content.startsWith('!blackjack')) {
        blackjackCommand.execute(message);
    }
});

client.login(token);