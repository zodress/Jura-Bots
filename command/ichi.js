/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

//Module 
require('../settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const promises = require('fs')
const FormData = require("form-data")
const moment = require('moment-timezone')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const yts = require('yt-search')
const linkpreview = require('link-preview-js')

//Waktu
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 

//Lib
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, removeEmojis } = require('../lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/respon-list')

//database
const db_respon_list = JSON.parse(fs.readFileSync('./storage/list-message.json'))
global.db = JSON.parse(fs.readFileSync('./storage/db.json'))
if (global.db) global.db = {
chats: {},
users: {},
settings: {},
...(global.db || {})
}

//Module Exports
module.exports = ichi = async(ichi, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = ichi.user.id ? ichi.user.id.split(":")[0]+"@s.whatsapp.net" : ichi.user.id
const isOwner = [ichi.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == ichi.user.id ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const mode = 'public'

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await ichi.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupDesk = m.isGroup ? groupMetadata.desk : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupOwner.includes(m.sender) || groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)

const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

var tipsz = [tips1, tips2, tips3, tips4, tips5]
var tips = tipsz[Math.floor(Math.random() * tipsz.length)]
var quote = [quotes1, quotes2, quotes3]
var quotes = quote[Math.floor(Math.random() * quote.length)]

try {
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
if (!('antiwame' in chats)) chats.antiwame = false
if (!('antivirtex' in chats)) chats.antivirtex = false
if (!('antiasing' in chats)) chats.antiasing = false
if (!('antiviewone' in chats)) chats.antiviewone = false
if (!('event' in chats)) chats.event = false
if (!('nsfw' in chats)) chats.nsfw = false
if (!('expired' in chats)) chats.sewa = 0
if (!('isBanned' in chats)) chats.isBanned = false
} else global.db.chats[m.chat] = {
antilink: false,
antiwame: false,
antivirtex: false,
antiasing: false,
antiviewone: false,
nsfw: false,
expired: 0,
isBanned: false
}

let limitUser = isOwner? global.limitAwal.prem : global.limitAwal.free
let users = global.db.users[m.sender]
if (typeof users !== 'object') global.db.users[m.sender] = {}
if (users) {
if (!('limit' in users)) users.limit = limitUser

if (!('registered' in users)) users.registered = false
if (!users.registered) {
 if (!('name' in users)) users.name = m.name
 if (!('age' in users)) users.age = -1
 if (!('regTime' in users)) users.regTime = -1
}

if (!('premium' in users)) users.premium = false
if (!('premiumTime' in users)) users.premiumTime = 0
if (!('role' in users)) users.role = 'Beginner'
if (!('banned' in users)) users.banned = false
if (!('autolevelup' in users)) users.autolevelup = true
if (!('atm' in users)) users.atm = 0
if (!('fullatm' in users)) users.fullatm = 0
if (!('bank' in users)) users.bank = 0

if (!('armor' in users)) users.armor = 0
if (!('health' in users)) users.health = 100
if (!('money' in users)) users.money = 0
if (!('exp' in users)) users.exp = 0
if (!('level' in users)) users.level = 0
if (!('potion' in users)) users.potion = 0
if (!('kayu' in users)) users.kayu = 0
if (!('batu' in users)) users.batu = 0
if (!('iron' in users)) users.iron = 0
if (!('potion' in users)) users.potion = 0
if (!('diamond' in users)) users.diamond = 0
if (!('sampah' in users)) users.sampah = 0
if (!('sword' in users)) users.sword = 0
if (!('budak' in users)) users.budak = 0
if (!('busur' in users)) users.busur = 0
if (!('panah' in users)) users.panah = 0
if (!('kapak' in users)) users.kapak = 0

if (!('fox' in users)) users.fox = 0
if (!('foxExp' in users)) users.foxExp = 0
if (!('foxLastFeed' in users)) users.foxLastFeed = 0
if (!('cat' in users)) users.cat = 0
if (!('catExp' in users)) users.catExp = 0
if (!('catLastFeed' in users)) users.catLastFeed = 0
if (!('dog' in users)) users.dog = 0
if (!('dogExp' in users)) users.dogExp = 0
if (!('dogLastFeed' in users)) users.dogLastFeed = 0
if (!('horse' in users)) users.horse = 0
if (!('horseExp' in users)) users.horseExp = 0
if (!('horseLastFeed' in users)) users.horseLastFeed = 0
if (!('petFood' in users)) users.petFood = 0

if (!('common' in users)) users.common = 0
if (!('uncommon' in users)) users.uncommon = 0
if (!('mythic' in users)) users.mythic = 0
if (!('legendary' in users)) users.legendary = 0
if (!('pet' in users)) users.pet = 0

if (!('lastday' in users)) users.lastday = 0
if (!('lastweekly' in users)) users.lastweekly = 0
if (!('lastmonthly' in users)) users.lastmonthly = 0
if (!('lastgajian' in users)) users.lastgajian = 0
if (!('lastmining' in users)) users.lastmining = 0
if (!('lastadventure' in users)) users.lastadventure = 0
if (!('lastbansos' in users)) users.lastbansos = 0
if (!('lastnebang' in users)) users.lastnebang = 0
} else global.db.users[m.sender] = {
limit: limitUser,

registered: false,
name: m.name,
age: -1,
regTime: -1,

premium: false,
premiumTime: 0,
role: 'Beginner',
banned: false,
autolevelup: true,
atm: 0,
fullatm: 0,
bank: 0,

armor: 0,
health: 100,
money: 0,
exp: 0,
level: 0,
potion: 0,
kayu: 0,
batu: 0,
iron: 0,
potion: 0,
diamond: 0,
sampah: 0,
sword: 0,
budak: 0,
busur: 0,
panah: 0,
kapak: 0,

fox: 0,
foxExp: 0,
foxLastFeed: 0,
cat: 0,
catExp: 0,
catLastFeed: 0,
dog: 0,
dogExp: 0,
dogLastFeed: 0,
horse: 0,
horseExp: 0,
horseLastFeed: 0,

common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
pet: 0,

lastday: 0,
lastweekly: 0,
lastmonthly: 0,
lastgajian: 0,
lastmining: 0,
lastadventure: 0,
lastbansos: 0,
lastnebang: 0
}

let settings = global.db.settings[botNumber]
if (typeof settings !== 'object') global.db.settings[botNumber] = {}
if (settings) {
if (!('anticall' in settings)) settings.anticall = false
if (!('autoreact' in settings)) settings.autoreact = false
if (!('autobio' in settings)) settings.autobio = false
if (!('autosticker' in settings)) settings.autosticker = false
if (!('autobackup' in settings)) settings.autobackup = global.autobackup
if (!('autoread' in settings)) settings.autobackup = global.autoread
if (!('autotyping' in settings)) settings.autobackup = global.autotyping
if (!('available' in settings)) settings.autobackup = global.available
} else global.db.settings[botNumber] = {
anticall: false,
autoreact: false,
autobio: false,
autosticker: false,
autobackup: global.autobackup,
autoread: global.autoread,
autotyping: global.autotyping,
available: global.available
}

} catch (err) {
console.error(err)
}

//Jangan Dihapus
const isPrem = isOwner || global.db.users[m.sender].premium || false
var cron = require('node-cron')
 cron.schedule('21 09 * * *', () => {
 var user = Object.keys(global.db.users)
 let limitUser = isPrem? global.limitAwal.prem : global.limitAwal.free
 for (let jid of user) global.db.users[jid].limit = limitUser
 console.log('Reseted Limit')
 }, {
 scheduled: true,
 timezone: "Asia/Jakarta"
 })

//Auto Backup
if (db.settings[botNumber].autobackup) {
  var cron = require('node-cron')
  cron.schedule('21 09 * * *', () => {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: '𝙳 𝙰 𝚃 𝙰 𝙱 𝙰 𝚂 𝙴', jpegThumbnail: global.thumb, }}}
  var d = new Date
  var date = d.toLocaleDateString('id', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  ichi.sendMessage(global.Rowner + '@s.whatsapp.net', { text: `*🗓️ Database & Session :* ${date}` }, { quoted : m })
  ichi.sendMessage(global.Rowner + '@s.whatsapp.net', {document: fs.readFileSync('./storage/db.json'), mimetype: 'application/json', fileName: `db.json`}, { quoted : fdoc })
  ichi.sendMessage(global.Rowner + '@s.whatsapp.net', {document: fs.readFileSync(`./${global.sessionName}.json`), mimetype: 'application/json', fileName: `${global.sessionName}.json`}, { quoted : fdoc })
  }, {
  schedule: true,
  timezone: "Asia/Jakarta"
  })
  }
  
// Antilink
if (db.chats[m.chat].antilink) {
if (budy.match(`https:\/\/chat.whatsapp.com`)) {
m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
var gclink = (`https://chat.whatsapp.com/`+await ichi.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Antiwame
if (db.chats[m.chat].antiwame) {
if (budy.match(`https:\/\/wa.me/`)) {
m.reply(`Link wa.me Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//Antivirtex
if (db.chats[m.chat].antivirtex) {
if (budy.length > 3500) {
m.reply('Tandai telah dibaca\n'.repeat(300))
m.reply(`Virtex Terdeteksi 🐞\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (db.settings[botNumber].anticall) {
ichi.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
var pa7rick = await ichi.sendContact(callerId, global.ownerNumber)
ichi.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
await sleep(8000)
await ichi.updateBlockStatus(callerId, "block")
}
})
}
  
//Auto Bio
if (db.settings[botNumber].autobio){
await ichi.setStatus(`${global.packname} || Created By ${global.ownerName} || ⌚ Runtime : ${runtime(process.uptime())}`);
}

if (db.chats[m.chat].antiviewone) {
if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : @${m.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    
    💫 *MessageType* : ${m.mtype}`
m.reply(teks)
await sleep(500)
m.copyNForward(m.chat, true, {
readViewOnce: true
}, {
quoted: mek
}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
}
}

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}

if (mode == 'self') {
if (!m.key.fromMe && !isOwner) return
}

//Push Message To Console
if (m.message) {
global.db.users[m.sender].exp += 10
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ICHI \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}

//Bot Setting Atur Di Settings.js
if (db.settings[botNumber].autoread) { if (m.chat) { ichi.sendReadReceipt(m.chat, m.sender, [m.key.id]) }}
if (db.settings[botNumber].autotyping) { if (m.chat) { ichi.sendPresenceUpdate('composing', m.chat) }}
if (db.settings[botNumber].available) { if (m.chat) { ichi.sendPresenceUpdate('available', m.chat) }}

//Update Database
setInterval(() => {
fs.writeFileSync('./storage/db.json', JSON.stringify(global.db, null, 2))
}, 1 * 1000)

//Rolex
var roles = {
  'Beginner': 0,
  'Kitten Town': 10,
  'Black Woods': 20,
  'Farmount': 30,
  'Rosenvale': 40,
  'Amberhill': 50,
  'Master Fap': 60,
  'Master Woods': 80,
  'Legend': 90,
  'Glory': 100
}
var user = global.db.users[m.sender]
var level = user.level
var role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
user.role = role

//Jangan Di Ubah Biar Tampilan Menu nya keren
var menuu = `Hai *${pushname}* 👋

*${emot.limit} Limit :* ${isOwner? `${global.limitAwal.prem} Limit` : user.premium? `${global.limitAwal.prem} Limit` : `${user.limit}/${global.limitAwal.free}`}
*${emot.money} Money :* ${global.db.users[m.sender].money}
*${emot.exp} Exp :* ${global.db.users[m.sender].exp}
*${emot.level}️ Level :* ${global.db.users[m.sender].level}
*${emot.role} Role :* ${global.db.users[m.sender].role}

${readmore} *🍒 Tips :* ${tips}\n
`
var menu = `Hai *${pushname}* 👋

*${emot.limit} Limit :* ${isOwner? `${global.limitAwal.prem} Limit` : user.premium? `${global.limitAwal.prem} Limit` : `${user.limit}/${global.limitAwal.free}`}
*${emot.money} Money :* ${global.db.users[m.sender].money}
*${emot.exp} Exp :* ${global.db.users[m.sender].exp}
*${emot.level}️ Level :* ${global.db.users[m.sender].level}
*${emot.role} Role :* ${global.db.users[m.sender].role}

${readmore} *📚 Quotes:* ${quotes}\n
`

//Auto Sticker
if (db.settings[botNumber].autosticker) {
if (m.mtype == 'imageMessage' || m.mtype == 'videoMessage' || m.mtype == 'stickerMessage')
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await ichi.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await ichi.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  }
  }
  
// Store
if (m.isGroup && isAlreadyResponList(from, body, db_respon_list)) {
  var get_data_respon = getDataResponList(from, body, db_respon_list)
  if (get_data_respon.isImage === false) {
  ichi.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, { quoted : m })
  } else {
  imgstore = await getBuffer(get_data_respon.image_url)
  let butstore = [{ buttonId: `menu`, buttonText: { displayText: 'Contact Owner 👦' }, type: 1 }]
  ichi.sendMessage(from, { image: imgstore, caption: get_data_respon.response, buttons: butstore, mentions: [m.sender]}, { quoted: m })
  }
  }

//Anti Asing
if (db.chats[m.chat].antiasing) {
if (m.sender.startsWith( '212' || '212' )) {
m.reply('Sorry Negaramu Terlalu Haram Untuk Menggunakan Bot')
ichi.updateBlockStatus(m.sender, 'block')
ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
if (m.sender.startsWith( '265' || '265' )) {
m.reply('Sorry Negaramu Terlalu Haram Untuk Menggunakan Bot')
ichi.updateBlockStatus(m.sender, 'block')
ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//Auto React
if (db.settings[botNumber].autoreact) {
let emoji = ["👍","👎","🤙","😎","😁","😭","😠","🗿","😍","🤨","🤔","🤡"]
let emot = emoji[Math.floor(Math.random() * emoji.length)]
ichi.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
}
})
}

//Sewa Abis
if (m.isGroup && db.chats[m.chat].expired != 0) {
if (new Date() * 1 >= db.chats[m.chat].expired) {
var pa7rick = await ichi.sendContact(m.chat, global.ownerNumber)
ichi.sendMessage(m.chat, { text: 'Waktunya Untuk Bot Meninggalkan Grup' }, { quoted : pa7rick })
await ichi.groupLeave(m.chat)
db.chats[m.chat].expired = 0
}
}

//Premium Abis
var user = global.db.users[m.sender]
if (m.chat.endsWith('broadcast')) return
if (user.premiumTime != 0 && user.premium) {
 if (new Date() * 1 >= user.premiumTime) {
  await m.reply('Waktu Premium Kamu Sudah Habis')
  user.premiumTime = 0
  user.premium = false
 }
}

//Mute Chat
if (db.chats[m.chat].isBanned && !isAdmins && !isOwner) {
return
}

//Mute User
if (db.users[m.sender].banned) {
return
}

//function leveling & pick
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}
function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}
function enumGetKey(a) {
  return a.jid
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
const growth = Math.pow(Math.PI / Math.E, 1.618) * Math.E * .75
function xpRange(level, multiplier = global.multiplier || 1) {
  if (level < 0)
  throw new TypeError('level cannot be negative value')
  level = Math.floor(level)
  let min = level === 0 ? 0 : Math.round(Math.pow(level, growth) * multiplier) + 1
  let max = Math.round(Math.pow(++level, growth) * multiplier)
  return {
  min,
  max,
  xp: max - min
  }
  }
function findLevel(xp, multiplier = global.multiplier || 1) {
  if (xp === Infinity)
  return Infinity
  if (isNaN(xp))
  return NaN
  if (xp <= 0)
  return -1
  let level = 0
  do
  level++
  while (xpRange(level, multiplier).min <= xp)
  return --level
  }
function canLevelUp(level, xp, multiplier = global.multiplier || 1) {
  if (level < 0)
  return false
  if (xp === Infinity)
  return true
  if (isNaN(xp))
  return false
  if (xp <= 0)
  return false
  return level < findLevel(xp, multiplier)
  }

var user = global.db.users[m.sender]
if (!user.autolevelup)
return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++

if (before !== user.level) {
var upLev = `Selamat, Kamu Telah Naik Level!
*${before}* -> *${user.level}*
Gunakan *.profile* Untuk Mengecek`
m.reply(upLev)
}

let butmenu = [{urlButton: {displayText: 'Source Code ♨️',url: 'https://www.youtube.com/c/FBOTZYT'}}, {urlButton: {displayText: 'My Web 🔗',url: global.webme }}, {"quickReplyButton": {"displayText": "Donasi 🗂️","id": `donasi`},}, {"quickReplyButton": {"displayText": "Owner 👦","id": "owner"},}, {"quickReplyButton": {"displayText": "Status Bot ⌚","id": `ping`}}]
                            
switch(command) {
case 'database': case 'user': case 'jumlahdatabase': case 'jumlahdb': {
  var totalreg = Object.keys(global.db.users).length
  var rtotalreg = Object.values(global.db.users).filter(users => users.registered == true).length
  m.reply(`*Jumlah database saat ini ${totalreg} user*`)
  }
  break
case 'daftar': case 'register': {
  const { createHash } = require('crypto')
  var Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  var user = global.db.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${prefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Gunakan Format :\n*${prefix + command} nama.umur*\n\nExample :\n*${prefix + command} ${global.ownerName}.17*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 100) throw 'Tua Banget Njing'
  if (age > 30) throw 'Lu dah tua anjing'
  if (age < 5) throw 'Mau diban?'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? ichi.user.jid : m.sender
  m.reply(`*Successful Registration ✅*

╭─• 〘 INFO 〙
│➥ Nama: ${name}
│➥ Umur: ${age} Tahun
╰──────•

Ketik ${prefix}ceksn untuk mendapatkan SERIAL NUMBER\n
sn digunakan untuk unregister
`.trim())
  }
  break
case 'ceksn': {
  const { createHash } = require('crypto')
  if (user.registered === false) throw `Kamu belum terdaftar di database`
  var Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  var who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  else who = m.sender
  var sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`${sn}\n\n❗ Digunakan Jika Ingin Unregister`)
  }
  break
case 'unreg': case 'unregister': {
  const { createHash } = require('crypto')
  if (user.registered === false) throw `Kamu belum terdaftar di database`
  if (!args[0]) throw 'Serial Number kosong'
  var user = global.db.users[m.sender]
  var sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah'
  user.registered = false
  m.reply('*Succes Unreg !*')
  }
  break
case 'donasi': case 'sewa': case 'sewabot': case 'buyprem': case 'buypremium': case 'beliprem': case 'belipremium': {
  let { donasi } = require('../storage/confat.js')
  let but = [{"quickReplyButton": {"displayText": "Owner 👦","id": "owner"}}]
  ichi.sendButtonImg(m.chat, donasi(), global.ownerName, global.donasi, but, global.donasi)
  }
  break
case 'rules': {
  let { rules } = require('../storage/confat.js')
  imgrules = await getBuffer('https://telegra.ph/file/27f7bc1f07b82ea0658e2.jpg')
  var btnrules = [{ buttonId: `menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
  ichi.sendMessage(m.chat, { image: imgrules, caption: rules(), footer: global.ownerName, buttons: btnrules }, { quoted: m})
  }
  break
case 'owner': {
  ichi.sendContact(m.chat, global.ownerNumber, m)
  }
  break
case 'delete': case 'del': {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!isBaileys) return 'Bukan Dari Saia Itu Banh 🗿'
  ichi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
🏎️ Kecepatan Respon ${latensi.toFixed(4)} Second
⌚ Runtime : ${runtime(process.uptime())}
💻 RAM Server : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
🗃️ Lib : Baileys Multi Device
🆎 Tipe : Nodejs

${readmore} _NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.reply(respon)
  }
  break
case 'getpp': {
  if (global.db.users[m.sender].limit == 0) return m.reply(rpg.limitEnd)
  if (m.isGroup) who2 = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  else who2 = m.sender
  try {
  ppusew = await ichi.profilePictureUrl(who2, 'image')
  } catch {
  ppusew = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  try {
  var ppuser2 = await getBuffer(ppusew)
  var str = `Ini Foto Profile @${who2.split('@')[0]}`
  ichi.sendMessage(m.chat, { image: ppuser2, caption: str, mentions: [who2]}, { quoted: m})
  global.db.users[m.sender].limit -= 1
  } catch (e) {
  m.reply('Gagal Mendapatkan Profile, Mungkin User Belum Pernah Berinteraksi Dengan Bot')
  }
  }
  break
case 'readmore': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if(!text) return m.reply(`Kirim Pesan Dengan Caption ${prefix + command} *teks|teks*`)
  if(!text.includes('|')) return m.reply(`Kirim Pesan Dengan Caption ${prefix + command} *teks|teks*`)
  ichi.sendMessage(m.chat, { text: text.split("|")[0]+readmore+text.split("|")[1] }, {quoted: m})
  global.db.users[m.sender].limit -= 1
  }
  break
case 'q': case 'quoted': {
  if (!m.quoted) throw 'Reply Pesannya!'
  try {
  var q = await m.getQuotedObj()
  await q.quoted.copyNForward(m.chat, true)
  } catch (e) {
  if (!q.quoted) throw 'Pesan Yang Anda Reply Tidak Mengandung Reply'
  }
  }
  break

//Owner Menu
case 'react': {
  if (!isOwner && !m.key.fromMe) throw mess.botOwner
  reactionMessage = {
  react: {
  text: args[0],
  key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
  }
  }
  ichi.sendMessage(m.chat, reactionMessage)
  }
  break
case 'anticall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.settings[botNumber].anticall) return m.reply(`Sudah Aktif Sebelumnya`)
  db.settings[botNumber].anticall = true
  m.reply(`Anticall Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.settings[botNumber].anticall) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.settings[botNumber].anticall = false
  m.reply(`Anticall Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsanticall = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsanticall, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autobio': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.settings[botNumber].autobio) return m.reply(`Sudah Aktif Sebelumnya`)
  db.settings[botNumber].autobio = true
  m.reply(`AutoBio Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.settings[botNumber].autobio) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.settings[botNumber].autobio = false
  m.reply(`Auto Bio Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautobio = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautobio, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autoreact': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.settings[botNumber].autoreact) return m.reply(`Sudah Aktif Sebelumnya`)
  db.settings[botNumber].autoreact = true
  m.reply(`Autoreact Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.settings[botNumber].autoreact) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.settings[botNumber].autoreact = false
  m.reply(`Autoreact Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautoreact = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautoreact, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autosticker': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.settings[botNumber].autosticker) return m.reply(`Sudah Aktif Sebelumnya`)
  db.settings[botNumber].autosticker = true
  m.reply(`Autosticker Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.settings[botNumber].autosticker) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.settings[botNumber].autosticker = false
  m.reply(`Autosticker Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautosticker = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautosticker, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autobackup': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.settings[botNumber].autobackup) return m.reply(`Sudah Aktif Sebelumnya`)
  db.settings[botNumber].autobackup = true
  m.reply(`Autobackup Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.settings[botNumber].autobackup) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.settings[botNumber].autobackup = false
  m.reply(`Autobackup Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautobackup = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautobackup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'banned': case 'ban': {
  if (!isOwner && m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Nomer Nya Atau Tag Orangnya')
  var siapa = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : text ? (text.replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
  if (!siapa) return m.reply('Masukkan Nomer Nya Atau Tag Orangnya')
  var user = global.db.users[siapa]
  user.banned = true
  m.reply(mess.done)
  }
  break
case 'unbanned': case 'unban': {
  if (!isOwner && m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Nomer Nya Atau Tag Orangnya')
  var siapa = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : text ? (text.replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
  if (!siapa) return m.reply('Masukkan Nomer Nya Atau Tag Orangnya')
  var user = global.db.users[siapa]
  user.banned = false
  m.reply(mess.done)
  }
  break
case 'bcgc': case 'bcgroup': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`
  let getGroups = await ichi.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let i of anu) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${text}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await ichi.sendButtonText(i, btnbc, txtbc, '', fdoc)
  }
  m.reply('Sukses Broadcast')
  }
  break
case 'bc': case 'broadcast': case 'bcall': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`
  let anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${text}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await ichi.sendButtonText(yoi, btnbc, txtbc, '', fdoc)
  }
  m.reply('Sukses Broadcast')
  }
  break
case 'join': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
  m.reply(mess.wait)
  var result = args[0].split('https://chat.whatsapp.com/')[1]
  await ichi.groupAcceptInvite(result).then((res) => m.reply(mess.done)).catch((err) => m.reply(global.fiturError))
  }
  break
case 'join2': case 'joinsewa': {
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
  var [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw 'Link invalid'
  var res = await ichi.groupAcceptInvite(code)
  expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
  m.reply(`Berhasil join grup ${res}${expired ? ` selama ${expired} hari` : ''}`)
  var chats = db.chats[res]
  if (!chats) chats = db.chats[res] = {}
  if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
  }
  break
case 'leave': {
  if (!isOwner) return m.reply(mess.botOwner)
  await ichi.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => m.reply(global.fiturError))
  }
  break
case 'block': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.updateBlockStatus(users, 'block').then((res) => m.reply(mess.done)).catch((err) => m.reply(global.fiturError))
  }
  break
case 'unblock': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.done)).catch((err) => m.reply(global.fiturError))
  }
  break
case 'setppbot': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!quoted) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  await ichi.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.done)
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.public = true
  m.reply('Sukses Mengubah Mode Bot Menjadi Publik')
  }
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.self = false
  m.reply('Sukses Mengubah Mode Bot Menjadi Self')
  }
  break
case 'eval': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }
  break

