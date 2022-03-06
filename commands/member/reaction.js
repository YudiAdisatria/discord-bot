module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, bot, cmd){
        const channel = message.channel.id;

        const role1 = message.guild.roles.cache.find(role => role.name === args[0]);
        const role2 = message.guild.roles.cache.find(role => role.name === args[1]);
 
        const role1Emoji = args[2];
        const role2Emoji = args[3];
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${role1Emoji} for ${args[0]}\n`
                + `${role2Emoji} for ${args[1]}`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(role1Emoji);
        messageEmbed.react(role2Emoji);
 
        bot.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
 
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === role1Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
                }
                if(reaction.emoji.name === role2Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
                }
            }else{
                return;
            }
        });

        bot.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role1Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                }
                if (reaction.emoji.name === role2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
                }
            } else {
                return;
            }
        });
    }
}   