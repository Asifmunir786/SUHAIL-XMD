const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923492147102";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_32_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgODAsXG4gICAgICAgIDgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaWhyM1B0WUZXWFk3ZDZpOXM1TXFXMnZBMTY5Y2RIMXFubE0yWWhNQVRCWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVTVveW1pZkxTbzJrX1JkeE15bVVVUVwiLFxuICBcInBob25lSWRcIjogXCIxNGYxZjJiNS1mNjE4LTQwOGMtOWU4Ni01YzM4ZDczNjljOGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTM0LFxuICAgICAgMTA2LFxuICAgICAgODcsXG4gICAgICAyNDYsXG4gICAgICAxNCxcbiAgICAgIDEwLFxuICAgICAgMjExLFxuICAgICAgOTEsXG4gICAgICA2NixcbiAgICAgIDEzNCxcbiAgICAgIDEwMixcbiAgICAgIDE1NCxcbiAgICAgIDE3OCxcbiAgICAgIDIxNSxcbiAgICAgIDIwMixcbiAgICAgIDkzLFxuICAgICAgMjIwLFxuICAgICAgMTA1LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMjI0LFxuICAgICAgMjEyLFxuICAgICAgMTM2LFxuICAgICAgMTQxLFxuICAgICAgMTE0LFxuICAgICAgMjAyLFxuICAgICAgNTgsXG4gICAgICAxOTUsXG4gICAgICA4OCxcbiAgICAgIDE3OSxcbiAgICAgIDc5LFxuICAgICAgMjAzLFxuICAgICAgMzEsXG4gICAgICAxNTYsXG4gICAgICAyOSxcbiAgICAgIDUzLFxuICAgICAgODYsXG4gICAgICAxODEsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkM2RjZLNzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ5MjE0NzEwMjo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmbDwnZqC8J2ZuPCdmbUg8J2agvCdmbfwnZm08J2Zt/CdmonwnZmw8J2Zs/CdmbBcIixcbiAgICBcImxpZFwiOiBcIjE3MTUwNjk2OTY2NTYyODo5NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORy9udllGRU4zWGdib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllGdUdjemdEOVRad20rQW1UcU00NnU4VFA0bW44d3dTK0NrdUZ5Qzd4V1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidGIzdlllMlh0SHVqUFZSc0ZJaWh5KzVEL3hhbzUxVi85N0FhVnlyK01RU0taVjVrWmovajdUaGZuUVJXbE91SEJ1TWpwNFBmT1JQczZDNjJob21FQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOXhTSVRzbGZzeVdCWThmM2FNV21MWlp1L0ZibHdhNmRDeGRQVGp2cmlRL2p6MUkzaTJGUTgraTgzVnBoNjNack1VelJGcDYwRzB0am9JU0dGaTVqaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDkyMTQ3MTAyOjk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjI3NTE2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUo1d1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjV3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNVNEcjhQSy9wRkdLRVMrVUYxODcwRms3NEJVSk5IRStQbjN5b0ZNU1FBRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTkwMTQwODc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
