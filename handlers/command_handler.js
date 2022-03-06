const fs = require('fs');

module.exports = (Discord, bot) => {
    /* CARA 1
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        if(command.name){
            bot.commands.set(command.name, command);
        }else{
            continue;
        }
    } */

   /* CARA 2
    const loadDir = (dirs) => {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        const commandFiles2 = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            for (const file2 of commandFiles2) {
                const command = require(`../commands/${file}`);
                const command2 = require(`../commands/${dirs}/${file2}`);
                if (command.name) {
                    bot.commands.set(command.name, command);
                } else if (command2.name) {
                    bot.commands.set(command2.name, command2);
                } else {
                    continue;
                }
            }
        }
    }

    ['music'].forEach(e => loadDir(e));
    */
    const { Collection } = require("discord.js");
    bot.commands = new Collection();

    //We let the bot read through the 'commands' folder and return an array including all category folders
    const categories = fs.readdirSync('./commands');

    for (const category of categories) {
        const commandFiles = fs.readdirSync(`./commands/${category}`).filter(File => File.endsWith('.js'));
        //We now enter every sub-folder one by one and filter the files to include .js only, readdirSync() returns an array including the items/files in that directory 

        //We create an intended for loop (notice how the for loops are inside eachother)
        for (const file of commandFiles) {
            const command = require(`../commands/${category}/${file}`);
            //We grab that command-file and it's values, and we push it into the commands collection

            bot.commands.set(command.name, command);
        }
    }
}