//Group Menu
case 'antilink': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antilink = true
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antilink = false
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'antiwame': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antiwame) return m.reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antiwame = true
  m.reply(`Antiwame Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antiwame) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antiwame = false
  m.reply(`Antiwame Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantiwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantiwame, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'antivirtex': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antivirtex) return m.reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antivirtex = true
  m.reply(`Antivirtex Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antivirtex) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antivirtex = false
  m.reply(`Antivirtex Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantivirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantivirtex, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'antiasing': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antiasing) return m.reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antiasing = true
  m.reply(`Antiasing Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antiasing) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antiasing = false
  m.reply(`Antiasing Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantiasing = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantiasing, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'antiviewone': case 'antiviewsone': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antiviewone) return m.reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antiviewone = true
  m.reply(`Antiviewone Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antiviewone) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antiviewone = false
  m.reply(`Antiviewone Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantiviewone = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantiviewone, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'nsfw': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].nsfw) return m.reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].nsfw = true
  m.reply(`Nsfw Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].nsfw) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].nsfw = false
  m.reply(`Nsfw Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsnsfw, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'event': case 'rpg': case 'game': case 'games': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].event) return m.reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].event = true
  m.reply(`${command} Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].event) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].event = false
  m.reply(`${command} Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsevent = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsevent, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'banchat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!m.isGroup) return m.reply(mess.group)
  global.db.chats[m.chat].isBanned = true
  m.reply(`Sekarang ${ichi.user.name} Tidak Aktif Di Grup ${groupName}`)
  }
  break
case 'unbanchat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!m.isGroup) return m.reply(mess.group)
  global.db.chats[m.chat].isBanned = false
  m.reply(`Sekarang ${ichi.user.name} Aktif Di Grup ${groupName}`)
  }
  break
case 'linkgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  let response = await ichi.groupInviteCode(m.chat)
  ichi.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break
case 'revoke': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  await ichi.groupRevokeInvite(from)
  m.reply(mess.done)
  }
  break
case 'kick': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di kick siapa??')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'add': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di add siapa??')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'promote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di promote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'demote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di demote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setname': case 'setsubject': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) throw 'Text ?'
  await ichi.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setdesc': case 'setdesk': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) throw 'Text ?'
  await ichi.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  await ichi.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.done)
  }
  break
case 'tagall': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
  for (let mem of participants) {
  teks += `>> @${mem.id.split('@')[0]}\n`
  }
  ichi.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
  }
  break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  ichi.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
  }
  break
case 'ephemeral': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Masukkan value enable/disable')
  if (args[0] === 'enable') {
  await ichi.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await ichi.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  }
  break
case 'group': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'close'){
  await ichi.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await ichi.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsgroup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'open'){
  await ichi.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await ichi.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttons, `Mode Edit Info 🔥`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break

//Maker Menu
case 'sticker': case 's': case 'stickergif': case 'sgif': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await ichi.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await ichi.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  global.db.users[m.sender].limit -= 1
  }
  break
case 'toimage': case 'toimg': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  ichi.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
  })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'tomp4': case 'tovideo': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
  await fs.unlinkSync(media)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'toaud': case 'toaudio': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'tomp3': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ichi.user.name}.mp3`}, { quoted : m })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'tovn': case 'toptt': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toPTT } = require('../lib/converter')
  let audio = await toPTT(media, 'mp4')
  ichi.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
  global.db.users[m.sender].limit -= 1
  }
  break
case 'togif': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'tourl': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(`*Media To Url 📠*\n\n*🔗 :* ${util.format(anu)}\n*📆 :* No Expired`)
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(`*Media To Url 📠*\n\n*🔗 :* ${util.format(anu.url)}\n*📏 :* ${util.format(anu.size)} KB\n*📆 :* No Expired`)
  }
  await fs.unlinkSync(media)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'emojimix': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw `Example : ${prefix + command} 😎+😭`
  m.reply(mess.wait)
  let [emoji1, emoji2] = text.split`+`
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
  for (let res of anu.results) {
  let encmedia = await ichi.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
  await fs.unlinkSync(encmedia)
  global.db.users[m.sender].limit -= 1
  }
  }
  break
case 'smeme': case 'stickermeme': case 'stickmeme': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  m.reply(mess.wait)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  arg = args.join(' ')
  mee = await ichi.downloadAndSaveMediaMessage(quoted)
  mem = await TelegraPh(mee)
  meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
  memek = await ichi.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(memek)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'memegen': case 'smeme2': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  m.reply(mess.wait)
  arg = args.join(' ')
  atas = arg.split('|')[0]
  bawah = arg.split('|')[1]
  let abeb = await ichi.downloadAndSaveMediaMessage(quoted)
  let abe = await TelegraPh(abeb)
  let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
  let mengmeme = await ichi.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(mengmeme)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'swm': case 'wm': case 'take': case 'colong': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  if (!text) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
  if (!text.includes('|')) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
  m.reply (mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await ichi.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  let media = await quoted.download()
  let encmedia = await ichi.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else {
  m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  }
  global.db.users[m.sender].limit -= 1
  }
  break
case 'emoji':case 'semoji':
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!q) return reply(`Example : ${prefix + command} 🗿`)
  let sem = [0,1,2,3,4,5,6,7,8,9,10,11]
  let semoji = sem[Math.floor(Math.random() * sem.length)]
  emoji.get(`${q}`).then(emoji => {
  teks = `${emoji.images[semoji].url}`
  ichi.sendImageAsSticker(m.chat, teks, m, { packname: global.packname, author: global.author })
  })
  global.db.users[m.sender].limit -= 1
  break

//Random Menu
case 'pinterest': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'wallpaper': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'quotesanime': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendButtonText(m.chat, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, global.ownerName, m)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'wikimedia': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw 'Masukkan Query Title'
  let wiki = await wikimedia(text)
  m.reply(mess.wait)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `📄 Title : ${result.title}
📬 Source : ${result.source}
🔗 Media Url : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break

//Downloader
case 'tiktok': case 'tiktokwm': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('tiktok')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  var result = await fetchJson(`https://zenzapis.xyz/downloader/tiktok?apikey=${global.zenzkey}&url=${q}`)
  ichi.sendMessage(m.chat, { video: { url: result.result.watermark }, mimetype: 'video/mp4', fileName: 'tiktok.mp4', caption: mess.done }, { quoted: m })
  global.db.users[m.sender].limit -= 5
  }
  break
