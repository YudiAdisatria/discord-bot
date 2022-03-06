module.exports = {
    name: 'clear',
    description : "Clear chat",
    execute(message, args, Discord, bot){
        if(!args[1]) return message.reply('Please gives second argument')
		message.channel.bulkDelete(args[1]);
    }
}