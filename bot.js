const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
  else if(message.mentions.users.get(client.user.id)){
    message.reply('hehe');
  }
  else if(!message.author.bot){
    message.reply('Hi');
  }
  else {
    if(!message.author.bot)
      message.reply('Je n\'ai pas compris votre requête');
  }
  
  console.log(message);
});

client.on('presenceUpdate', function(oldMember, newMember) {
  console.log(oldMember.user.username, '=>', newMember.presence);
  
  if(newMember.presence.status == 'online' && newMember.user.username == "bramas"){
    newMember.user.sendMessage("Bonjour maitre, je suis le bot de BETOMBO et KIRATI, que puis-je faire pour vous aujourd'hui?");
  }
});

client.login(process.env.DISCORD_TOKEN);
