module.exports = {
    fn: (cid, color, title, message) => {
        var guild = client.guilds.find(g => g.id == "610138012205973545");
        var channel = guild.channels.find(c => c.id == cid);
        if (channel !== nil) {
            var Embed = new Discord.RichEmbed()
                .setTitle(title)
                .setDesc(message)
                .setColor(color);
            channel.send(Embed);
        };
    }
};