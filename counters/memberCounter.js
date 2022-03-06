module.exports = async (bot) =>{
    //create voice channel that can't be connected to everyone
    //discord developer portal -> bot -> presence intent -> on for whitelist, maybe your bot server can't reach hundred discord server
    const guild = bot.guilds.cache.get('479612366380859392'); //server ID
    let time = new Date();

    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('808600924968452116'); //channel to show count member
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count ' + time.toUTCString());
    }, 5000); //5000ms = 5 second
}