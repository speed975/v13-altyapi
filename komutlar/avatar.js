const Discord = require('discord.js')

exports.run = async (client, message, args)=> {
  if(message.mentions.users.first()) message.author = message.mentions.users.first();
  const shaynox = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}'shaynox avatar code`)
	.setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))

  message.channel.send({embeds: [shaynox]});
}

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['a'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: '',
  usage: 'avatar'
};