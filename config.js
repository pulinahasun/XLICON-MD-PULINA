const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94779554677"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/galle'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94779554677' 
global.devs = '94779554677';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZkZnNrN0hiRE9ETWhNWTFLQUZXR3E2bkN5Zms1OG9weUI4L0h1ZzhHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFdHSktkME0xa3JCaUVlVEJqZ2w4Ym1BdVFHNHFhbloyV2IxcEhhcTBpRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFS0lORm5kTWkwQkh6Z3RGVGZEa0xNSmNoSncyckhYSXZTaW9MUW9WeFhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOSU9yYmNraWdnN1RTQ2s4VzhQNGs4cCtEZ0tzVXFZTzFCRVNGVjhFeVg4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCbTQ2dWsyN20xVzluWjkvVmlRdkw5OEltNTQ0akVhWGFEVUM2Ymh6a289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVRMzI2eTU2aUcybHVIbXBSNFBkUk1TTklrQTM3RXdZYkhQajZ3SFFuMEE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1ajlhRy9peVJ5L3hoMnAwdWdDUXlVcUUzVEdPWitxRVZsaUIyRzk3RFh0cE14dXoyb01XNlU0Mi9JZ0VlM2lrczFGMnZRVnZVZmxTeFpXRXkwRWZnUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0MSwiYWR2U2VjcmV0S2V5IjoiczZFcWFOOG96S2VyK1YxWmFlb2FzemM4WmNkZXNmNVkzcVBHSmRsU293VT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRnQ2djlnSFRURjJTRjVqTExHVGg2USIsInBob25lSWQiOiIwZjViMzBhZC0zYWJlLTRkZjctOWQ2Ni0wZWMxMmQ4ZGRiZWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlc1NHU3WFJVVDFGa3RGWFlHaUk3aVJnM0NVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlWkNpOFFheUxxbGFoeGVmM3pXbHg3K3BLcVE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNYjVyUUVRNUtlY3F3WVlBUT09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjE2bUhrS2FEdmJ2dURvQlhDSFkwUkNMNWRodEV2WTUwd0pkY0ZDeEJBMDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndyZkl0d1ByVitWd0t1UVZ6ZHpKa2JQeW9LOGFaTHM2MldNc0Z4bXNCUFFCaGRmUStLUFdlbWU2T0NkL1VzQkpjb2lQL3BOV0d0MnJlT0djaTZqM0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvYWQ0Tnk0YjVyUlErb1hjUDNOenNmT0RFZ0wzQ0hkZjlJTFpTOVhqcU40THAwdGQrTjRIeUpUUUQ0NGNHNFhqRjA0Vk9oMHVBMW54aFZQN3VscENqdz09In0sIm1lIjp7ImlkIjoiOTQ3Nzk1NTQ2Nzc6MzRAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Nzk1NTQ2Nzc6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGVwaDVDbWc3Mjc3ZzZBVndoMk5FUWkrWFliUkwyT2RNQ1hYQlFzUVFOTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTI1NDExOX0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@MUSIC STATION',
  packname:  process.env.PACK_NAME || 'PULINA_X',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'PULINAOFC' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IAM ALIVE' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
