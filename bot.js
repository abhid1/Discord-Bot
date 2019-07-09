var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var commands = ["hello", "buckets", "kawhinot", "rng"];

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case commands[0]:
                botMessage("hola", channelID);
                setTimeout(() => {
                    botMessage("bonjour", channelID);
                }, 500);
                setTimeout(() => {
                    botMessage("ni hao", channelID);
                }, 500);
            break;
            case commands[1]:
                botMessage("Board man gets paid.", channelID);
            break;
            case commands[2]:
                botMessage("https://youtu.be/5oHrcAdThNk?t=275", channelID);
            break;
            case "commands":
                var command;
                command = "List of commands:\n";
                for (var i = 0; i < commands.length; i++) {
                    command += "!" + commands[i] + "\n";
                }
                botMessage(command, channelID);
            case commands[3]:
                var randomNum = Math.floor(Math.random() * 100);
                botMessage("RANDOM NUMBER: " + randomNum, channelID);
         }
     }
});

function botMessage(messageFromBot, channelID)
{
    bot.sendMessage({
        to: channelID,
        message: messageFromBot
    });
}


