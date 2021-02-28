require("dotenv").config()

const discord = require("discord.js")
const client = new discord.Client()

client.on("ready", ()=>{
console.log("bot is ready to go")
})

const polls = require("./polls.js")

polls(client)

client.on("message",(msg)=>{
if(msg.content === "huh"){
msg.reply("abey gotya, phir se")
}
if(msg.content == "rob"){
msg.reply("Oi sur ahile sur ahile")
}
if(msg.content == "bal"){
msg.reply("aku napao toi")
}
if(msg.content == "steal"){
msg.reply("akou sur ahile")
}
if(msg.content === "!admin"){
msg.member.roles.add("811207627593875486")
}
if(msg.content == "hitartha is great"){
msg.reply("Oh thanks")
}
if(msg.content == "hitartha is betrayer"){
msg.reply("You idiot")
}
if(msg.content == "pls bal"){
msg.reply("hey respond, dark memer")
}
if(msg.content == "tease gotya"){
msg.reply("Gotyaaaa......., how are you? Huh!!!!")
}
if(msg.content == "oi"){
msg.reply("Pahar bhangi thoi ahisu")
}
if(msg.content == "pls game"){
msg.reply("Game is coming soon. It's under development stage, plz suggest your Ideas to create a amazing customized game. 🙂")

}
if(msg.content == "make me rich"){
msg.reply("We have paid Your 20 billion dollars in your account XXXX XXXX XXXX 4242. Thanks for using our service")
}
if(msg.content.toLowerCase().startsWith("!say")){
console.log(msg.mentions.members.first)
msg.channel.send(`Your message was ${msg.mentions.members.first()}       `)
}

} )

client.login(process.env.PASS)
