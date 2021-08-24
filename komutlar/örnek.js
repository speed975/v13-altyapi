const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Komut Başlığı")
    .setDescription("**https://discord.gg/kodlama**")
    .setColor("BLUE")
    .setFooter(`Kullanan ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["v13-ö", "örnek-komut", "v13"]
};

exports.help = {
  name: "v13-örnek"
};
