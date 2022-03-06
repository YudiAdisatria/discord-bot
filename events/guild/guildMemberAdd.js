const profileModel = require("../../models/profileSchema");

module.exports = async(Discord, bot) => {
  let profile = await profileModel.create({
    userID: '1234567899',
    serverID: 'bot.guild.id',
    coins: 1000,
    bank: 0
  });
  profile.save();
};