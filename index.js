const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_TOKEN;

require('dotenv').config();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);