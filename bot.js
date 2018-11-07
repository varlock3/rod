const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
   
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: 'don’t stick those who doesn’t know your value .,
    application_id: '488568669111189514',
     assets: {
         large_image:   `509847999518605312`,
  
    }
  }
    });
  
});
client.login(process.env.BOT_TOKEN);