case 'tiktoknowm': case 'tiktoknowatwatermark': {
  if (!isPrem) return m.reply(mess.prem)
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('tiktok')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  var result = await fetchJson(`https://zenzapis.xyz/downloader/tiktok?apikey=${global.zenzkey}&url=${q}`)
  ichi.sendMessage(m.chat, { video: { url: result.result.nowatermark }, mimetype: 'video/mp4', fileName: 'tiktok.mp4', caption: mess.done }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'tiktokmp3': case 'tiktokaudio': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('tiktok')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  var result = await fetchJson(`https://zenzapis.xyz/downloader/tiktok?apikey=${global.zenzkey}&url=${q}`)
  ichi.sendMessage(m.chat, { audio: { url: result.result.audio }, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3' }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'ytmp4': case 'ytvideo': case 'ytv': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  let { ytv } = require('../lib/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `---- Youtube Downloader -----
  
📄 Judul : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP4
📮 Resolusi : ${args[1] || '360p'}`
  ichi.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'ytmp3': case 'ytaudio': case 'yta': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  let { yta } = require('../lib/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `*------ Youtube Downloader -----*

📄 Title : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP3
📮 Resolusi : ${args[1] || '128kbps'}`
  ichi.sendImage(m.chat, media.thumb, caption, m)
  ichi.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'yts': case 'ytsearch': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  if (!text) throw `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '*---- Data Ditemukan ----*\n\n Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}\n\n─────────────────\n\n`
  }
  ichi.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break
case 'play':
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw `Example : ${prefix + command} story wa anime`
  m.reply(mess.wait)
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: `*----- DATA DITEMUKAN -----*
  
*📄 Title :* ${anu.title}
*⌚ Duration :* ${anu.timestamp}
*👁️ Viewers :* ${anu.views}
*📤 Upload :* ${anu.ago}
*👨‍🎤 Channel :* ${anu.author.url}
*🔗 Url :* ${anu.url}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
  global.db.users[m.sender].limit -= 1
  break

case 'alquran': {
  if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
  if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
  var res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
  var txt = `*🇸🇦️ Arab* : ${res.result.data.text.arab}
*🇬🇧 English* : ${res.result.data.translation.en}
*🇮🇩 Indonesia* : ${res.result.data.translation.id}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
  m.reply(txt)
  ichi.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
  }
  break
case 'tafsirsurah': {
  if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
  if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
  var res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
  var txt = `*👳‍♂️ Tafsir Surah*
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
  m.reply(txt)
  }
  break

//Menu nya Kack >_<
case 'menu': case 'help': case 'command': {
  let { simplemenu } = require('../storage/confat.js')
  ichi.sendButtonGif(m.chat, menuu+simplemenu(prefix), global.ownerName, global.thumbnail, butmenu, global.thumb)
  }
  break
case 'ownermenu': case 'ownercmd': {
  let { ownermenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+ownermenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'groupmenu': case 'groupcmd': {
  var { groupmenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+groupmenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'storemenu': case 'storecmd': {
  var { storemenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+storemenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'rpgmenu': case 'rpgcmd': {
  var { rpgmenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+rpgmenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'makermenu': case 'makercmd': {
  var { makermenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+makermenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'downloadmenu': case 'downloadcmd': {
  var { downloadmenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+downloadmenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'ephotomenu': case 'ephotocmd': {
  var { ephotomenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+ephotomenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'photooxymenu': case 'photooxycmd': {
  var { photooxymenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+photooxymenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'islamimenu': case 'islamicmd': {
  var { islamimenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+islamimenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'randommenu': case 'randomcmd': {
  var { randommenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+randommenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'gachamenu': case 'gachacmd': {
  var { gachamenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+gachamenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'asupanmenu': case 'asupancmd': {
  var { asupanmenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+asupanmenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'randomimagemenu': case 'randomimagecmd': {
  var { randomimagemenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+randomimagemenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'randomanimemenu': case 'randomanimecmd': {
  var { randomanimemenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+randomanimemenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'wallpapermenu': case 'wallpapercmd': {
  var { wallpapermenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+wallpapermenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'nsfwmenu': case 'nsfwcmd': {
  var { nsfwmenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+nsfwmenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'othermenu': case 'othercmd': {
  var { othermenu } = require('../storage/confat.js')
  ichi.sendButtonImg(m.chat, menu+othermenu(prefix), global.ownerName, global.thumb, butmenu, global.thumb)
  }
  break
case 'allmenu': case 'allcmd': {
  let { ownermenu, groupmenu, storemenu, rpgmenu, makermenu, downloadmenu, ephotomenu, photooxymenu, islamimenu, randommenu, gachamenu, asupanmenu, randomimagemenu, randomanimemenu, wallpapermenu, nsfwmenu, othermenu } = require('../storage/confat.js')
  ichi.sendButtonGif(m.chat, menuu+ownermenu(prefix)+'\n'+groupmenu(prefix)+'\n'+storemenu(prefix)+'\n'+rpgmenu(prefix)+'\n'+makermenu(prefix)+'\n'+downloadmenu(prefix)+'\n'+ephotomenu(prefix)+'\n'+photooxymenu(prefix)+'\n'+islamimenu(prefix)+'\n'+randommenu(prefix)+'\n'+gachamenu(prefix)+'\n'+asupanmenu(prefix)+'\n'+randomimagemenu(prefix)+'\n'+randomanimemenu(prefix)+'\n'+wallpapermenu(prefix)+'\n'+nsfwmenu(prefix)+'\n'+othermenu(prefix), global.ownerName, global.thumbnail, butmenu, global.thumb)
  }
  break

//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return m.reply(`${err}`)
  if (stdout) return m.reply(stdout)
  })
  }
  }
  switch (command) {
//Privasi
case 'report': case 'lapor': case 'repport': case 'request': case 'req':
  if(!text) return m.reply('Yang Mau Dilaporin Apaan?')
  const laporan = body.slice(7)
  if (args.length > 300) return m.reply('Maaf Teks Terlalu Panjang, Maksimal 300 Teks')
  stod = `${m.sender}`
  const lapor = `*Pesan From @${stod.split('@')[0]}*\nPesan : ${laporan}`
  var options = {
  text: lapor,
  contextInfo: {mentionedJid: [stod]},
  }
  ichi.sendMessage(`${global.ownerNumber}@s.whatsapp.net`, options, text, {quoted: m})
  ichi.sendMessage(`6285609233482@s.whatsapp.net`, options, text, {quoted: m})
  m.reply('Laporan Sudah Dikirim Ke Owner Dan Creator, Terima Kasih 🙏')
  break
case 'creator':
  global.creator = ['6285609233482']
  ichi.sendContact(m.chat, global.creator, m)
  break
case 'sc': case 'sourcecode': case 'script': {
  let imgsc = await getBuffer('https://telegra.ph/file/b9f50bedf0c65e517ea14.jpg')
  let butsc = [
  {urlButton: {displayText: 'Base 🏘️',url: 'https://github.com/NzrlAfndi/Ichigo-Kurosaki'}}, 
  {urlButton: {displayText: 'Recode 🏘️',url: 'https://www.youtube.com'}}
  ]
  ichi.sendButtonImg(m.chat, 'Klik Button Dibawah Untuk Mengetahui Source Code Script Ini', global.ownerName, imgsc, butsc, global.thumb)
  }
  break
case 'tqto': case 'thanksto': {
  let imgtq = await getBuffer('https://telegra.ph/file/86735743a38ed0f338a69.jpg')
  let txttq = `*Big Thanks To 🍒*\n\nAdiwajshing :\nhttps://github.com/Adiwajshing/Baileys\nNurutomo :\nhttps://github.com/Nurutomo\nIstikmal :\nhttps://github.com/BochilGaming\nDika Ardianta :\nhttps://github.com/DikaArdnt\nFandyyy :\nhttps://github.com/NzrlAfndi\nFerdi :\nhttps://github.com/FERDIZ-afk\nFatih Arridho :\nhttps://github.com/FatihArridho\nErlan :\nhttps://github.com/ERLANRAHMAT\nZhwzein :\nhttps://github.com/Zhwzein\nPenyedia Module`
  let butsc = [ {urlButton: {displayText: 'Subscribe 💫️',url: 'https://www.youtube.com/c/FBOTZYT'}} ]
  ichi.sendButtonImg(m.chat, txttq, global.ownerName, imgtq, butsc, global.thumb)
  }
  break

case 'premadd': case 'addprem': case 'addpremium': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  try {
  let premium
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  else who = m.chat
  var user = global.db.users[who]
  if (!who) return m.reply('Tag User Yang Ingin Dijadikan Premium')
  var txtprem = text.replace('@' + who.split`@`[0], '')
  if (!txtprem) return m.reply('Masukkan Angka Yang Mewakili Jumlah Hari')
  if (isNaN(txtprem)) return m.reply(`Khusus Angka!\n\nexample:\n${prefix + command} @${who.split("@")[0]} 7`)
  var jumlahHari = 86400000 * txtprem
  var isnow = new Date() * 1
  if (isnow < user.premiumTime) user.premiumTime += jumlahHari
  else user.premiumTime = isnow + jumlahHari
  user.premium = true
  user.limit = limitAwal.prem
  var ssprem = `*Premium Add Sukses ☑️*

📛 Nama : @${who.split("@")[0]}
⏰ Hitung Mundur : ${msToDate(user.premiumTime - isnow)}`
  ichi.sendMessage(m.chat, { text: ssprem, mentions: [who] }, { quoted : m })
  } catch (e) {
  m.reply('Gagal Menambahkan User Sebagai Premium, Mungkin User Belum Pernah Berinteraksi Dengan Bot')
  }
  }
  break
case 'cekprem': case 'cekpremium': {
  if (isOwner) return m.reply('Lu Tuh Owner Jadi Otomatis Dah Premium 😒')
  if (!db.users[m.sender].premium) return m.reply('Kamu Bukan User Premium')
  var isnow = new Date() * 1
  m.reply(`*⌚ Waktu Premium :*\n\n📆 ${msToDate(global.db.users[m.sender].premiumTime - isnow)}`)
  }
  break
case 'premdel': case 'delprem': case 'delpremium': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
  else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  var user = global.db.users[who]
  if (global.db.users[who].premium === false) return m.reply('User Bukan Premium')
  try {
  let premiumm 
  if (!who) return m.reply('Tag User Yang Ingin Di Hilangkan Premiumnya')
  user.premium = false
  user.premiumTime = 0
  user.limit = limitAwal.free
  m.reply(mess.done)
  } catch (e) {
  m.reply('Gagal Menghapus User Dari Premium, Mungkin User Belum Pernah Berinteraksi Dengan Bot')
  }
  }
  break

case 'sewaadd': case 'addsewa': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!m.isGroup) return m.reply(mess.group)
  if (!args[0] || isNaN(args[0])) return m.reply(`Masukkan Angka Mewakili Jumlah Hari\n*Example :* ${prefix + command} 30`)
  let penyewa
  if (m.isGroup) who = args[1] ? args[1] : m.chat
  else who = args[1]
  var jumlahHari = 86400000 * args[0]
  var isnow = new Date() * 1
  if (isnow < global.db.chats[who].expired) global.db.chats[who].expired += jumlahHari
  else global.db.chats[who].expired = isnow + jumlahHari
  m.reply(`Berhasil menetapkan hari kadaluarsa untuk Grup ini selama ${args[0]} hari.\n\nHitung Mundur : ${msToDate(global.db.chats[who].expired - isnow)}`)
  }
  break
case 'ceksewa': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!db.chats[m.chat].expired) return m.reply('Group Ini Belum Terdaftar Di Daftar Sewa')
  var isnow = new Date() * 1
  m.reply(`*⌚ Waktu Sewa :*\n\n📆 ${msToDate(global.db.chats[m.chat].expired - isnow)}`)
  }
  break
case 'sewadel': case 'delsewa': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!db.chats[m.chat].expired) return m.reply('Group Ini Belum Terdaftar Di Daftar Sewa')
  if (!m.isGroup) return m.reply(mess.group)
  global.db.chats[m.chat].expired = 0
  m.reply(mess.done)
  }
  break

case 'styletext': case 'style': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  let { styletext } = require('../lib/scraper')
  if (!text) return m.reply('Text Nya Mana?')
  let anu = await styletext(text)
  let teks = `🔑 Keyword : ${text}\n\nKlik Baca Selengkapnya Untuk Melihat Result\n${readmore}\n`
  for (let i of anu) {
  teks += `📛 *${i.name}* : ${i.result}\n`
  }
  m.reply(teks)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'fiersa': case 'fiersabersari': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var fie = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kata-kata/fiersa-besari.txt')
  var rsa = await fie.text()
  var ber = rsa.split('\n')
  var sari = ber[Math.floor(Math.random() * ber.length)]
  var btnfie = [{ buttonId: `${command}`, buttonText: { displayText: 'Fiersa Bersari' }, type: 1 }]
  await ichi.sendButtonText(m.chat, btnfie, sari, global.ownerName, m)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'senja': case 'katasenja': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var ka = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kata-kata/senja.txt')
  var ta = await ka.text()
  var sen = ta.split('\n')
  var ja = sen[Math.floor(Math.random() * sen.length)]
  var btnfiersa = [{ buttonId: `${command}`, buttonText: { displayText: 'Kata Senja' }, type: 1 }]
  await ichi.sendButtonText(m.chat, btnfiersa, ja, global.ownerName, m)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'bucin': case 'katabucin': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var bu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/bucin.json')
  var cin = bu[Math.floor(Math.random() * bu.length)]
  var btnbucin = [{ buttonId: `${command}`, buttonText: { displayText: 'Kata Bucin' }, type: 1 }]
  await ichi.sendButtonText(m.chat, btnbucin, cin, global.ownerName, m)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'dilan': case 'nyindir': case 'ngawur': case 'gombal': case 'motivasi': case 'taugasih': case 'bacot': case 'katailham': case 'quotesjawa': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var bu = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Random/${command}.json`)
  var cin = bu[Math.floor(Math.random() * bu.length)]
  var btnbucin = [{ buttonId: `${command}`, buttonText: { displayText: 'Next Result' }, type: 1 }]
  await ichi.sendButtonText(m.chat, btnbucin, cin, global.ownerName, m)
  global.db.users[m.sender].limit -= 1
  }
  break
case 'stalkgh': case 'ghstalk': case 'githubstalk': {
  if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nExample : ${prefix + command} NzrlAfndi`
  y = await fetchJson(`https://api.github.com/users/${text}`)
  let teks = `*Stalk Github*\n\n📛 Username : ${y.login}\n🆔 Id : ${y.id}\n🐸 Node Id : ${y.node_id}\n🆎 Type : ${y.type}\n📋 Name : ${y.name}\n🏢 Company : ${y.company}\n📱 Blog : ${y.blog}\n🚩 Location : ${y.location}\n📧 Email : ${y.email}\n💌 Bio : ${y.bio}\n🌐 Public Repo(s) : ${y.public_repos}\n🌐 Public Gist(s) : ${y.public_gists}\n🏩 Followers : ${y.followers}\n🏩 Following : ${y.following}\n🗃️ Created At : ${moment(y.created_at).format('DD/MM/YYYY')}\n🗃️ Updated At : ${moment(y.updated_at).format('DD/MM/YYYY')}`
  let ghs = [{"urlButton": {"displayText": `Profile`,"url": `https://github.com/${y.login}`}}]
  buf = await getBuffer(y.avatar_url)
  ichi.sendButtonImg(m.chat, teks, global.ownerName, buf, ghs, global.thumb)
  }
  break
case 'inspect': {
  if (!args[0]) return m.reply("Linknya?")
  let linkRegex = args.join(" ")
  let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
  if (!coded) return m.reply("Link Invalid")
  ichi.query({
  tag: "iq",
  attrs: {
  type: "get",
  xmlns: "w:g2",
  to: "@g.us"
  },
  content: [{ tag: "invite", attrs: { code: coded } }]
  }).then(async(res) => { 
  tekse = `     「 Group Link Inspector 」
🆔 ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
📛 Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
📛 Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
📛 Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
👦 Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
📆 Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
👥 Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
📋 Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
📋 Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
📋 Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
${readmore}📋 Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
  try {
  pp = await ichi.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
  } catch {
  pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
  }
  ichi.sendMessage(m.chat, { image: { url: pp }, caption: tekse, mentions: await parseMention(tekse) }, { quoted: m })
  //ichi.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await ichi.parseMention(tekse) })
  })
  }
  break

//Nsfw Menu
case 'ahegao': case 'ass': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'femdom': case 'foot': case 'gifs': case 'glasses': case 'hentai': case 'manga': case 'megumin': case 'neko': case 'neko2': case 'nekonime': case 'orgy': case 'tentacles': {
  if (!isPrem) return m.reply(mess.prem)
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!m.isGroup) return m.reply(mess.group)
  if (!db.chats[m.chat].nsfw) return m.reply(global.fiturOff)
  m.reply(mess.wait)
  var nafsu = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/nsfw/${command}.json`)
  var nsfw = nafsu[Math.floor(Math.random() * nafsu.length)]
  let butnsfw = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: nsfw }, caption: 'Istri Kartun', buttons: butnsfw }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break

//Gacha Menu
case 'cecan': case 'cecan2': case 'cogan': case 'china': case 'indonesia': case 'japan': case 'korea': case 'malaysia': case 'thailand': case 'vietnam': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var cocan = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Cecan/${command}.json`)
  var cecan = cocan[Math.floor(Math.random() * cocan.length)]
  let butcecan = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: cecan }, caption: 'Berhentilah Berharap :)', buttons: butcecan }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break

//Random Image
case 'darkjokes': case 'aesthetic': case 'ryujin': case 'pubg': case 'kpop': case 'rose': case 'hekel': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var cocan = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Random%20Image/${command}.json`)
  var cecan2 = cocan[Math.floor(Math.random() * cocan.length)]
  let butcogan = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: cecan2 }, caption: 'No Comment 🌟', buttons: butcogan }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break

//Random Anime
case 'akira': case 'akiyama': case 'asuna': case 'elaina': case 'kurumi': case 'loli': case 'miku': case 'nezuko': case 'tsunade': case 'waifu': case 'waifu2': case 'yuki': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var cocan = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Random%20Anime/${command}.json`)
  var cecan2 = cocan[Math.floor(Math.random() * cocan.length)]
  let butanime = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: cecan2 }, caption: 'Istri Kartun', buttons: butanime }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break

//Wallpaper Menu
case 'cyberspace': case 'mountain': case 'technology': case 'programming': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var cocan = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Wallpaper/${command}.json`)
  var cecan2 = cocan[Math.floor(Math.random() * cocan.length)]
  let butwall = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: cecan2 }, caption: `Wallpaper ${command}`, buttons: butwall }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break

//Asupan
case 'euni': case 'natajadeh': case 'asupan': case 'geayubi': case 'rikagusriani': case 'santuy': case 'ukhty': {
  if (!isPrem) return m.reply(mess.prem)
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var asu = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Dosa/${command}.json`)
  var asupan = asu[Math.floor(Math.random() * asu.length)]
  let butasu = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { video: { url: asupan }, mimetype: 'video/mp4', fileName: 'Asupan.mp4', caption: 'Tobat Broo', buttons: butasu }, { quoted: m })
  global.db.users[m.sender].limit -= 1
  }
  break

case 'cerpen': {
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  let { cerpen } = require('../lib/scraper')
  if (!text) {
  return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} cinta*`)
  } else try {
  m.reply(mess.wait)
  var result = await cerpen(text)
  //result = anu[Math.floor(Math.random() * anu.length)]
  var rescer = `Request By ${pushname}\n
📠 Title : ${result.title}
✍️ Author : ${result.author}
💌 Kategori : ${result.kategori}
🍒 Cerita : ${result.cerita}`
  m.reply(rescer)
  } catch (err) {
  m.reply(`Cerita Pendek Dengan Kata Kunci ${text} Tidak Tersedia`)
  }
  global.db.users[m.sender].limit -= 1
  }
  break
  
//Islami
case 'kisahnabi': {
  if (!text) return m.reply(`Mau Kisah Nabi Siapa?\n\nList Nama Nabi :\n1. adam\n2. idris\n3. nuh\n4. hud\n5. saleh\n6. ibrahim\n7. luth\n8. ismail\n9. ishaq\n10. yaqub\n11. yusuf\n12. ayub\n13. syuaib\n14. musa\n15. harun\n16. dzulkifli\n17. daud\n18. sulaiman\n19. ilyas\n20. ilyasa\n21. yunus\n22. zakaria\n23. yahya\n24. musa\n25. muhammad\n\nExample: ${prefix+command} Muhammad`)
  var tipe = (args[0] || '').toLowerCase()
  switch (tipe) {
   case 'adam': case 'idris': case 'nuh': case 'hud': case 'saleh': case 'ibrahim': case 'luth': case 'ismail': case 'ishaq': case 'yaqub': case 'yusuf': case 'ayub': case 'syuaib': case 'musa': case 'harun': case 'dzulkifli': case 'daud': case 'sulaiman': case 'ilyas': case 'ilyasa': case 'yunus': case 'zakaria': case 'yahya': case 'musa': case 'muhammad': 
    m.reply(mess.wait)
    let kisah = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Islami/${text}.json`)
    resNabi = `Kisah Nabi ${text}

📛 Nama : ${kisah.name}
📆 Kelahiran : ${kisah.thn_kelahiran}
🧓 Usia : ${kisah.usia}
🏜️ Tempat : ${kisah.tmp}
📕 Cerita : ${kisah.description}
`
    ichi.sendMessage(m.chat, { image: { url: `${kisah.image_url}` }, caption: resNabi }, { quoted: m })
   }
  }
  break
case 'bacaansolat': {
  if (!text) return m.reply(`Mau Bacaan Solat Apa?\n\nList Bacaan Solat :\n1. al-fatihah\n2. iftitah\n3. ruku\n4. sujud\n5. tasyahudawal\n6. tasyahudakhir\n7. salam\n\nExample: ${prefix+command} al-fatihah`)
  var tipe = (args[0] || '').toLowerCase()
  switch (tipe) {
   case 'al-fatihah': case 'iftitah': case 'ruku': case 'sujud': case 'tasyahudawal': case 'tasyahudakhir':
    let baca = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Bacaansolat/${text}.json`)
    let resbaca = `Bacaan Solat ${text}
  
📛 Nama : ${baca.name}
👳 Arab : ${baca.arabic}
🔤 Latin : ${baca.latin}
🇮🇩 Indonesia : ${baca.terjemahan}
`
   m.reply(resbaca)
   }
  }
  break
