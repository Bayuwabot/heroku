// apikey nya punya lu bang tinggal daftar di link apikey/beli apikey nya trus taro
//THANKS TO :
//Nurutomo
//BAYU OFC
//RTeam1
//Dan Creator Bot Lainnya
//Jangan Hapus Thanks To Nanti Emror
let fs = require('fs')
let chalk = require('chalk')
let tum1 = fs.readFileSync('./gambar1.jpeg')
let tum2 = fs.readFileSync('./gambar2.jpeg')
//let tum3 = fs.readFileSync('./gambar3.jpeg')
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let { performance } = require('perf_hooks')
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
runtime = process.uptime()
teks = `${kyun(runtime)}`
run = `${kyun(runtime)}`

global.owner = ['6289637006225']// Put your number here

global.mods = ['6289637006225'] // Want some help?
global.prems = ['6289637006225'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  //kalo mau dapetin apikeynya daftar link dibawah
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'AbilGanss',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
// var sticker_name = 'I hope you\'re fine'
//var sticker_author = 'Nurutomo'
var sticker_name = 'X4R-BOT' // ganti aja
var sticker_author = 'Zeex Store' // ganti aja
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author


global.multiplier = 69 // The higher, The harder levelup

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

// Tambahan By Me (BayuuOFC)
gc1 = 'https://chat.whatsapp.com/IyRsvI7WMtFBTpYJrpZPqO'
gc2 = 'https://chat.whatsapp.com/IyRsvI7WMtFBTpYJrpZPqO'
gc3 = 'https://chat.whatsapp.com/IyRsvI7WMtFBTpYJrpZPqO'
namaig = 'https://instagram.com/uzxyy_store04'
linkf = gc1
linkff = namaig
namabot = 'X4R-BOT'
namagithub = 'https://github.com/uzxygg'
gcid = '6289525518325-1406453544'
footer = '6289525518325'
lolkey = 'apikeymu'
global.wait = 'Tunggu Sebentar'
bc = 'Zeexs_store'
titler = 'X4R-BOT'
body = run
kasihcaption = `©X4R-BOT\n\n©BY Zeexs store`
gambar1 = tum1
gambar2 = tum2
