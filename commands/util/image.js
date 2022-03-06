// npm install image-scraper
var Scraper = require('image-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
});

module.exports = {
    //name: 'image',
    description: 'Search google image',
    async execute(message, args, Discord, bot, cmd){
        const image_query = args.join(" ");
        if(!image_query) return message.channel.send('Please try another keywords');
        
        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].address);
    }
}