case 'niatsolat': {
  if (!text) return m.reply(`Mau Niat Solat Apa?\n\nList Niat Solat :\n1. subuh\n2. dzuhur\n3. ashar\n4. maghrib\n5. isya\n\nExample: ${prefix+command} subuh`)
  var tipe = (args[0] || '').toLowerCase()
  switch (tipe) {
  case 'subuh': case 'dzuhur': case 'ashar': case 'maghrib': case 'isya':
   m.reply(mess.wait)
   let niat = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Niatsolat/${text}.json`)
   let resniat = `Niat Solat ${text}
  
📛 Nama : ${niat.name}
👳 Arab : ${niat.arabic}
🔤 Latin : ${niat.latin}
🇮🇩 Indonesia : ${niat.terjemahan}
`
   m.reply(resniat)
   }
  }
  break
case 'ceramah': {
  if (!text) return m.reply(`Mau Ceramah Dari Siapa?\n\nList Ustadz :\n1. abdulsomad\n2. adihidayat\n3. felixsiauw\n4. khalidbasalamah\n\nExample: ${prefix+command} abdulsomad`)
  var tipe = (args[0] || '').toLowerCase()
  switch (tipe) {
  case 'abdulsomad': case 'adihidayat': case 'felixsiauw': case 'khalidbasalamah': 
   m.reply(mess.wait)
   let ceramah = await fetchJson(`https://raw.githubusercontent.com/NzrlAfndi/Databasee/main/Ceramah/${text}.json`)
   let rescera = `Ceramah Dari *${ceramah.name}*

${ceramah.ceramah}`
   m.reply(rescera)
   }
  }
  break

//Store Menu
case 'list': {
  if (!m.isGroup) return m.reply(mess.group)
  if (db_respon_list.length === 0) return m.reply('Tidak Ada List Message Di Dalam Database')
  if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply('Tidak Ada List Message Yang Terdaftar Untuk Grup Ini')
  var sender = m.sender
  var arr_rows = [];
  for (let x of db_respon_list) {
  if (x.id === from) {
  arr_rows.push({
  title: x.key,
  rowId: x.key
  })
  }
  }
  var listMsg = {
  text: `*Hai.. @${sender.split("@")[0]} 👋*\n\n*Ini Adalah Daftar List Yang Tersedia Untuk Group ${groupName}*\n\n*Gunakan Dengan Bijak!*`,
  buttonText: 'Klik Disini 👋',
  footer: `${groupName} || ${global.ownerName}`,
  mentions: [sender],
  sections: [{
  title: groupName, rows: arr_rows
  }]
  }
  ichi.sendMessage(from, listMsg)
  }
  break
case 'addlist': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner) return m.reply(mess.admin)
  var sender = m.sender
  var args1 = q.split("@")[0]
  var args2 = q.split("@")[1]                
  if (!q.includes("@")) return m.reply(`Gunakan Dengan Cara ${command} *key@response*\n\nContoh :\n\n${command} Creator@Nzrl Afndi`)
  if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List Dengan Key : *${args1}* Sudah Tersedia Di Group Ini.`)
  if (/image/.test(mime)) {
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  addResponList(m.chat, args1, args2, true, url, db_respon_list)
  m.reply(`Sukses set list message dengan key : *${args1}*`)
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  addResponList(from, args1, args2, false, '-', db_respon_list)
  m.reply(`Sukses Set List Message Dengan Key : *${args1}*`)
  }
  }
  break
case 'dellist': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner) return m.reply(mess.admin)
  var sender = m.sender
  if (db_respon_list.length === 0) return m.reply('Tidak Ada List Message Di Dalam Database')
  if (!q) return m.reply(`Gunakan Dengan Cara ${command} *key*\n\n_Contoh_\n\n${command} Creator`)
  if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List Dengan Key *${q}* Tidak Tersedia Di Dalam Database!`)
  delResponList(from, q, db_respon_list)
  m.reply(`Sukses Delete List Message Dengan Key *${q}*`)
  }
  break
case 'updatelist': case 'update': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner) return m.reply(mess.admin)
  var sender = m.sender
  var args1 = q.split("@")[0]
  var args2 = q.split("@")[1]
  if (!q.includes("@")) return m.reply(`Gunakan Dengan Cara ${command} *key@response*\n\nContoh :\n\n${command} Creator@Nzrl Afndi`)
  if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Maaf, Key *${args1}* Belum Terdaftar Di Group Ini`)
  if (/image/.test(mime)) {
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  updateResponList(from, args1, args2, true, url, db_respon_list)
  m.reply(`Sukses update list message dengan key : *${args1}*`)
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  updateResponList(from, args1, args2, false, '-', db_respon_list)
  m.reply(`Sukses Update List Dengan Key *${args1}*`)
  }
  }
  break

//Photooxy & ephotomenu
case '3dnature': case 'bevel': case 'burnpaper': case 'quotesgrass': case 'stars': case 'flaming': case 'romance': case 'gerbang': case 'fur': case 'funnycup':
  if (!isPrem) return m.reply(mess.prem)
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply(`Masukkan Teks\nExample: ${prefix+command} Hello`)
  m.reply(mess.wait) 
  getpoto = await getBuffer(`https://api.violetics.pw/api/photooxy/${command}?apikey=beta&text=${text}`) 
  ichi.sendMessage(m.chat, { image: getpoto, caption: mess.done }, { quoted: m }) 
  global.db.users[m.sender].limit -= 1
  break
case '3d-underwater': case '3dtext-pig': case '3dvalentine-cards': case 'anonymous-neon': case 'advanced-glow': case 'art-shader': case 'angels-wings':
  if (!isPrem) return m.reply(mess.prem)
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if(!text) return m.reply(`Masukkan Teks\nExample: ${prefix+command} Hello`)
  m.reply(mess.wait) 
  getphoto = await getBuffer(`https://api.violetics.pw/api/ephoto360/${command}?apikey=beta&text=${text}`) 
  ichi.sendMessage(m.chat, { image: getphoto, caption: mess.done }, { quoted: m}) 
  global.db.users[m.sender].limit -= 1
  break

//Rpg
case 'profile': case 'profil':
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  else who = m.sender
  try {
  ppusew = await ichi.profilePictureUrl(who, 'image')
  } catch {
  ppusew = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  try {
  var ppuser = await getBuffer(ppusew)
  var user = global.db.users[who]
  var str = `*Profile @${who.split('@')[0]}*
  
📛 Nama : *@${who.split('@')[0]}*
☎️ Nomor : *${who.split('@')[0]}*
${emot.exp} Exp : *${user.exp}*
${emot.limit} Limit : *${isOwner? `${global.limitAwal.prem} Limit` : user.premium? `${global.limitAwal.prem} Limit` : `${user.limit}/${global.limitAwal.free}`}*
${emot.level} Level : *${user.level}*

*Histori*
*🌄 Hadiah Harian :* 
${user.lastday > 0? 'Terakhir Claim : ' + new Date(user.lastday).toLocaleString() : 'Belum Claim ❎'}
*🌃 Hadiah Mingguan :* 
${user.lastweekly > 0? 'Terakhir Claim : ' + new Date(user.lastweekly).toLocaleString() : 'Belum Claim ❎'}
*🎑 Hadiah Bulanan :* 
${user.lastmonthly > 0? 'Terakhir Claim : ' + new Date(user.lastmonthly).toLocaleString() : 'Belum Claim ❎'}
*💸 Gajian :*
${user.lastgajian > 0? 'Terakhir Claim : ' + new Date(user.lastgajian).toLocaleString() : 'Belum Claim ❎'}
`
  let buttonprof = [{buttonId: `thanks`, buttonText: {displayText: `${global.ownerName}`}, type: 1}]
  ichi.sendMessage(m.chat, { image: ppuser, caption: str, buttons: buttonprof , mentions: [who]}, { quoted: m})
  global.db.users[m.sender].limit -= 1
  } catch (e) {
  m.reply('Gagal Mendapatkan Profile, Mungkin User Belum Pernah Berinteraksi Dengan Bot')
  }
  break

case 'daily': case 'harian': {
  var cooldown = 86400000
  var user = global.db.users[m.sender]
  var __timers = (new Date - user.lastday)
  var _timers = (cooldown - __timers)
  var timers = msToDate(_timers) 
  var exp = 9999
  var money = 4999
  var potion = 5
  var limit = 2
  if (new Date - user.lastday > cooldown) {
  var txtrpg = `Kamu Sudah Mengclaim Dan Mendapatkan *${exp}* Exp ${emot.exp}, *${money}* Money ${emot.money}, *${limit}* Limit ${emot.limit}, Dan *${potion}* Potion ${emot.potion}`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
  user.exp += exp
  user.money += money
  user.potion += potion
  user.limit += limit
  user.lastday = new Date * 1
  } else 
  var txtrpg = `Silahkan Tunggu Selama\n*⏰ ${timers}*\nUntuk Bisa Mengclaim Kembali`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
  }
  break
case 'weekly': case 'mingguan': {
  var cooldown = 604800000
  var user = global.db.users[m.sender]
  var __timers = (new Date - user.lastweekly)
  var _timers = (cooldown - __timers)
  var timers = msToDate(_timers) 
  var exp = 19999
  var money = 9999
  var potion = 10
  var limit = 5
  if (new Date - user.lastweekly > cooldown) {
  var txtrpg = `Kamu Sudah Mengclaim Dan Mendapatkan *${exp}* Exp ${emot.exp}, *${money}* Money ${emot.money}, *${limit}* Limit ${emot.limit}, Dan *${potion}* Potion ${emot.potion}`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
  user.exp += exp
  user.money += money
  user.potion += potion
  user.limit += limit
  user.lastweekly = new Date * 1
  } else 
  var txtrpg = `Silahkan Tunggu Selama\n*⏰ ${timers}*\nUntuk Bisa Mengclaim Kembali`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
  }
  break
case 'monthly': case 'bulanan': {
  var cooldown = 2592000000
  var user = global.db.users[m.sender]
  var __timers = (new Date - user.lastmonthly)
  var _timers = (cooldown - __timers)
  var timers = msToDate(_timers)
  var money = 49999
  var exp = 50000
  var potion = 10
  var mythic = 3
  var legendary = 1
  var limit = 10
  if (new Date - user.lastmonthly > cooldown) {
  var txtrpg = `Kamu Sudah Mengclaim Dan Mendapatkan *${exp}* Exp ${emot.exp}, *${money}* Money ${emot.money}, *${limit}* Limit ${emot.limit}, Dan *${potion}* Potion ${emot.potion}`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
  user.money += money
  user.exp += exp
  user.potion += potion
  user.mythic += mythic
  user.limit += limit
  user.lastmonthly = new Date * 1
  } else 
  var txtrpg = `Silahkan Tunggu Selama\n*⏰ ${timers}*\nUntuk Bisa Mengclaim Kembali`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
  }
  break
case 'gajian': {
  var cooldown = 2700000
  var user = global.db.users[m.sender]
  var __timers = (new Date - user.lastgajian)
  var _timers = (cooldown - __timers)
  var timers = clockString(_timers) 
  var money = 4999
  if (new Date - user.lastgajian > cooldown) {
  var txtrpg = `Kamu Sudah Mengclaim Dan Mendapatkan *${money}* Money ${emot.money}`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
  user.money += money
  user.lastgajian = new Date * 1
  } else 
  var txtrpg = `Silahkan Tunggu\n*⏰ ${timers}*\nUntuk Bisa Mengclaim Kembali`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
  }
  break
case 'bansos': case 'korupsi':
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!m.isGroup) return m.reply(mess.group)
  var cooldown = 86400000
  var korup = 3000000
  var user = global.db.users[m.sender]
  var __timers = (new Date - user.lastbansos)
  var _timers = (cooldown - __timers)
  var timers = msToDate(_timers)
  var randomaku = `${Math.floor(Math.random() * 101)}`
  var randomkamu = `${Math.floor(Math.random() * 81)}`
  var jokowi = (randomaku * 1)
  var prabowo = (randomkamu * 1)
  bansosa = await getBuffer ('https://telegra.ph/file/5ab346324feb5067e8325.jpg')
  bansosb = await getBuffer ('https://telegra.ph/file/bccaf797d7acec0fd72ed.jpg')
  bansosc = await getBuffer ('https://telegra.ph/file/0977ac47f09668031e3f2.jpg')
  var user = global.db.users[m.sender]
  if (new Date - user.lastbansos > 86400000) {
  if (jokowi > prabowo) {
  var btnbansos = [{"quickReplyButton": {"displayText": "Profile 👦","id": `profile`}}]
  ichi.sendButtonImg(m.chat, `Kamu Tertangkap Setelah Kamu Korupsi Dana Bansos🕴️💰,  Dan Kamu Harus Membayar Denda 3 Juta Rupiah💵`, `© ${global.ownerName}`, bansosa, btnbansos, global.thumb)
  user.money -= korup
  user.lastbansos = new Date * 1
  } else if (jokowi < prabowo) {
  user.money += korup
  var btnbansos = [{"quickReplyButton": {"displayText": "Profile 👦","id": `profile`}}]
  ichi.sendButtonImg(m.chat, `Kamu Berhasil Korupsi Dana Bansos🕴️💰,  Dan Kamu Mendapatkan 3 Juta Rupiah💵`, `© ${global.ownerName}`, bansosb, btnbansos, global.thumb)
  user.lastbansos = new Date * 1
  } else {
  var btnbansos = [{"quickReplyButton": {"displayText": "Profile 👦","id": `profile`}}]
  ichi.sendButtonImg(m.chat, `Sorry Gan Lu Ga Berhasil Korupsi Bansos Dan Tidak Masuk Penjara Karna Kamu *Melarikan Diri🏃*`, `© ${global.ownerName}`, bansosc, btnbansos, global.thumb)
  user.lastbansos = new Date * 1
  }
  } else m.reply(`Kamu Sudah Melakukan Korupsi Bansos 💰 Dan Kamu Harus Menunggu Selama\n*⏰ ${timers}*\nAgar Bisa Korupsi Dana Bansos Kembali`)
  user.limit -= 10
  break
case 'heal': {
  if (!global.db.chats[m.chat].event) return m.reply(global.fiturOff)
  if (!m.isGroup) return m.reply(mess.group)
  var user = global.db.users[m.sender]
  if (user.health >= 100) return m.reply(`Nyawa ${emot.health} Kamu Sudah Full`)
  let heal = 40 + (user.cat * 4)
  var count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
  if (user.potion < count) return m.reply(`Potion ${emot.potion} Kamu Tidak Cukup, Kamu Hanya Memiliki *${user.potion}* ${emot.potion} Potion\nGunakan ${prefix + command}buy potion ${count - user.potion} Untuk Membeli ${emot.potion} Potion`)
  user.potion -= count * 1
  user.health += heal * count
  var txtrpg = `Sukses Menggunakan ${count} ${emot.potion} Potion`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
  }
  break
case 'slot':
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!args[0] || isNaN(args[0])) return m.reply(`Pengunaan:\n${prefix + command} <angka>\n\nContoh :\n${prefix + command} 100\nartinya kamu bertaruh 100 Money.\n\n*JACKPOT:* taruhan kamu digandakan\n*Kurang beruntung:* +1 Money\n*Kalah:* taruhan kamu diambil`)
  var taruhan = parseInt(args[0])
  var user = global.db.users[m.sender]
  if (user.money < 1000) return m.reply('Minimal $1000 Untuk Memulai Slot')
  var emojis = ["🏆","🏅","💸"]
  var fa = Math.floor(Math.random() * emojis.length)
  var nd = Math.floor(Math.random() * emojis.length)
  var yy = Math.floor(Math.random() * emojis.length)
  ga = [],
  nt = [],
  en = []
  for (let i = 0; i < 3; i++) {
  ga[i] = emojis[fa]
  fa++
  if (fa == emojis.length) fa = 0
  }
  for (let i = 0; i < 3; i++) {
  nt[i] = emojis[nd]
  nd++
  if (nd == emojis.length) nd = 0
  }
  for (let i = 0; i < 3; i++) {
  en[i] = emojis[yy]
  yy++
  if (yy == emojis.length) yy = 0
  }
  let end
  if (fa == nd && nd == yy) {
  end = `JACKPOT! 🥳 *+${taruhan * 2} Money*` 
  user.money += taruhan * 2
  } else if (fa == nd || fa == yy || nd == yy) {
  end = `Kurang beruntung 👍 *+1 Money*`
  user.money += 1
  } else {
  end = `Kamu kalah 😥 *-${taruhan} Money*`
  user.money -= taruhan
  }
  user.lastslot = new Date * 1
  let btnslot = [{ buttonId: `slot ${taruhan}`, buttonText: { displayText: 'Putar Lagi 🎰' }, type: 1 },]
  ichi.sendButtonText(m.chat, btnslot, 
`*[🎰 SLOT]*

${end}

${ga[0]} ${nt[0]} ${en[0]}
${ga[1]} ${nt[1]} ${en[1]}
${ga[2]} ${nt[2]} ${en[2]}
`, global.ownerName, m)
  global.db.users[m.sender].limit -= 1
  break
case 'judi':
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!m.isGroup) return m.reply(mess.group)
  if (!text) return m.reply(`Masukkan Jumlahnya Dengan Format ${prefix}judi <jumlah>\n\nExample : ${prefix}judi 1000`)
  var randomAku = `${Math.floor(Math.random() * 101)}`.trim()
  var randomKamu = `${Math.floor(Math.random() * 81)}`.trim()
  var Aku = (randomAku * 1)
  var Kamu = (randomKamu * 1)
  var user = global.db.users[m.sender]
  if (user.money < text) return m.reply(`${emot.money} Uang Kamu ${user.money} Dan Tidak Mencukupi Untuk Judi Sebesar ${text}`)
  if (Aku > Kamu) {
  user.money -= `${text}`
  m.reply(`🤖 Bot Roll : ${Aku}\n👦 Kamu Roll: ${Kamu}\n\nKamu *Kalah*, kamu kehilangan ${text} Money`)
  } else if (Aku < Kamu) {
  user.money += text * 2
  m.reply(`🤖 Bot Roll : ${Aku}\n👦 Kamu Roll: ${Kamu}\n\nkamu *Menang*, kamu Mendapatkan ${text * 2} Money`)
  } else {
  user.money += 1
  m.reply(`🤖 Bot Roll : ${Aku}\n👦 Kamu Roll: ${Kamu}\n\nkamu *Seri*, kamu Mendapatkan ${text * 1} Money`)
  }
  user.limit -= 1
  break
