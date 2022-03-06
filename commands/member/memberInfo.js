require('dotenv').config();
module.exports = {
    name: 'minfo',
    description : "Member Info",
    execute(message, args, Discord, bot, cmd){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#32D732')
        .setTitle('Member Info')
        //URL on title .setURL() 
        //.setDescription()
        .addFields(
            {name: 'Name', value: message.author.username},
            {name: 'Nickname', value: message.member.displayName},
            {name: 'ID', value: message.author.id},
            {name: 'Date Join', value: message.guild.joinedAt}
        )
        //.setImage()
        .setFooter('BotBotan Bot', process.env.profileBot);

        message.channel.send(newEmbed);
    }
}