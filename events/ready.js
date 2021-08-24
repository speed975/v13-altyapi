const client = require("../shaynox");

client.on("ready", () => {
    console.log(`${client.user.tag} İsmi İle Bot Aktif!`)
    client.user.setActivity(`Shaynox Code 🔥❤ Speed`)
    console.log(`Ready.js Bölümü Çalışıyor`)
});