case 'mining': case 'mine': {
  if (!global.db.chats[m.chat].event) return m.reply(global.fiturOff)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  var cooldown = 300000
  var user = global.db.users[m.sender]
  var __timers = (new Date - user.lastmining)
  var _timers = (cooldown - __timers)
  var timers = clockString(_timers)
  if (user.health > 79) {
   if (new Date - user.lastmining > cooldown) {
   var kayu = `${Math.floor(Math.random() * 70)}`
   var batu = `${Math.floor(Math.random() * 20)}`
   var iron = `${Math.floor(Math.random() * 20)}`
   var money = `${Math.floor(Math.random() * 20)}`
   var exp = `${Math.floor(Math.random() * 20)}`
   var txtrpg = `${emot.health} Saat Menambang Kamu Mendapatkan :\n\n${emot.wood} Kayu: ${kayu}\n${emot.batu} Batu: ${batu}\n${emot.iron} Besi: ${iron}\n${emot.money} Uang: ${money}\n${emot.exp} Exp: ${exp}`
   var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
   ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
   user.kayu += kayu * 1
   user.batu += batu * 1
   user.iron += iron * 1
   user.money += money * 1
   user.exp += exp * 1
   user.lastmining = new Date * 1
   } else m.reply(`Silahkan Tunggu Selama\n*⏰ ${timers}*\nUntuk Dapat Mining Kembali`)
  } else m.reply('Minimal 80 Health Untuk Dapat Melakukan Mining')
  global.db.users[m.sender].limit -= 1
  }
  break

case 'adventure': case 'petualang': case 'berpetualang': {
  if (!global.db.chats[m.chat].event) return m.reply(global.fiturOff)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  var cooldown = 300000
  var user = global.db.users[m.sender]
  var __timers = (new Date - user.lastadventure)
  var _timers = (cooldown - __timers)
  var timers = clockString(_timers)
  if (user.health > 79) {
   if (new Date - user.lastadventure > cooldown) {
   var armor = user.armor
   var rubah = user.fox
   var kuda = user.horse
   var kucing = user.cat
   var ____health = `${Math.floor(Math.random() * 101)}`.trim()
   var ___health = (____health * 1)
   var kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
   var armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
   var __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
   var health = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
   var exp = (Math.floor(Math.random() * 400) + (kuda * 70))
   var uang = `${Math.floor(Math.random() * 400)}`.trim() 
   var _potion = `${Math.floor(Math.random() * 2)}`.trim()
   var potion = (_potion * 1)
   var _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
   var diamond = (_diamond * 1)
   var _common = `${Math.floor(Math.random() * 3)}`.trim()
   var common = (_common * 1)
   var _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
   var uncommon = (_uncommon * 1) 
   var _mythic = `${pickRandom(['1', '0', '0', '1'])}`
   var mythic = (_mythic * 1)
   var _legendary = `${pickRandom(['1', '0', '0', '0'])}`
   var sampah = `${Math.floor(Math.random() * 300)}`.trim()
   var legendary = (_legendary * 1)
   var txtrpg = `${emot.health} Nyawamu Berkurang -${health - 1} karena Kamu telah berpetualang sampai ${pickRandom(['Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German', 'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Bulan', 'Pluto', 'Matahari', 'Hatinya dia', '...'])} dan mendapatkan\n*${emot.exp}* Exp : ${exp}\n${emot.money} Money : ${uang}\n${emot.trash} Sampah : ${sampah}${potion == 0 ? '' : `\n*${emot.potion} Potion:* ` + potion + ''}${diamond == 0 ? '' : `\n*${emot.diamond} Diamond:* ` + diamond + ''}${common == 0 ? '' : `\n*${emot.common} Common Crate:* ` + common + ''}${uncommon == 0 ? '' : `\n*${emot.uncommon} Uncommon Crate:* ` + uncommon + ''}`
   var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
   ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
   if (mythic > 0) {
    user.mythic += mythic * 1
    m.reply('*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + ' Mythic Crate')
   }
   if (legendary > 0) {
   user.legendary += legendary * 1
   m.reply('*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate')
   }
   user.health -= health * 1
   user.exp += exp * 1
   user.money += uang * 1
   user.potion += potion * 1
   user.diamond += diamond * 1
   user.common += common * 1 
   user.uncommon += uncommon * 1
   user.sampah += sampah * 1
   user.lastadventure = new Date * 1
   } else m.reply(`Anda sudah berpetualang dan kelelahan, silahkan coba lagi dalam\n*⏰ ${timers}*`)
  } else m.reply('Minimal 80 health untuk bisa berpetualang, beli nyawa dulu dengan ketik *' + prefix + 'shop buy potion <jumlah>*\ndan ketik *' + prefix + 'heal*')
  global.db.users[m.sender].limit -= 1
  }
  break
 
case 'nebang': {
  if (!global.db.chats[m.chat].event) return m.reply(global.fiturOff)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  var cooldown = 300000
  var user = global.db.chats[m.chat]
  if (!global.db.chats[m.chat].event) return m.reply(global.fiturOff)
  if (!m.isGroup) return m.reply(mess.group)
  if (user.limit == 0) return m.reply(global.limitEnd)
  if (user.busur == 0) throw 'Kamu belum mempunyai busur, silahkan beli terlebih dahulu di shop'
  if (user.panah == 0) throw 'Kamu belum mempunyai anakpanah, silahkan beli terlebih dahulu di shop'
  var __timers = (new Date - user.lastnebang)
  var _timers = (cooldown - __timers)
  var timers = clockString(_timers)
  var exp = (Math.floor(Math.random() * 400) + (2 * 70))
  var _kayu = `${pickRandom(['10', '15', '20', '25', '30', '35', '40', '45', '50'])}`
  var kayu = (_kayu * 6)
  var _money = `${pickRandom(['10', '15', '20', '25', '30', '35', '40', '45', '50'])}`
  var kayu = (_money * 6)
  var health = `${pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90'])}`
  if (user.health > 79) {
   if (new Date - user.lastnebang > cooldown) {
   var txtrpg = `${emot.health} Nyawamu Berkurang -${health - 1} karena Kamu telah menebang pohon di Hutan ${pickRandom(['Dow Hill', 'Aokigahara', 'Epping', 'Isla de las Munecas', 'Hoia-Baciu Forest', 'Black Forest', 'Alas Purwo', 'Amazon'])} dan mendapatkan\n*${emot.exp}* Exp : ${exp}\n${emot.money} Money : ${money}\n${emot.kayu} Kayu : ${kayu}`
   var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
   ichi.sendButtonText(m.chat, btnrpg, txtrpg, global.ownerName, m)
   } else m.reply(`Anda sudah berburu dan kelelahan, silahkan coba lagi dalam\n*⏰ ${timers}*`)
  } else throw 'Dibutuhkan 80 Healt Untuk Berburu'
  global.db.users[m.sender].limit -= 1
  }
  break

case 'feed': {
  if (!global.db.chats[m.chat].event) return m.reply(global.fiturOff)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPrem && global.db.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw `*📃 Contoh penggunaan:* ${prefix+command} kucing\n\n*📮 List Pet :*\n• Kucing\n• Anjing\n• Rubah\n• Kuda`
  var tipe = (args[0] || '').toLowerCase()
  var user = global.db.users[m.sender]
  var rubah = global.db.users[m.sender].fox
  var kuda = global.db.users[m.sender].horse
  var kucing = global.db.users[m.sender].cat
  var anjing = global.db.users[m.sender].dog
  switch (tipe) {
   case 'rubah': 
     if (rubah == 0) throw 'Kamu Belum Memiliki Pet Rubah'
     if (rubah == 10) throw 'Pet Kamu Sudah Max Level'
     var cooldown = 600000
     var __timers = (new Date - user.foxLastFeed)
     var _timers = (cooldown - __timers)
     var timers = clockString(_timers)
     if (new Date - user.foxLastFeed > cooldown) {
      if (user.petFood > 0) {
       user.petFood -= 1
       user.foxExp += 20
       user.foxLastFeed = new Date * 1
       m.reply(`Berhasil memberi makan pet ${tipe} 🦊`)
       if (rubah > 0) {
        var naiklvl = ((rubah * 100) - 1)
        if (user.foxExp > naiklvl) {
         user.fox += 1
         user.foxExp -= (rubah * 100)
         m.reply(`*Selamat Pet Rubah kamu naik level ✨*`)
        }
       }
      } else m.reply(`Makanan pet kamu tidak cukup`)
     } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${timers}* lagi`)
     break
   case 'kucing': 
     if (kucing == 0) throw 'Kamu Belum Memiliki Pet Kucing'
     if (kucing == 10) throw 'Pet Kamu Sudah Max Level'
     var cooldown = 600000
     var __timers = (new Date - user.foxLastFeed)
     var _timers = (cooldown - __timers)
     var timers = clockString(_timers)
     if (new Date - user.foxLastFeed > cooldown) {
      if (user.petFood > 0) {
       user.petFood -= 1
       user.foxExp += 20
       user.foxLastFeed = new Date * 1
       m.reply(`Berhasil memberi makan pet ${tipe} 🐱`)
       if (kucing > 0) {
        var naiklvl = ((kucing * 100) - 1)
        if (user.foxExp > naiklvl) {
         user.fox += 1
         user.foxExp -= (kucing * 100)
         m.reply(`*Selamat Pet Kucing kamu naik level ✨*`)
        }
       }
      } else m.reply(`Makanan pet kamu tidak cukup`)
     } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${timers}* lagi`)
     break
   case 'anjing': 
     if (anjing == 0) throw 'Kamu Belum Memiliki Pet Anjing'
     if (anjing == 10) throw 'Pet Kamu Sudah Max Level'
     var cooldown = 600000
     var __timers = (new Date - user.foxLastFeed)
     var _timers = (cooldown - __timers)
     var timers = clockString(_timers)
     if (new Date - user.foxLastFeed > cooldown) {
      if (user.petFood > 0) {
       user.petFood -= 1
       user.foxExp += 20
       user.foxLastFeed = new Date * 1
       m.reply(`Berhasil memberi makan pet ${tipe} 🐶`)
       if (anjing > 0) {
        var naiklvl = ((anjing * 100) - 1)
        if (user.foxExp > naiklvl) {
         user.fox += 1
         user.foxExp -= (anjing * 100)
         m.reply(`*Selamat Pet Anjing kamu naik level ✨*`)
        }
       }
      } else m.reply(`Makanan pet kamu tidak cukup`)
     } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${timers}* lagi`)
     break
   case 'kuda': 
     if (kuda == 0) throw 'Kamu Belum Memiliki Pet Kuda'
     if (kuda == 10) throw 'Pet Kamu Sudah Max Level'
     var cooldown = 600000
     var __timers = (new Date - user.foxLastFeed)
     var _timers = (cooldown - __timers)
     var timers = clockString(_timers)
     if (new Date - user.foxLastFeed > cooldown) {
      if (user.petFood > 0) {
       user.petFood -= 1
       user.foxExp += 20
       user.foxLastFeed = new Date * 1
       m.reply(`Berhasil memberi makan pet ${tipe} 🐴`)
       if (kuda > 0) {
        var naiklvl = ((kuda * 100) - 1)
        if (user.foxExp > naiklvl) {
         user.fox += 1
         user.foxExp -= (kuda * 100)
         m.reply(`*Selamat Pet Kuda kamu naik level ✨*`)
        }
       }
      } else m.reply(`Makanan pet kamu tidak cukup`)
     } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${timers}* lagi`)
     break
   }
  global.db.users[m.sender].limit -= 1
  }
  break

case 'shop': case 'toko': {
  var petik = '```'
  var potion = 520
  var Spotion = 150 
  var limit = 350
  var busur = 780
  var panah = 150
  var kapak = 1002
  var Slimit = 100
  var Bdiamond = 900
  var Sdiamond = 750
  var Bcommon = 200
  var Scommon = 20
  var Suncommon = 100
  var Buncommon = 600
  var Bmythic = 2000 
  var Smythic = 500
  var Blegendary = 7500 
  var Slegendary = 3000
  var Bsampah = 10
  var Ssampah = 2
  var Skayu = 2781
  var user = global.db.users[m.sender]
  var _armor = user.armor
  var _sword = user.sword
  var _budak = user.budak
  var budak = (_budak == 0 ? 50000 : '' || _armor == 1 ? 600000 : '' || _armor == 2 ? 70000 : '' || _armor == 3 ? 800000 : '' || _armor == 4 ? 99999 : '')
  var armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
  var sword = (_sword == 0 ? 20000 : '' || _sword == 1 ? 49999 : '' || _sword == 2 ? 99999 : '' || _sword == 3 ? 149999 : '' || _sword == 4 ? 299999 : '')
  var Kchat = `*${prefix}shop <Buy|sell> <item> <jumlah>*\n
Example : *${prefix}shop buy potion 1*\n
List Barang :\n
*Barang         |  Harga beli*

${petik}Potion   : ${potion}
Limit    : ${limit}
Diamond  : ${Bdiamond}
Common   : ${Bcommon}
Uncommon : ${Buncommon}
Mythic   : ${Bmythic}
Legendary: ${Blegendary}
Sampah   : ${Bsampah}
Armor    : ${armor}
Sword    : ${sword}
Busur    : ${busur}
Panah    : ${panah}
Kapak    : ${kapak}${petik}\n
*Barang         |  Harga Jual*

${petik}Potion   : ${potion}
Limit    : ${limit}
Diamond  : ${Bdiamond}
Common   : ${Bcommon}
Uncommon : ${Buncommon}
Mythic   : ${Bmythic}
Legendary: ${Blegendary}
Budak    : ${budak}
Sampah   : ${Bsampah}
Kayu     : ${Skayu}
${petik}\n
`
  if (!text) return m.reply(Kchat)
  var tipe = (args[0] || '').toLowerCase()
  var _tipe = (args[1] || '').toLowerCase()
  var jualbeli = (args[0] || '').toLowerCase()
  var count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
  switch (jualbeli) {
  case 'buy': case 'beli':
   switch (_tipe) {
    case 'potion':
     if (user.money >= potion * count) {
     user.money -= potion * count
     user.potion += count * 1
     m.reply(`Succes membeli ${count} Potion ${emot.potion} dengan harga ${potion * count} money\n\nGunakan potion dengan ketik: *${prefix}heal* untuk menambah health kamu`)
     } else m.reply(`Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money`)
     break
    case 'limit': 
     if (user.exp >= limit * count) {
     user.exp -= limit * count
     user.limit += count * 1
     m.reply(`Succes membeli ${count} Limit ${emot.limit} dengan harga ${limit * count} exp`)
     } else m.reply(`Exp kamu tidak cukup untuk membeli ${count} limit dengan harga ${limit * count} exp`)
     break
    case 'diamond':
     if (user.money >= Bdiamond * count) {
     user.money -= Bdiamond * count
     user.diamond += count * 1
     m.reply(`Succes membeli ${count} Diamond ${emot.diamond} dengan harga ${Bdiamond * count} money`)
     } else m.reply(`Uang anda tidak cukup untuk membeli ${count} Diamond dengan harga ${Bdiamond * count} money`)
     break
    case 'common':
     if (user.money >= Bcommon * count) {
     user.money -= Bcommon * count
     user.common += count * 1
     m.reply(`Succes membeli ${count} Common ${emot.common} dengan harga ${Bcommon * count} money`)
     } else m.reply(`Uang anda tidak cukup untuk membeli ${count} Common dengan harga ${Bcommon * count} money`)
     break
    case 'uncommon':
     if (global.db.users[m.sender].money >= Buncommon * count) {
     user.uncommon += count * 1
     user.money -= Buncommon * count
     m.reply(`Succes membeli ${count} Uncommon crate ${emot.uncommon} dengan harga ${Buncommon * count} money`)
     } else m.reply(`Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${prefix}open uncommon*`)                     
     break
    case 'mythic':
     if (global.db.users[m.sender].money >= Bmythic * count) {
     user.mythic += count * 1
     user.money -= Bmythic * count
     m.reply(`Succes membeli ${count} Mythic crate ${emot.mythic} dengan harga ${Bmythic * count} money`)
     } else m.reply(`Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${prefix}open mythic*`)
     break
    case 'legendary':
     if (user.money >= Blegendary * count) {
     user.legendary += count * 1
     user.money -= Blegendary * count
     m.reply(`Succes membeli ${count} Legendary crate ${emot.legendary} dengan harga ${Blegendary * count} money`)
     } else m.reply(`Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${prefix}open legendary*`)
     break
    case 'sampah':
     if (user.money >= Bsampah * count) {
     user.sampah += count * 1
     user.money -= Bsampah * count
     m.reply(`Succes membeli ${count} Sampah ${emot.trash} dengan harga ${Bsampah * count} money`)
     } else m.reply(`Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money`)
     break
    case 'sword':
     if (user.sword == 5) return m.reply('swordmu sudah *Level Max*')
     if (user.money > sword) {
     user.sword += 1
     user.money -= sword * 1
     m.reply(`Succes membeli sword ${emot.sword} seharga ${sword} money`)
     } else m.reply(`uang mu tidak cukup untuk membeli sword seharga ${sword} money`)
     break
    case 'armor':
     if (user.armor == 5) return m.reply('Armormu sudah *Level Max*')
     if (user.money > armor) {
     user.armor += 1
     user.money -= armor * 1
     m.reply(`Succes membeli armor ${emot.armor} seharga ${armor} money`)
     } else m.reply(`uang mu tidak cukup untuk membeli armor seharga ${armor} money`)
     break
    case 'budak':
     if (user.budak == 5) return m.reply('Budakmu sudah *Level Max*')
     if (user.money > budak) {
     user.budak += 1
     user.money -= budak * 1
     m.reply(`Succes membeli budak ${emot.budak} seharga ${budak} money`)
     } else m.reply(`uang mu tidak cukup untuk membeli budak seharga ${budak} money`)                        
     break
    case 'busur': 
     if (user.busur == 1) return m.reply('Busur Kamu Sudah Ada')
     if (user.money > busur) {
     user.busur += 1
     user.money -= busur * 1
     m.reply(`Succes membeli busur ${emot.busur} seharga ${busur} money`)
     } else m.reply(`uang mu tidak cukup untuk membeli busur seharga ${busur} money`)                        
     break
    case 'panah': case 'anakpanah':
     if (user.money > panah) {
     user.panah += 1
     user.money -= panah * 1
     m.reply(`Succes membeli anak panah ${emot.panah} seharga ${panah} money`)
     } else m.reply(`uang mu tidak cukup untuk membeli anak panah seharga ${panah} money`)                        
     break
    case 'kapak':
     if (user.kapak > kapak) {
     user.kapak += 1
     user.money -= kapak * 1
     m.reply(`Succes membeli kapak ${emot.kapak} seharga ${kapak} money`)
     } else m.reply(`uang mu tidak cukup untuk membeli kapak seharga ${kapak} money`)                        
     break
   default:
   return m.reply(Kchat)
   }
  break
  case 'sell': case 'jual':
   switch (_tipe) {
    case 'potion':
     if (user.potion >= count * 1) {
     user.money += potion * count
     user.potion -= count * 1
     m.reply(`Succes menjual ${count} Potion ${emot.potion} dengan harga ${Spotion * count} money`)
     } else m.reply(`Potion kamu tidak cukup`)
     break
    case 'limit':
     if (user.limit >= count * 1) {
     user.exp += Slimit * count
     user.limit -= count * 1
     m.reply(`Sukses menjual ${count} limit ${emot.limit} dengan harga ${Slimit * count} exp`.trim())
     } else m.reply(`Limit kamu tidak cukup`.trim())
     break
    case 'common':
     if (user.common >= count * 1) {
     user.money += Scommon * count
     user.common -= count * 1
     m.reply(`Succes menjual ${count} Common Crate ${emot.common} dengan harga ${Scommon * count} money`)
     } else m.reply(`Common Crate kamu tidak cukup`)
     break
    case 'uncommon':
     if (user.uncommon >= count * 1) {
     user.money += Suncommon * count
     user.uncommon -= count * 1
     m.reply(`Succes menjual ${count} Uncommon Crate ${emot.uncommon} dengan harga ${Suncommon * count} money`.trim())
     } else m.reply(`Uncommon Crate kamu tidak cukup`.trim())
     break
    case 'mythic':
     if (user.mythic >= count * 1) {
     user.money += Smythic * count
     user.mythic -= count * 1
     m.reply(`Succes menjual ${count} Mythic Crate ${emot.mythic} Dengan harga ${Smythic * count} money`.trim())
     } else m.reply(`Mythic Crate kamu tidak cukup`.trim())
     break
    case 'legendary':
     if (user.legendary >= count * 1) {
     user.money += Slegendary * count
     user.legendary -= count * 1
     m.reply(`Succes menjual ${count} Legendary Crate ${emot.legendary} dengan harga ${Slegendary * count} money`.trim())
     } else m.reply(`Legendary Crate kamu tidak cukup`.trim())
     break
    case 'sampah':
     if (user.sampah >= count * 1) {
     user.sampah -= count * 1
     user.money += Ssampah * count
     m.reply(`Succes menjual ${count} sampah ${emot.trash}, dan anda mendapatkan ${Ssampah * count} money`)
     } else m.reply(`Sampah anda tidak cukup`)
     break
    case 'diamond':
     if (user.diamond >= count * 1) {
     user.diamond -= count * 1
     user.money += Sdiamond * count
     m.reply(`Succes menjual ${count} Diamond ${emot.diamond}, dan anda mendapatkan ${Sdiamond * count} money`)
     } else m.reply(`Diamond anda tidak cukup`)
     break
    case 'kayu':
     if (user.kayu >= count * 1) {
     user.kayu -= count * 1
     user.money += Skayu * count
     m.reply(`Succes menjual ${count} Kayu ${emot.kayu}, dan anda mendapatkan ${Skayu * count} money`)
     } else m.reply(`Kayu anda tidak cukup`)
     break
     default:
     return m.reply(Kchat)
     }
    break
    default:
    return m.reply(Kchat)
   }
  }
  break

