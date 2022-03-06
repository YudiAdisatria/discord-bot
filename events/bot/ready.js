//const memberCounter = require('counters/memberCounter');

module.exports = (Discord, bot) =>{
    console.log('Bot is ONLINE!');
    bot.user.setActivity('Online !', {type: 'WATCHING'})
	.catch(console.error);
    //memberCounter(bot);
}