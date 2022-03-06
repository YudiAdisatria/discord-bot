module.exports = (member) =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
	if(!channel)
		return;
	
	channel.send(`Welcome to our server, ${member}`);
}
