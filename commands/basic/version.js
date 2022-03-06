module.exports = {
    name: 'version',
    description : "Show the version of bot",
    let : version = '1.0.2',
    execute(message, args, Discord, bot){
        message.channel.send('Version : '+ version);
    }
}