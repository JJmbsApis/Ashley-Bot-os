console.log('✅ Iniciando o Bot')
const aoijs = require('aoi.js')

const bot = new aoijs.Bot({
  token: "OTcyNjkzMTQxMTU5MzAxMTcz.Gc1whJ.zHxxY5xDtT6KEPdPPOa4xKdlzRs3M20u1qNldM",
  prefix: ["$getServerVar[Prefix;$guildID]", "<@972693141159301173>", "<@!972693141159301173>"],
  intents: "all",

  respondOnEdit: {
    commands: true,
    alwaysExecute: false,
    time: 60000,
  }

});

bot.status({
  text: "[ BETA ]",
  type: "PLAYING",
  status: "online",
  time: 30
})

bot.status({
  text: "$AllmembersCount Amigos!",
  type: "WATCHING",
  status: "online",
  time: 30
})

bot.status({
  text: "$serverCount Servidores!",
  type: "WATCHING",
  status: "online",
  time: 30
})
bot.variables({
  Prefix: "a*",
  coins: "0",
  banco: "0",
  vip: "no",
  messages: "0",
  uptime: "x"
})

bot.readyCommand({
  channel: "",
  code: `
 $log[✅ Bot Iniciado... ( ID: $clientID ) ( Tag: $user[$clientID;tag] )]
 $setVar[uptime;$truncate[$divide[$dateStamp;1000]]]
`
})

bot.onMessage({
  guildOnly: true
})

bot.onMessageUpdate()

bot.onInteractionCreate()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, `./Comandos/`)