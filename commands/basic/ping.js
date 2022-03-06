module.exports = {
    name: 'ping',
    description : "say ping!",
    execute(message, args, Discord, bot){
        message.channel.send('pong!');
    }
}