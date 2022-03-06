module.exports = {
    name: 'host',
    description: "host a game party",
    async execute(message, args, client, Discord, cmd) {
        const channel = message.channel.id;
        const regisEmoji = "<:ronald:843524047085764628>";
        const playEmoji = "<:visto:725222244405608459>";
        const quitEmoji = "<:Wibi:724706418200018956>";
        /*
        const regisEmoji = "⚙";
        const playEmoji = "🟢";
        const quitEmoji = "🔴";
        */
        const my_list = [];

        const embed = new Discord.MessageEmbed()
            .setColor('#40E0D0')
            .setTitle('Rise with Dhias')
            .setThumbnail('https://media.discordapp.net/attachments/690193806720630823/856780574543183922/Screenshot_20210622-131935_Instagram.jpg?width=566&height=468')
            .setDescription('Supporter(s)\n\n'
                + `${my_list}\n`
                + `${regisEmoji} for rise with Dhias\n`
                + `${playEmoji} for Play\n`
                + `${quitEmoji} for Quit`)
            .setFooter('Aku adalah bait', 'https://cdn.discordapp.com/emojis/862780896243089440.png?v=1');
   
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(regisEmoji).then(() => messageEmbed.react(playEmoji).then(() => messageEmbed.react(quitEmoji)));
        
        function getPlayer(){
            let text = "";
            my_list.forEach(list);
            function list(item, index) {
                text +="<@" + item + ">, "; 
            }
            return text;
        }

        function refresh(){
            let text = "";
            my_list.forEach(list);
            function list(item, index) {
                text += (index+1) + ". <@" + item + ">\n"; 
            }

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#40E0D0')
            .setTitle('Rise with Dhias')
            .setThumbnail('https://media.discordapp.net/attachments/690193806720630823/856780574543183922/Screenshot_20210622-131935_Instagram.jpg?width=566&height=468')
            .setDescription('Supporter(s)\n\n'
                + `${text}\n\n`
                + `${regisEmoji} for rise with Dhias\n`
                + `${playEmoji} for Play\n`
                + `${quitEmoji} for Quit`)
            .setFooter('Aku adalah bait', 'https://cdn.discordapp.com/emojis/862780896243089440.png?v=1');
            delete text;
            return newEmbed;
        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            
            if (reaction.emoji.id === "843524047085764628") {
                const player = await reaction.message.guild.members.cache.get(user.id);
                let id = my_list.indexOf(player);
                if(id==-1){
                    my_list.push(player);
                    messageEmbed.edit(refresh());
                    messageEmbed.react(regisEmoji).then(() => messageEmbed.react(playEmoji).then(() => messageEmbed.react(quitEmoji)));
                }
            }   
            if (reaction.emoji.id === "725222244405608459") {
				const player = await reaction.message.guild.members.cache.get(user.id);
				let id = my_list.indexOf(player);
                if(id!=-1){
                	message.channel.send("Time to play " + getPlayer());
                	delete text;
                	messageEmbed.react(regisEmoji).then(() => messageEmbed.react(playEmoji).then(() => messageEmbed.react(quitEmoji)));
				}
            }
            if (reaction.emoji.id === "724706418200018956") {
                const player = await reaction.message.guild.members.cache.get(user.id);
                let id = my_list.indexOf(player);
                if(id!=-1){
					my_list.splice(id, 1);
                	messageEmbed.edit(refresh());
                	messageEmbed.react(regisEmoji).then(() => messageEmbed.react(playEmoji).then(() => messageEmbed.react(quitEmoji)));
				}
            }
 
        });
 
        /* client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === regisEmoji) {
                    await message.send("yey");
                }
                if (reaction.emoji.name === playEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }

        }); */
    }
 
}   