case 'open': {
  if (!global.db.chats[m.chat].event) return m.reply(global.fiturOff)
  if (!m.isGroup) return m.reply(mess.group)
  var bruh = `${prefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${prefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*mythic*\n*legendary*`
  var _lmao = args[0]
  var Lmao = `Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${prefix}open ${args > 2 ? _lmao : pickRandom(['common', 'uncommon', 'mythic', 'legendary'])} 10*`
  var tipe = (args[0] || '').toLowerCase()
  var jumlah = (args[1] || '').toLowerCase()
  var user = global.db.users[m.sender]
  switch (tipe) {
   case 'common':
    switch (jumlah) {
     case '1': case 'crate':
      var _cm = `${Math.floor(Math.random() * 50)}`.trim()
      var _cc = `${Math.floor(Math.random() * 2)}`.trim()
      var _cp = `${Math.floor(Math.random() * 1)}`.trim()
      var _ce = `${Math.floor(Math.random() * 100)}`.trim()
      var _cu = `${Math.floor(Math.random() * 1)}`.trim()
      var cm = (_cm * 1)
      var cc = (_cc * 1)
      var cp = (_cp * 1)
      var ce = (_ce * 1)
      var cu = (_cu * 1)
      var Hcom = `
Anda telah membuka *${emot.common} Common crate* dan mendapatkan:${cm > 0 ? `\nMoney: ${cm}` : ''}${ce > 0 ? `\nExp: ${ce} *exp*` : ''}${cp > 0 ? `\nPotion: ${cp} *potion*` : ''}${cc > 0 ? `\ncommon crate: ${cc} *crate*` : ''}${cu > 0 ? `\nUncommon crate: ${cu} *crate*` : ''}
`.trim()
      if (user.common >= 1) {
      user.common -= 1
      user.money += cm * 1
      user.exp += ce * 1
      user.potion += cp * 1
      user.uncommon += cu * 1
      user.common += cc * 1
      m.reply(Hcom)
      } else m.reply('Common crate anda tidak cukup')
      break
     case '10':
      var _cm1 = `${Math.floor(Math.random() * 500)}`.trim()
      var _cc1 = `${Math.floor(Math.random() * 5)}`.trim()
      var _cp1 = `${Math.floor(Math.random() * 3)}`.trim()
      var _ce1 = `${Math.floor(Math.random() * 700)}`.trim()
      var _cu1 = `${Math.floor(Math.random() * 3)}`.trim()
      var cm1 = (_cm1 * 1)
      var cc1 = (_cc1 * 1)
      var cp1 = (_cp1 * 1)
      var ce1 = (_ce1 * 1)
      var cu1 = (_cu1 * 1)
      var Hcom1 = `
Anda telah membuka *${emot.common} Common crate* dan mendapatkan:${cm1 > 0 ? `\nMoney: ${cm1}` : ''}${ce1 > 0 ? `\nExp: ${ce1} *exp*` : ''}${cp1 > 0 ? `\nPotion: ${cp1} *potion*` : ''}${cc1 > 0 ? `\ncommon crate: ${cc1} *crate*` : ''}${cu1 > 0 ? `\nUncommon crate: ${cu1} *crate*` : ''}
`.trim()
      if (user.common >= 10) {
      user.common -= 10
      user.money += cm1 * 1
      user.exp += ce1 * 1
      user.potion += cp1 * 1
      user.uncommon += cu1 * 1
      user.common += cc1 * 1
      m.reply(Hcom1)
      } else m.reply('Common crate anda tidak cukup')
      break
     case '100':
      var _cm2 = `${Math.floor(Math.random() * 5000)}`.trim()
      var _cc2 = `${Math.floor(Math.random() * 50)}`.trim()
      var _cp2 = `${Math.floor(Math.random() * 20)}`.trim()
      var _ce2 = `${Math.floor(Math.random() * 7500)}`.trim()
      var _cu2 = `${Math.floor(Math.random() * 30)}`.trim()
      var cm2 = (_cm2 * 1)
      var cc2 = (_cc2 * 1)
      var cp2 = (_cp2 * 1)
      var ce2 = (_ce2 * 1)
      var cu2 = (_cu2 * 1)
      var Hcom2 = `
Anda telah membuka *${emot.common} Common crate* dan mendapatkan:${cm2 > 0 ? `\nMoney: ${cm2}` : ''}${ce2 > 0 ? `\nExp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\nPotion: ${cp2} *potion*` : ''}${cc2 > 0 ? `\ncommon crate: ${cc2} *crate*` : ''}${cu2 > 0 ? `\nUncommon crate: ${cu2} *crate*` : ''}
`.trim()
      if (user.common >= 100) {
      user.common -= 100
      user.money += cm2 * 1
      user.exp += ce2 * 1
      user.potion += cp2 * 1
      user.uncommon += cu2 * 1
      user.common += cc2 * 1
      m.reply(Hcom2)
      } else m.reply('Common crate anda tidak cukup')
      break
     case '1000':
      var _cm3 = `${Math.floor(Math.random() * 50000)}`.trim()
      var _cc3 = `${Math.floor(Math.random() * 350)}`.trim()
      var _cp3 = `${Math.floor(Math.random() * 100)}`.trim()
      var _ce3 = `${Math.floor(Math.random() * 80000)}`.trim()
      var _cu3 = `${Math.floor(Math.random() * 200)}`.trim()
      var cm3 = (_cm3 * 1)
      var cc3 = (_cc3 * 1)
      var cp3 = (_cp3 * 1)
      var ce3 = (_ce3 * 1)
      var cu3 = (_cu3 * 1)
      var Hcom3 = `
Anda telah membuka *${emot.common} Common crate* dan mendapatkan:${cm3 > 0 ? `\nMoney: ${cm3}` : ''}${ce3 > 0 ? `\nExp: ${ce3} *exp*` : ''}${cp3 > 0 ? `\nPotion: ${cp3} *potion*` : ''}${cc3 > 0 ? `\ncommon crate: ${cc3} *crate*` : ''}${cu3 > 0 ? `\nUncommon crate: ${cu3} *crate*` : ''}
`.trim()
      if (user.common >= 1000) {
      user.common -= 1000
      user.money += cm3 * 1
      user.exp += ce3 * 1
      user.potion += cp3 * 1
      user.uncommon += cu3 * 1
      user.common += cc3 * 1
      m.reply(Hcom3)
      } else m.reply('Common crate anda tidak cukup')
      break
      default:
      return m.reply(Lmao)
     }
     break
   case 'uncommon':
    switch (jumlah) {
     case '1':
     case 'crate':
      var _ud = `${Math.floor(Math.random() * 2)}`.trim()
      var _ue = `${Math.floor(Math.random() * 100)}`.trim()
      var _um = `${Math.floor(Math.random() * 150)}`.trim()
      var _up = `${Math.floor(Math.random() * 2)}`.trim()
      var _umc = `${Math.floor(Math.random() * 1)}`.trim()
      var _uu = `${Math.floor(Math.random() * 2)}`.trim()
      var _uc = `${Math.floor(Math.random() * 3)}`.trim()
      var ud = (_ud * 1)
      var ue = (_ue * 1)
      var um = (_um * 1)
      var up = (_up * 1)
      var umc = (_umc * 1)
      var uu = (_uu * 1)
      var uc = (_uc * 1)
      var Hun = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um > 0 ? `\nMoney: ${um}` : ''}${ue > 0 ? `\nExp: ${ue} *exp*` : ''}${ud > 0 ? `\nDiamond: ${ud} *diamond*` : ''}${up > 0 ? `\nPotion: ${up} *potion*` : ''}${uc > 0 ? `\nCommon crate: ${uc} *crate*` : ''}${uu > 0 ? `\nUncommon crate: ${uu} *crate*` : ''}
`.trim()
      if (user.uncommon >= 1) {
      user.uncommon -= 1
      user.money += um * 1
      user.diamond += ud * 1
      user.exp += ue * 1
      user.potion += up * 1
      user.common += uc * 1
      user.uncommon += uu * 1
      m.reply(Hun)
      if (umc > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc} Mythic Crate`)
      user.mythic += umc * 1
      }
      } else m.reply('Uncommon crate anda tidak cukup')
      break
     case '10':
      var _ud1 = `${Math.floor(Math.random() * 5)}`.trim()
      var _ue1 = `${Math.floor(Math.random() * 750)}`.trim()
      var _um1 = `${Math.floor(Math.random() * 400)}`.trim()
      var _up1 = `${Math.floor(Math.random() * 7)}`.trim()
      var _umc1 = `${Math.floor(Math.random() * 2)}`.trim()
      var _uu1 = `${Math.floor(Math.random() * 4)}`.trim()
      var _uc1 = `${Math.floor(Math.random() * 7)}`.trim()
      var ud1 = (_ud1 * 1)
      var ue1 = (_ue1 * 1)
      var um1 = (_um1 * 1)
      var up1 = (_up1 * 1)
      var umc1 = (_umc1 * 1)
      var uu1 = (_uu1 * 1)
      var uc1 = (_uc1 * 1)
      var Hun1 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um1 > 0 ? `\nMoney: ${um1}` : ''}${ue1 > 0 ? `\nExp: ${ue1} *exp*` : ''}${ud1 > 0 ? `\nDiamond: ${ud1} *diamond*` : ''}${up1 > 0 ? `\nPotion: ${up1} *potion*` : ''}${uc1 > 0 ? `\nCommon crate: ${uc1} *crate*` : ''}${uu1 > 0 ? `\nUncommon crate: ${uu1} *crate*` : ''}
`.trim()
      if (user.uncommon >= 10) {
      user.uncommon -= 10
      user.money += um1 * 1
      user.diamond += ud1 * 1
      user.exp += ue1 * 1
      user.potion += up1 * 1
      user.common += uc1 * 1
      user.uncommon += uu1 * 1
      m.reply(Hun1)
      if (umc1 > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc1} Mythic Crate`)
      user.mythic += umc1 * 1
      }
      } else m.reply('Uncommon crate anda tidak cukup')
      break
     case '100':
      var _ud2 = `${Math.floor(Math.random() * 20)}`.trim()
      var _ue2 = `${Math.floor(Math.random() * 8000)}`.trim()
      var _um2 = `${Math.floor(Math.random() * 5000)}`.trim()
      var _up2 = `${Math.floor(Math.random() * 20)}`.trim()
      var _umc2 = `${Math.floor(Math.random() * 10)}`.trim()
      var _uu2 = `${Math.floor(Math.random() * 25)}`.trim()
      var _uc2 = `${Math.floor(Math.random() * 50)}`.trim()
      var ud2 = (_ud2 * 1)
      var ue2 = (_ue2 * 1)
      var um2 = (_um2 * 1)
      var up2 = (_up2 * 1)
      var umc2 = (_umc2 * 1)
      var uu2 = (_uu2 * 1)
      var uc2 = (_uc2 * 1)
      var Hun2 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um2 > 0 ? `\nMoney: ${um2}` : ''}${ue2 > 0 ? `\nExp: ${ue2} *exp*` : ''}${ud2 > 0 ? `\nDiamond: ${ud2} *diamond*` : ''}${up2 > 0 ? `\nPotion: ${up2} *potion*` : ''}${uc2 > 0 ? `\nCommon crate: ${uc2} *crate*` : ''}${uu2 > 0 ? `\nUncommon crate: ${uu2} *crate*` : ''}
`.trim()
      if (user.uncommon >= 100) {
      user.uncommon -= 100
      user.money += um2 * 1
      user.diamond += ud2 * 1
      user.exp += ue2 * 1
      user.potion += up2 * 1
      user.common += uc2 * 1
      user.uncommon += uu2 * 1
      m.reply(Hun2)
      if (umc2 > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc2} Mythic Crate`)
      user.mythic += umc2 * 1
      }
      } else m.reply('Uncommon crate anda tidak cukup')
      break
     case '1000':
      var _ud3 = `${Math.floor(Math.random() * 50)}`.trim()
      var _ue3 = `${Math.floor(Math.random() * 100000)}`.trim()
      var _um3 = `${Math.floor(Math.random() * 50000)}`.trim()
      var _up3 = `${Math.floor(Math.random() * 100)}`.trim()
      var _umc3 = `${Math.floor(Math.random() * 100)}`.trim()
      var _uu3 = `${Math.floor(Math.random() * 100)}`.trim()
      var _uc3 = `${Math.floor(Math.random() * 200)}`.trim()
      var ud3 = (_ud3 * 1)
      var ue3 = (_ue3 * 1)
      var um3 = (_um3 * 1)
      var up3 = (_up3 * 1)
      var umc3 = (_umc3 * 1)
      var uu3 = (_uu3 * 1)
      var uc3 = (_uc3 * 1)
      var Hun3 = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um3 > 0 ? `\nMoney: ${um3}` : ''}${ue3 > 0 ? `\nExp: ${ue3} *exp*` : ''}${ud3 > 0 ? `\nDiamond: ${ud3} *diamond*` : ''}${up3 > 0 ? `\nPotion: ${up3} *potion*` : ''}${uc3 > 0 ? `\nCommon crate: ${uc3} *crate*` : ''}${uu3 > 0 ? `\nUncommon crate: ${uu3} *crate*` : ''}
