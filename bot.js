const Discord = require('discord.js');
const client = new Discord.Client();

const devs = ['446999223183998987' , '446999223183998987' , '446999223183998987' , '446999223183998987'];
          const adminprefix = ".";
          client.on('message', message => {
              var argresult = message.content.split().slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;

            if (message.content.startsWith(adminprefix + 'ply')) {
              client.user.setGame(argresult);
                message.channel.send(white_check_mark   ${argresult})
            } else
            if (message.content.startsWith(adminprefix + 'wt')) {
            client.user.setActivity(argresult, {type:'WATCHING'});
                message.channel.send(white_check_mark   ${argresult})
            } else
            if (message.content.startsWith(adminprefix + 'ls')) {
            client.user.setActivity(argresult , {type:'LISTENING'});
                message.channel.send(white_check_mark   ${argresult})
            } else
            if (message.content.startsWith(adminprefix + 'st')) {
              client.user.setGame(argresult, "https://www.twitch.tv/abdoufersaoui_dz");
                message.channel.send(white_check_mark   ${argresult})
            }
            });
           

client.login(process.env.BOT_TOKEN);
