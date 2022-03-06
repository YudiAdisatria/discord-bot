const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

require('dotenv').config();

const mongoose = require("mongoose");

//Bot Token
//const token = 'token';

//Set prefix, now in .env
//const prefix = '/';

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['command_handler','event_handler'].forEach(handler =>{
	require(`./handlers/${handler}`)(Discord, bot);
})

/*
mongoose.connect(process.env.MongoDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}).then(() =>{
	console.log("DB connect");
}).catch((err) => {
	console.log(err);
});
*/
bot.login(process.env.DISCORD_TOKEN);

//DiscordBotDB