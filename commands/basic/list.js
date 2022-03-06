module.exports = {
    name: 'list',
    description : "List Command",
    execute(message, args, Discord, bot){
        message.channel.send('/minfo : Your info in this server');
        message.channel.send('/clear + number : delete chat until 14 days ago');
    }
}