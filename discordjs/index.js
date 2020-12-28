const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('Connecté');
});

bot.on('message', function (msg) {
  if (msg.content === 'Ping') {
    msg.channel.send('Pong');
  }
  if (msg.content === 'Yin') {
    msg.reply('Yang');
  }
});

bot.login('TOKEN');