`.trim()
      if (user.uncommon >= 1000) {
      user.uncommon -= 1000
      user.money += um3 * 1
      user.diamond += ud3 * 1
      user.exp += ue3 * 1
      user.potion += up3 * 1
      user.common += uc3 * 1
      user.uncommon += uu3 * 1
      m.reply(Hun3)
      if (umc3 > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc3} Mythic Crate`)
      user.mythic += umc3 * 1
      }
      } else m.reply('Uncommon crate anda tidak cukup')
      break
     default:
     return m.reply(Lmao)
     }
     break
   case 'mythic':
    switch (jumlah) {
     case '1':
     case 'crate':
      var _mm = `${Math.floor(Math.random() * 200)}`.trim()
      var _mmm = `${pickRandom(['0', '0', '1', '0'])}`.trim()
      var _me = `${Math.floor(Math.random() * 250)}`.trim()
      var _mp = `${Math.floor(Math.random() * 3)}`.trim()
      var _mu = `${Math.floor(Math.random() * 3)}`.trim()
      var _mc = `${Math.floor(Math.random() * 5)}`.trim()
      var _ml = `${pickRandom(['0', '0', '1', '0',  '0'])}`.trim()
      var _md = `${Math.floor(Math.random() * 3)}`.trim()
      var mm = (_mm * 1)
      var mmm = (_mmm * 1)
      var me = (_me * 1)
      var mp = (_mp * 1)
      var mu = (_mu * 1)
      var mc = (_mc * 1)
      var ml = (_ml * 1)
      var md = (_md * 1)
      var Mychat = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm > 0 ? `\nMoney: ${mm}` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${md > 0 ? `\nDiamond: ${md} *diamond*` : ''}${mp > 0 ? `\nPotion: ${mp} *potion*` : ''}${mc > 0 ? `\nCommon crate: ${mc} *crate*` : ''}${mu > 0 ? `\nUncommon crate: ${mu} *crate*` : ''}
`.trim()
      if (user.mythic >= 1) {
      user.mythic -= 1
      user.money += mm * 1
      user.diamond += md * 1
      user.exp += me * 1
      user.potion += mp * 1
      user.common += mc * 1
      user.uncommon += mu * 1
      m.reply(Mychat)
      if (mmm > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm} Mythic Crate`)
      user.mythic += mmm * 1
      }
      if (ml > 0) {
      m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml} Legendary Crate`)
      user.legendary += ml * 1
      }
      } else m.reply('Mythic crate anda tidak cukup')
      break
     case '10':
      var _mm1 = `${Math.floor(Math.random() * 2000)}`.trim()
      var _mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
      var _me1 = `${Math.floor(Math.random() * 3000)}`.trim()
      var _mp1 = `${Math.floor(Math.random() * 6)}`.trim()
      var _mu1 = `${Math.floor(Math.random() * 6)}`.trim()
      var _mc1 = `${Math.floor(Math.random() * 11)}`.trim()
      var _ml1 = `${Math.floor(Math.random() * 1)}`.trim()
      var _md1 = `${Math.floor(Math.random() * 5)}`.trim()
      var mm1 = (_mm1 * 1)
      var mmm1 = (_mmm1 * 1)
      var me1 = (_me1 * 1)
      var mp1 = (_mp1 * 1)
      var mu1 = (_mu1 * 1)
      var mc1 = (_mc1 * 1)
      var ml1 = (_ml1 * 1)
      var md1 = (_md1 * 1)
      var Mychat1 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm1 > 0 ? `\nMoney: ${mm1}` : ''}${me1 > 0 ? `\nExp: ${me1} *exp*` : ''}${md1 > 0 ? `\nDiamond: ${md1} *diamond*` : ''}${mp1 > 0 ? `\nPotion: ${mp1} *potion*` : ''}${mc1 > 0 ? `\nCommon crate: ${mc1} *crate*` : ''}${mu1 > 0 ? `\nUncommon crate: ${mu1} *crate*` : ''}
`.trim()
      if (user.mythic >= 10) {
      user.mythic -= 10
      user.money += mm1 * 1
      user.diamond += md1 * 1
      user.exp += me1 * 1
      user.potion += mp1 * 1
      user.common += mc1 * 1
      user.uncommon += mu1 * 1
      m.reply(Mychat1)
      if (mmm1 > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm1} Mythic Crate`)
      user.mythic += mmm1 * 1
      }
      if (ml1 > 0) {
      m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml1} Legendary Crate`)
      user.legendary += ml1 * 1
      }
      } else m.reply('Mythic crate anda tidak cukup')
      break
     case '100':
      var _mm2 = `${Math.floor(Math.random() * 25000)}`.trim()
      var _mmm2 = `${Math.floor(Math.random() * 10)}`.trim()
      var _me2 = `${Math.floor(Math.random() * 30000)}`.trim()
      var _mp2 = `${Math.floor(Math.random() * 50)}`.trim()
      var _mu2 = `${Math.floor(Math.random() * 80)}`.trim()
      var _mc2 = `${Math.floor(Math.random() * 150)}`.trim()
      var _ml2 = `${Math.floor(Math.random() * 6)}`.trim()
      var _md2 = `${Math.floor(Math.random() * 20)}`.trim()
      var mm2 = (_mm2 * 1)
      var mmm2 = (_mmm2 * 1)
      var me2 = (_me2 * 1)
      var mp2 = (_mp2 * 1)
      var mu2 = (_mu2 * 1)
      var mc2 = (_mc2 * 1)
      var ml2 = (_ml2 * 1)
      var md2 = (_md2 * 1)
      var Mychat2 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm2 > 0 ? `\nMoney: ${mm2}` : ''}${me2 > 0 ? `\nExp: ${me2} *exp*` : ''}${md2 > 0 ? `\nDiamond: ${md2} *diamond*` : ''}${mp2 > 0 ? `\nPotion: ${mp2} *potion*` : ''}${mc2 > 0 ? `\nCommon crate: ${mc2} *crate*` : ''}${mu2 > 0 ? `\nUncommon crate: ${mu2} *crate*` : ''}
`.trim()
      if (user.mythic >= 100) {
      user.mythic -= 100
      user.money += mm2 * 1
      user.diamond += md2 * 1
      user.exp += me2 * 1
      user.potion += mp2 * 1
      user.common += mc2 * 1
      user.uncommon += mu2 * 1
      m.reply(Mychat2)
      } else m.reply('Mythic crate anda tidak cukup')
      break
     case '1000':
      var _mm3 = `${Math.floor(Math.random() * 500000)}`.trim()
      var _mmm3 = `${Math.floor(Math.random() * 50)}`.trim()
      var _me3 = `${Math.floor(Math.random() * 750000)}`.trim()
      var _mp3 = `${Math.floor(Math.random() * 70)}`.trim()
      var _mu3 = `${Math.floor(Math.random() * 250)}`.trim()
      var _mc3 = `${Math.floor(Math.random() * 750)}`.trim()
      var _ml3 = `${Math.floor(Math.random() * 10)}`.trim()
      var _md3 = `${Math.floor(Math.random() * 50)}`.trim()
      var mm3 = (_mm3 * 1)
      var mmm3 = (_mmm3 * 1)
      var me3 = (_me3 * 1)
      var mp3 = (_mp3 * 1)
      var mu3 = (_mu3 * 1)
      var mc3 = (_mc3 * 1)
      var ml3 = (_ml3 * 1)
      var md3 = (_md3 * 1)
      var Mychat3 = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm3 > 0 ? `\nMoney: ${mm3}` : ''}${me3 > 0 ? `\nExp: ${me3} *exp*` : ''}${md3 > 0 ? `\nDiamond: ${md3} *diamond*` : ''}${mp3 > 0 ? `\nPotion: ${mp3} *potion*` : ''}${mc3 > 0 ? `\nCommon crate: ${mc3} *crate*` : ''}${mu3 > 0 ? `\nUncommon crate: ${mu3} *crate*` : ''}
`.trim()
      if (user.mythic >= 1000) {
      user.mythic -= 1000
      user.money += mm3 * 1
      user.diamond += md3 * 1
      user.exp += me3 * 1
      user.potion += mp3 * 1
      user.common += mc3 * 1
      user.uncommon += mu3 * 1
      m.reply(Mychat3)
      if (mmm3 > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm3} Mythic Crate`)
      user.mythic += mmm3 * 1
      }
      if (ml3 > 0) {
      m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml3} Legendary Crate`)
      user.legendary += ml3 * 1
      }
      } else m.reply('Mythic crate anda tidak cukup')
      break
    default:
    return m.reply(Lmao)
    }
    break
   case 'legendary':
    switch (jumlah) {
     case '1':
     case 'crate':
      var _lm = `${Math.floor(Math.random() * 450)}`.trim()
      var _le = `${Math.floor(Math.random() * 550)}`.trim()
      var _lp = `${Math.floor(Math.random() * 5)}`.trim()
      var _lu = `${Math.floor(Math.random() * 7)}`.trim()
      var _lc = `${Math.floor(Math.random() * 10)}`.trim()
      var _ll = `${pickRandom(['0', '0', '1', '0'])}`.trim()
      var _lpp = `${pickRandom(['0', '1', '0'])}`.trim()
      var _ld = `${Math.floor(Math.random() * 5)}`.trim()
      var _lmm = `${pickRandom(['0', '1', '0', '1', '0', '0'])}`.trim()
      var lm = (_lm * 1)
      var le = (_le * 1)
      var lp = (_lp * 1) 
      var lu = (_lu * 1) 
      var lc = (_lc * 1) 
      var ll = (_ll * 1) 
      var lpp = (_lpp * 1)       
      var ld = (_ld * 1) 
      var lmm = (_lmm * 1)
      var Lechat = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm > 0 ? `\nMoney: ${lm}` : ''}${le > 0 ? `\nExp: ${le} *exp*` : ''}${ld > 0 ? `\nDiamond: ${ld} *diamond*` : ''}${lp > 0 ? `\nPotion: ${lp} *potion*` : ''}${lc > 0 ? `\nCommon crate: ${lc} *crate*` : ''}${lu > 0 ? `\nUncommon crate: ${lu} *crate*` : ''}
`.trim()  
      if (user.legendary >= 1) {
      user.legendary -= 1
      user.money += lm * 1
      user.diamond += ld * 1
      user.exp += le * 1
      user.potion += lp * 1
      user.common += lc * 1
      user.uncommon += lu * 1
      m.reply(Lechat)
      if (lmm > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm} Mythic Crate`)
      user.mythic += lmm * 1
      }
      if (ll > 0 || lpp > 0) {
      m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll > 0 ? `\n${ll} Legendary Crate` : ''}${lpp > 0 ? `\n${lpp} Pet Crate` : ''}`)
      user.legendary += ll * 1
      user.pet += lpp * 1
      }
      } else m.reply('Legendary crate anda tidak cukup')
      break
     case '10':
      var _lm1 = `${Math.floor(Math.random() * 10000)}`.trim()
      var _le1 = `${Math.floor(Math.random() * 15000)}`.trim()
      var _lp1 = `${Math.floor(Math.random() * 30)}`.trim()
      var _lu1 = `${Math.floor(Math.random() * 50)}`.trim()
      var _lc1 = `${Math.floor(Math.random() * 75)}`.trim()
      var _ll1 = `${Math.floor(Math.random() * 2)}`.trim()
      var _lpp1 = `${Math.floor(Math.random() * 6)}`.trim()
      var _ld1 = `${Math.floor(Math.random() * 16)}`.trim()
      var _lmm1 = `${Math.floor(Math.random() * 4)}`.trim()
      var lm1 = (_lm1 * 1)
      var le1 = (_le1 * 1)
      var lp1 = (_lp1 * 1) 
      var lu1 = (_lu1 * 1) 
      var lc1 = (_lc1 * 1) 
      var ll1 = (_ll1 * 1) 
      var lpp1 = (_lpp1 * 1)       
      var ld1 = (_ld1 * 1) 
      var lmm1 = (_lmm1 * 1)
      var Lechat1 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm1 > 0 ? `\nMoney: ${lm1}` : ''}${le1 > 0 ? `\nExp: ${le1} *exp*` : ''}${ld1 > 0 ? `\nDiamond: ${ld1} *diamond*` : ''}${lp1 > 0 ? `\nPotion: ${lp1} *potion*` : ''}${lc1 > 0 ? `\nCommon crate: ${lc1} *crate*` : ''}${lu1 > 0 ? `\nUncommon crate: ${lu1} *crate*` : ''}
`.trim()  
      if (user.legendary >= 10) {
      user.legendary -= 10
      user.money += lm1 * 1
      user.diamond += ld1 * 1
      user.exp += le1 * 1
      user.potion += lp1 * 1
      user.common += lc1 * 1
      user.uncommon += lu1 * 1
      m.reply(Lechat1)
      if (lmm1 > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm1} Mythic Crate`)
      user.mythic += lmm1 * 1
      }
      if (ll1 > 0 || lpp1 > 0) {
      m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll1 > 0 ? `\n${ll1} Legendary Crate` : ''}${lpp1 > 0 ? `\n${lpp1} Pet Crate` : ''}`)
      user.legendary += ll1 * 1
      user.pet += lpp1 * 1
      }
      } else m.reply('Legendary crate anda tidak cukup')
      break
     case '100':
      var _lm2 = `${Math.floor(Math.random() * 100000)}`.trim()
      var _le2 = `${Math.floor(Math.random() * 200000)}`.trim()
      var _lp2 = `${Math.floor(Math.random() * 100)}`.trim()
      var _lu2 = `${Math.floor(Math.random() * 250)}`.trim()
      var _lc2 = `${Math.floor(Math.random() * 750)}`.trim()
      var _ll2 = `${Math.floor(Math.random() * 11)}`.trim()
      var _lpp2 = `${Math.floor(Math.random() * 51)}`.trim()
      var _ld2 = `${Math.floor(Math.random() * 50)}`.trim()
      var _lmm2 = `${Math.floor(Math.random() * 11)}`.trim()
      var lm2 = (_lm2 * 1)
      var le2 = (_le2 * 1)
      var lp2 = (_lp2 * 1) 
      var lu2 = (_lu2 * 1) 
      var lc2 = (_lc2 * 1) 
      var ll2 = (_ll2 * 1) 
      var lpp2 = (_lpp2 * 1)       
      var ld2 = (_ld2 * 1) 
      var lmm2 = (_lmm2 * 1)
      var Lechat2 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm2 > 0 ? `\nMoney: ${lm2}` : ''}${le2 > 0 ? `\nExp: ${le2} *exp*` : ''}${ld2 > 0 ? `\nDiamond: ${ld2} *diamond*` : ''}${lp2 > 0 ? `\nPotion: ${lp2} *potion*` : ''}${lc2 > 0 ? `\nCommon crate: ${lc2} *crate*` : ''}${lu2 > 0 ? `\nUncommon crate: ${lu2} *crate*` : ''}
