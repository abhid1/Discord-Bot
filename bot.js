const Discord = require('discord.js');
var auth = require('./auth.json');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Ready!');
});

let prefix = '!';

var commands = ["ping", "beep", "hello", "buckets", "kawhinot", "rng", "rngscaled"];

client.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

	if (command == commands[0]) {
        message.channel.send('Pong.');
    } 
    else if (command == commands[1]) {
        message.channel.send('Boop.');
    }
    else if (command == commands[2]) {
        message.channel.send('Hola.');
        setTimeout(() => {
            message.channel.send('Bonjour.');
            }, 500);
        setTimeout(() => {
            message.channel.send('Ni Hao.');
            }, 500);
    }
    else if (command == commands[3]) {
        message.channel.send('Board man gets paid.');
    }
    else if (command == commands[4]) {
        message.channel.send('https://youtu.be/5oHrcAdThNk?t=275');
    }
    else if (command == commands[5]) {
        var randomNum = Math.floor(Math.random() * 100);
        message.channel.send("RANDOM NUMBER: " + randomNum);
    }
    else if (command == commands[6])
    {
        let rngStart = parseInt(args[0]);
        let rngEnd = parseInt(args[1]);
        var randomNum = Math.floor(Math.random() * rngEnd) + rngStart;
        message.channel.send('RANDOM NUMBER BETWEEN ' + rngStart + ' and ' + rngEnd + ': ' + randomNum);
    }
    else if (command == "commands") {
        var outputCommands = "List of commands:\n";
        for (var i = 0; i < commands.length; i++) {
            outputCommands += "!" + commands[i] + "\n";
        }
        message.channel.send(outputCommands);
    }
});

client.on('presenceUpdate', (oldMember, newMember) => {
    if (newMember.presence.game != undefined)
    {
        var game = newMember.presence.game;
        
        if (game.name.startsWith("Rainbow Six Siege"))
        {
            message.channel.send('@' + newMember.displayName + ' why are you playing Siege?')
        }
    }
});

client.login(auth.token);
