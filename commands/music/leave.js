module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args, Discord, bot, cmd) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.reply("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave();
        await message.channel.send('Leaving channel :smiling_face_with_tear:')
 
    }
}