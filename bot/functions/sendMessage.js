module.exports = {
    fn: (cid, color, title, message) => {
        var guild = client.guilds.find(g => g.id == "610138012205973545");
        var channel = guild.channels.find(c => c.id == cid);
        var Embed = new Discord.RichEmbed()
            .setTitle(title)
            .setDescription(message)
            .setColor(color);
        channel.send(Embed);
    }
};