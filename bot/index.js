module.exports = {
    init: () => {
        global.Discord = require('discord.js');
        global.client = new Discord.Client();

        client.on('ready', () => {
            client.user.setPresence({ game: { name: 'with Interlab Applications' }, status: 'online' })
        });

        client.on('message', msg => {
            if (msg.author.bot) return;
            if (msg.content.indexOf('!') !== 0) return;

            const args = msg.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
        });
  
        client.login('NjIzMzA0NTU1NjIyNDMyODI3.XYAg-Q.irek2995fZwIRB5JlIH57_GAibs');
    }
}