`.trim()  
      if (user.legendary >= 100) {
      user.legendary -= 100
      user.money += lm2 * 1
      user.diamond += ld2 * 1
      user.exp += le2 * 1
      user.potion += lp2 * 1
      user.common += lc2 * 1
      user.uncommon += lu2 * 1
      m.reply(Lechat2)
      if (lmm2 > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm2} Mythic Crate`)
      user.mythic += lmm2 * 1
      }
      if (ll2 > 0 || lpp2 > 0) {
      m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll2 > 0 ? `\n${ll2} Legendary Crate` : ''}${lpp2 > 0 ? `\n${lpp2} Pet Crate` : ''}`)
      user.legendary += ll2 * 1
      user.pet += lpp2 * 1
      }
      } else m.reply('Legendary crate anda tidak cukup')
      break
     case '1000':
      var _lm3 = `${Math.floor(Math.random() * 2000000)}`.trim()
      var _le3 = `${Math.floor(Math.random() * 5000000)}`.trim()
      var _lp3 = `${Math.floor(Math.random() * 500)}`.trim()
      var _lu3 = `${Math.floor(Math.random() * 1000)}`.trim()
      var _lc3 = `${Math.floor(Math.random() * 2500)}`.trim()
      var _ll3 = `${Math.floor(Math.random() * 51)}`.trim()
      var _lpp3 = `${Math.floor(Math.random() * 222)}`.trim()
      var _ld3 = `${Math.floor(Math.random() * 250)}`.trim()
      var _lmm3 = `${Math.floor(Math.random() * 111)}`.trim()
      var lm3 = (_lm3 * 1)
      var le3 = (_le3 * 1)
      var lp3 = (_lp3 * 1) 
      var lu3 = (_lu3 * 1) 
      var lc3 = (_lc3 * 1) 
      var ll3 = (_ll3 * 1) 
      var lpp3 = (_lpp3 * 1)       
      var ld3 = (_ld3 * 1) 
      var lmm3 = (_lmm3 * 1)
      var Lechat3 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm3 > 0 ? `\nMoney: ${lm3}` : ''}${le3 > 0 ? `\nExp: ${le3} *exp*` : ''}${ld3 > 0 ? `\nDiamond: ${ld3} *diamond*` : ''}${lp3 > 0 ? `\nPotion: ${lp3} *potion*` : ''}${lc3 > 0 ? `\nCommon crate: ${lc3} *crate*` : ''}${lu3 > 0 ? `\nUncommon crate: ${lu3} *crate*` : ''}
`.trim()  
      if (user.legendary >= 1000) {
      user.legendary -= 1000
      user.money += lm3 * 1
      user.diamond += ld3 * 1
      user.exp += le3 * 1
      user.potion += lp3 * 1
      user.common += lc3 * 1
      user.uncommon += lu3 * 1
      m.reply(Lechat3)
      if (lmm3 > 0) {
      m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm3} Mythic Crate`)
      user.mythic += lmm3 * 1
      }
      if (ll3 > 0 || lpp3 > 0) {
      m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll3 > 0 ? `\n${ll3} Legendary Crate` : ''}${lpp3 > 0 ? `\n${lpp3} Pet Crate` : ''}`)
      user.legendary += ll3 * 1
      user.pet += lpp3 * 1
      }
      } else m.reply('Legendary crate anda tidak cukup')
      break
      default:
      return m.reply(Lmao)
      }
      break
    case 'pet':
      var _mknp = pickRandom([1, 2, 1, 5, 3, 2, 1, 2, 4, 1, 3, 5, 2, 4, 3])
      var mknp = (_mknp * 1)
      var kucing = user.cat
      var rubah = user.fox
      var kuda = user.horse
      var _pet = `${pickRandom(['kucing', 'rubah', 'kuda'])}`.trim()
      if (user.pet > 0) { 
      user.pet -= 1
      if (_pet == 'kucing' && kucing > 0) {
      user.potion += 2
      user.makananpet += mknp * 1
      m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`)
      } else if (_pet == 'kucing' && kucing == 0) {
      user.cat += 1
      user.makananpet += mknp * 1
      m.reply(`*Selamat Anda mendapatkan pet${_pet} ${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
      } else if (_pet == 'rubah' && rubah > 0) {
      user.potion += 2
      user.makananpet += mknp * 1
      m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`)
      } else if (_pet == 'rubah' && rubah == 0) {
      user.fox += 1
      user.makananpet += mknp * 1
      m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
      } else if (_pet == 'kuda' && kuda  > 0) {
      user.potion += 2
      user.makananpet += mknp * 1
      m.reply(`Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`)
      } else if (_pet == 'kuda' && kuda == 0) {
      user.horse += 1
      user.makananpet += mknp * 1
      m.reply(`*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`)
      } else {
      user.makananpet += mknp * 1
      m.reply(pickRandom(['Anda kurang beruntung', 'Coba buka lagi lain kali, karena gk dapet pet', 'kasian gk dapet pet', 'Mungkin lagi gk hoki dan gk dapet pet', 'wkwkkwkwke']) + '. Anda hanya mendapatkan *' + mknp + '* makanan pet')
      }
      } else m.reply('Pet Crate kamu tidak cukup')
     break
  default:
  return m.reply(bruh)
  }
  }
  break

case 'transfer': {
  if (args.length < 3) {
   return m.reply(`Gunakan format ${prefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${prefix}transfer money 1000 @${m.sender.split`@`[0]}*`)
  } else try {
  var tipe = (args[0] || '').toLowerCase()
  var count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
  var who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
  if(!m.mentionedJid || !args[2]) throw 'Tag salah satu, atau ketik Nomernya!!'
  var user = global.db.users[m.sender]
  var _user = global.db.users[who]
  switch (tipe) {
   case 'money':
    if (user.money >= count * 1) {
    try {
     user.money -= count * 1
     _user.money += count * 1
     m.reply(`Berhasil mentransfer ${emot.money} money sebesar ${count}`)
    } catch (e) {
     user.money += count * 1
     m.reply('Gagal Mentransfer')
    }
    } else m.reply(`Uang kamu tidak mencukupi untuk mentransfer ${emot.money} Money sebesar ${count}`)
    break
   case 'limit':
    if (user.limit >= count * 1) {
    try {
     user.limit -= count * 1
     _user.limit += count * 1
     m.reply(`Berhasil mentransfer ${emot.limit} limit sebesar ${count}`)
    } catch (e) {
     user.limit += count * 1
     m.reply('Gagal Mentransfer')
    }
    } else m.reply(`Uang kamu tidak mencukupi untuk mentransfer ${emot.limit} Limit sebesar ${count}`)
    break
   case 'potion':
    if (user.potion >= count * 1) {
    try {
     user.potion -= count * 1
     _user.potion += count * 1
     m.reply(`Berhasil mentransfer ${count} ${emot.potion} Potion`)
    } catch (e) {
     user.potion += count * 1
     m.reply('Gagal Menstransfer')
     console.log(e)
    }
    } else m.reply(`${emot.potion} Potion kamu tidak cukup`)
    break
   case 'sampah':
    if (user.sampah >= count * 1) {
    try {
     user.sampah -= count * 1
     _user.sampah += count * 1
     m.reply(`Berhasil mentransfer ${count} ${emot.trash} Sampah`)
    } catch (e) {
     user.sampah += count * 1
     m.reply('Gagal Menstransfer')
     console.log(e)
    }
    } else m.reply(`${emot.trash} Sampah kamu tidak cukup`)
    break
   case 'diamond':
    if (user.diamond >= count * 1) {
    try {
     user.diamond -= count * 1
     _user.diamond += count * 1
     m.reply(`Berhasil mentransfer ${count} ${emot.diamond} Diamond`)
    } catch (e) {
     user.diamond += count * 1
     m.reply('Gagal Menstransfer')
     console.log(e)
    }
    } else m.reply(`${emot.diamond} Diamond kamu kamu tidak cukup`)
    break
   case 'common':
     if (user.common >= count * 1) {
     try {
      user.common -= count * 1
      _user.common += count * 1
      m.reply(`Berhasil mentransfer ${count} ${emot.common} Common Crate`)
     } catch (e) {
      user.common += count * 1
      m.reply('Gagal Menstransfer')
      console.log(e)
     }
     } else m.reply(`${emot.common} Common crate kamu kamu tidak cukup`)
     break
    case 'uncommon':
     if (user.uncommon >= count * 1) {
     try {
      user.uncommon -= count * 1
      _user.uncommon += count * 1
      m.reply(`Berhasil mentransfer ${count} ${emot.uncommon} Uncommon Crate`)
     } catch (e) {
      user.uncommon += count * 1
      m.reply('Gagal Menstransfer')
      console.log(e)
     }
     } else m.reply(`${emot.uncommon} Uncommon crate kamu kamu tidak cukup`)
     break
    case 'mythic':
     if (user.mythic >= count * 1) {
     try {
      user.mythic -= count * 1
      _user.mythic += count * 1
      m.reply(`Berhasil mentransfer ${count} ${emot.mythic} Mythic Crate`)
     } catch (e) {
      user.mythic += count * 1
      m.reply('Gagal Menstransfer')
      console.log(e)
     }
     } else m.reply(`${emot.mythic} Mythic crate kamu kamu tidak cukup`)
     break
    case 'legendary':
     if (user.legendary >= count * 1) {
     try {
      user.legendary -= count * 1
      _user.legendary += count * 1
      m.reply(`Berhasil mentransfer ${count} ${emot.legendary} Legendary Crate`)
     } catch (e) {
      user.legendary += count * 1
      m.reply('Gagal Menstransfer')
      console.log(e)
     }
     } else m.reply(`${emot.legendary} Legendary crate kamu kamu tidak cukup`)
     break
  default:
  return m.reply(`Gunakan format ${prefix}transfer <type> <jumlah> <@tag>\n\ncontoh penggunaan: *${prefix}transfer money 100 @${m.sender.split`@`[0]}*\n\n*List yang bisa di transfer*\n${emot.money} Money\n${emot.limit} Limit\n${emot.potion} Potion\n${emot.trash} Sampah\n${emot.diamond} Diamond\n${emot.common} Common\n${emot.uncommon} Uncommon\n${emot.mythic} Mythic\n${emot.legendary} Legendary`)
  }
  } catch (e) {
  m.reply(`Format yang anda gunakan salah\n\nGunakan format ${prefix}transfer <type> <jumlah> <@tag>\n\ncontoh penggunaan: *${prefix}transfer money 1000 @${m.sender.split`@`[0]}*`)
    }
  }
  break

case 'buatatm': case 'buat atm': {
  var user = global.db.users[m.sender]
  if (user.atm > 3) throw 'Tidak Dapat Membuat Atm Lagi Karena Kamu Sudah Memiliki 3 Atm'
  if (user.money < 10000 || user.diamond < 1) throw 'Barang Tidak Cukup Untuk Membuat Atm, Dibutuhkan Money Sebesar 10000 Dan 1 Diamond Untuk Membuat Atm'
  user.money -= 10000 * 1
  user.diamond -= 1 * 1
  user.atm += 1
  user.fullatm += 5000000
  m.reply('Sukses Menbuat 1 Atm 💳')
  }
  break
case 'nabung': {
  var xpperlimit = 1
  var user = global.db.users[m.sender]
  if (!text) throw 'Masukkan Jumlah Money Yang Ingin Di Tabung'
  if (isNaN(text)) throw 'Hanya Support Angka'
  if (user.atm == 0) throw 'Kamu Belum Punya Atm, Silahkan Buat Dengan Cara .buatatm'
  if (user.bank > user.fullatm) throw 'Uang Di Bankmu Sudah Penuh'
  if (text > user.fullatm - user.bank) throw 'Uangnya Ga Muat Di Bank'
  if (user.money >= xpperlimit * text) {
   user.money -= xpperlimit * text
   user.bank += text
   m.reply(`Sukses Menabung Sebesar ${text} Money ${emot.money}`)
  } else m.reply(`Uang Anda Tidak Mencukupi Untuk Menabung ${text} Money ${emot.money}`)
  }
  break
case 'tarik': {
  var xpperlimit = 1
  var user = global.db.users[m.sender]
  if (!text) throw 'Masukkan Jumlah Money Yang Ingin Di Tabung'
  if (isNaN(text)) throw 'Hanya Support Angka'
  if (user.atm == 0) throw 'Kamu Belum Punya Atm, Silahkan Buat Dengan Cara .buatatm'
  if (user.bank >= xpperlimit * text) {
   user.money -= xpperlimit * text
   user.bank += text
   m.reply(`Sukses Menarik Sebesar ${text} Money ${emot.money}`)
  } else m.reply(`Uang Anda Tidak Mencukupi Untuk Ditarik Sebesar ${text} Money ${emot.money}`)
  }
  break
case 'bank': {
  var user = global.db.users[m.sender]
  var capt = `*BANK USER 🏦*\n
📛 Name : ${pushname}
💳 Atm : ${user.atm > 0? 'Level '+user.atm : 'Belum Punya ❎'}
🏦 Bank : ${user.bank}/${user.fullatm}
${emot.money} Money : ${user.money}
💌 Status : ${isOwner? 'Premium' : user.premium? 'Premium' : 'Bukan Premium'}
`
  var btnrpg = [{ buttonId: `profile`, buttonText: { displayText: 'Profile 👦' }, type: 1 }]
  ichi.sendButtonText(m.chat, btnrpg, capt, global.ownerName, m)
  }
  break

case 'inv': case 'inventori': case 'inventory': {
  var user = global.db.users[m.sender]
  var healt = user.health
  var sword = user.sword
  var armor = user.armor 
  var budak = user.budak
  var pet = user.pet
  var kucing = user.cat
  var _kucing = user.babycat
  var rubah = user.fox
  var _rubah = user.babyfox
  var kuda = user.horse
  var _kuda = user.babyhorse
  var diamond = user.diamond
  var potion = user.potion
  var common = user.common
  var makananpet = user.petFood
  var uncommon = user.uncommon
  var mythic = user.mythic
  var legendary = user.legendary
  var level = user.level
  var money = user.money
  var exp = user.exp
  var limit = user.limit
  var sampah = user.sampah
  var { max } = xpRange(level, exp, global.multiplier)
  var sortedmoney = Object.entries(global.db.users).sort((a, b) => b[1].money - a[1].money)
  var sortedlevel = Object.entries(global.db.users).sort((a, b) => b[1].level - a[1].level)
  var sorteddiamond = Object.entries(global.db.users).sort((a, b) => b[1].diamond - a[1].diamond)
  var sortedpotion = Object.entries(global.db.users).sort((a, b) => b[1].potion - a[1].potion)
  var sortedsampah = Object.entries(global.db.users).sort((a, b) => b[1].sampah - a[1].sampah)
  var sortedcommon = Object.entries(global.db.users).sort((a, b) => b[1].common - a[1].common)
  var sorteduncommon = Object.entries(global.db.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
  var sortedmythic = Object.entries(global.db.users).sort((a, b) => b[1].mythic - a[1].mythic)
  var sortedlegendary = Object.entries(global.db.users).sort((a, b) => b[1].legendary - a[1].legendary)
  var usersmoney = sortedmoney.map(v => v[0])
  var usersdiamond = sorteddiamond.map(v => v[0])
  var userspotion = sortedpotion.map(v => v[0])
  var userssampah = sortedsampah.map(v => v[0])
  var userslevel = sortedlevel.map(v => v[0])
  var userscommon = sortedcommon.map(v => v[0])
  var usersuncommon = sorteduncommon.map(v => v[0])
  var usersmythic = sortedmythic.map(v => v[0])
  var userslegendary = sortedlegendary.map(v => v[0])
  var str = `
Inventory *${pushname}*\n
${emot.health}️ Health: *${healt}*
${emot.sword}️ Sword: *${sword == 0 ? 'Tidak Punya' : '' || sword == 1 ? 'Stone Sword' : '' || sword == 2 ? 'Iron Sword' : '' || sword == 3 ? 'Gold Sword' : '' || sword == 4 ? 'Diamond Sword' : '' || sword == 5 ? 'Netherite Sword' : ''}*
${emot.armor} Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*\n
${emot.money} Money: *${money}*
📈 Level: *${level}*
${emot.exp} Exp: *${exp}*
${emot.limit} Limit: *${limit}*\n
*Inventory*
${emot.diamond} Diamond: *${diamond}*
${emot.potion} Potion: *${potion}*
${emot.trash} Sampah: *${sampah}*
🥫 Makanan Pet: *${makananpet}*
Total inv: *${diamond + potion + sampah + makananpet}* item\n
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*🎁 Crate*
${emot.common} Common: *${common}*
${emot.uncommon} Uncommon: *${uncommon}*
${emot.mythic} Mythic: *${mythic}*
${emot.legendary} Legendary: *${legendary}*
📬 Pet: *${pet}*\n
${emot.budak} Budak: *${budak == 0 ? 'Tidak Punya' : '' || budak == 1 ? 'Level 1' : '' || budak  == 2 ? 'Level 2' : '' || budak == 3 ? 'Level 3' : '' || budak == 4 ? 'Level 4' : '' || budak == 5 ? 'Level MAX' : ''}*

*🦉 Pet*
${emot.horse} Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
${emot.fox} Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
${emot.cat} Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*\n\n
*⌚ Progres...*
╭────────────────
│Level *${level}* To Level *${level}*
│Exp *${exp}* -> *${max}*
╰────────────────
╭────────────────
│Budak ${budak == 0 ? 'Tidak Punya' : '' || budak > 0 && budak < 5 ? `Level *${budak}* To level *${budak + 1}*\n│Exp *${_budak}* -> *${budak *100}*` : '' || budak == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────\n
*🏆 Achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
`.trim()
  m.reply(str)
  }
  break

case 'lb': {
  var leaderboards = [
  'level',
  'exp',
  'limit',
  'money',
  'iron',
  'gold',
  'diamond',
  'sampah',
  'potion',
  'petFood',
  'kayu',
  'batu',
  'common',
  'uncommon',
  'mythic',
  'legendary',
  'pet'
  ]
  
  var users = Object.entries(global.db.users).map(([key, value]) => {
  return { ...value, jid: key }
  })
  var leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
  var tipe = (args[0] || '').toLowerCase()
  var getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 25)
  var wrong = `
Gunakan format *${prefix}${command} [type] [page]*
Contoh : *${prefix}${command} money 1*

📍 List Barang
${leaderboard.map(v => `
${v}
`.trim()).join('\n')}
`.trim()
  if (!leaderboard.includes(tipe)) return m.reply(wrong)
  var page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(tipe)) : 0
  var sortedItem = users.map(toNumber(tipe)).sort(sort(tipe))
  var userItem = sortedItem.map(enumGetKey)
  // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  var lbtext = `
• *Leaderboard ${tipe} ${page} Dari ${getPage(tipe)}* •
Kamu : *${userItem.indexOf(m.sender) + 1}* of *${userItem.length}*

${sortedItem.slice(page * 25, page * 25 + 25).map((user, i) => `${i + 1}. ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `📛 ${ichi.getName(user.jid)} \n    🔗 wa.me/` : '@'}${user.jid.split`@`[0]} \n    🍒 *${user[tipe]} ${tipe}*`).join`\n`}
`.trim()
  ichi.sendMessage(m.chat, { text: lbtext, mentions: [...userItem.slice(page * 25, page * 25 + 25)].filter(v => !participants.some(p => areJidsSameUser(v, p.id))) }, { quoted : m })
  }
  break

case 'listprem': {
  if (!isOwner) return m.reply(mess.botOwner)
  var user = Object.entries(global.db.users).filter(user => user[1].premiumTime).map(([key, value]) => {
  return { ...value, jid: key }
  })
  var name = '🌟 Premium'
  var premTime = global.db.users[m.sender].premiumTime
  var prem = global.db.users[m.sender].premium
  var waktu = msToDate(`${premTime - new Date() * 1} `)
  var sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
  var len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
  var lprem = `*LIST PREMIUM*
┌✦ *My Premium Time:*
┊• *Name:* ${ichi.getName(m.sender)}
${isOwner? '┊• *Premium Time:* Only Premium ✅' : prem ? `${msToDate (premiumTime - new Date() * 1)}` : '┊• *Premium Time:* Expired 🚫'}
┗━═┅═━––––––๑

•·–––––––––––––––––––––·•
${sortedP.slice(0, len).map(({ jid, name, premiumTime, registered }, i) => `\n\n┌✦ ${registered ? name : ichi.getName(jid)}\n┊• wa.me/${jid.split`@`[0]}\n${premiumTime > 0 ? `${clockString (premiumTime - new Date() * 1)}` : '┊ *EXPIRED 🚫*'}`).join`\n┗━═┅═━––––––๑`}
┗━═┅═━––––––๑`.trim()
  ichi.sendMessage(m.chat, { text: lprem }, { quoted : m })
  setTimeout(() => {
  if (db.chats[m.chat].deletemedia) ichi.deleteMessage(m.chat, key)
  }, db.chats[m.chat].deletemediaTime)
  }
  break

case 'backup': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: '𝙳 𝙰 𝚃 𝙰 𝙱 𝙰 𝚂 𝙴', jpegThumbnail: global.thumb, }}}
  var d = new Date
  var date = d.toLocaleDateString('id', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  m.reply(mess.done)
  ichi.sendMessage(global.Rowner + '@s.whatsapp.net', { text: `*🗓️ Database & Session :* ${date}` }, { quoted : m })
  ichi.sendMessage(global.Rowner + '@s.whatsapp.net', {document: fs.readFileSync('./storage/db.json'), mimetype: 'application/json', fileName: `db.json`}, { quoted : fdoc })
  ichi.sendMessage(global.Rowner + '@s.whatsapp.net', {document: fs.readFileSync(`./${global.sessionName}.json`), mimetype: 'application/json', fileName: `${global.sessionName}.json`}, { quoted : fdoc })
  }
  break

  }
  } catch (err) {
  m.reply(util.format(err))
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
