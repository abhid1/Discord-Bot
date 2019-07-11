const Discord = require('discord.js');
var auth = require('./auth.json');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Ready!');
});

let prefix = '!';

var commands = ["ping", "beep", "hello", "buckets", "kawhinot", "rng"];

client.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    } 
    else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    }
    else if (message.content.startsWith(`${prefix}hello`)) {
        message.channel.send('Hola.');
        setTimeout(() => {
            message.channel.send('Bonjour.');
            }, 500);
        setTimeout(() => {
            message.channel.send('Ni Hao.');
            }, 500);
    }
    else if (message.content.startsWith(`${prefix}buckets`)) {
        message.channel.send('Board man gets paid.');
    }
    else if (message.content.startsWith(`${prefix}kawhinot`)) {
        message.channel.send('https://youtu.be/5oHrcAdThNk?t=275');
    }
    else if (message.content.startsWith(`${prefix}rng`)) {
        var randomNum = Math.floor(Math.random() * 100);
        message.channel.send("RANDOM NUMBER: " + randomNum);
    }
    else if (message.content.startsWith(`${prefix}commands`)) {
        var command = "List of commands:\n";
        for (var i = 0; i < commands.length; i++) {
            command += "!" + commands[i] + "\n";
        }
        message.channel.send(command);
    }
});

client.login(auth.token);
