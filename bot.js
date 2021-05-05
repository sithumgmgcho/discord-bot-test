require('dotenv').config()

const Discord  = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

client.on('ready', () => {
    console.log('This is ready to go!!!!!')
})
client.on('messageDelete', msg => {
    msg.channel.send('Messag delete tl kg Khawy')
})

const MOD_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on('message', msg => {
    if (msg.content === 'lee' || msg.content ==='Lee') {
        msg.reply('MaALoe Lee phyit ny tr lr')
    }
    if (msg.content === 'Hi' || msg.content ==='hi') {
        msg.reply('Min May Loe lite') 
        msg.react('love')
    }

    if (msg.content === `${MOD_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

function modUser(member){
        member.roles.add('839571689049423872')
}

client.login(process.env.BOT_TOKEN)






