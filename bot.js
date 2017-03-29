const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
  else if(message.mentions.users.get(client.user.id) && message.author.bot){
    message.reply('hehe');
  }
  else if(!message.author.bot){
    message.reply('Hi');
  }
  
  console.log(message);
});

client.on('presenceUpdate', function(oldMember, newMember) {
  console.log(oldMember.presence, '=>', newMember.presence);
});

client.login(process.env.DISCORD_TOKEN);
