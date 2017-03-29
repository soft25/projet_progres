const Discord = require('discord.js');
const client = new Discord.Client();
const axios =  require('axios');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if(!message.author.bot){
    if (message.content === 'ping') {
      message.reply('pong');
    }
    else if(message.mentions.users.get(client.user.id)){
      message.reply('hehe');
    }
    else if(message.content === '!blague'){
      axios.get("http://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb:1")
	    .then(function (response) {
			  console.log(response.data);
	    	message.reply(response.data.fact);
  		});
    }
    else if(message.channel.type == 'dm'){
      message.reply('Hi');
    }
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

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(process.env.PORT || 5000);
