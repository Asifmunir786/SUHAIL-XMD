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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923492147102";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_04_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDY3LFxuICAgICAgICA1MixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0LFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNSxcbiAgICAgICAgNixcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNixcbiAgICAgICAgMTA2LFxuICAgICAgICA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzksXG4gICAgICAgIDgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYcS9qS0Mxc2NYK2NOdTNxR250cDBiY09vOVhKays1R2xyeVo4WUp3bTFrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGMlM1ZVNna1EwZU8xSUN2Sm9xbUlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA4NjJjNmI0LTRmMmQtNDAwMi04MjA1LTExNDIzYWNjNTAxZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICAyMixcbiAgICAgIDEzNSxcbiAgICAgIDE0OCxcbiAgICAgIDIsXG4gICAgICA0MCxcbiAgICAgIDE2NyxcbiAgICAgIDk5LFxuICAgICAgMTMzLFxuICAgICAgMjMyLFxuICAgICAgMTEzLFxuICAgICAgMTg5LFxuICAgICAgMTUxLFxuICAgICAgMjIsXG4gICAgICAyNDEsXG4gICAgICAyMzUsXG4gICAgICAyMyxcbiAgICAgIDE4MSxcbiAgICAgIDIyOSxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMTYxLFxuICAgICAgNSxcbiAgICAgIDcsXG4gICAgICAxNDEsXG4gICAgICAyMTcsXG4gICAgICA2MSxcbiAgICAgIDEwNixcbiAgICAgIDIyMCxcbiAgICAgIDg5LFxuICAgICAgMjE2LFxuICAgICAgNTgsXG4gICAgICAyMDgsXG4gICAgICAyNDMsXG4gICAgICAxOTQsXG4gICAgICAxMDgsXG4gICAgICAxMzAsXG4gICAgICAyMTIsXG4gICAgICAyMTQsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1BYODNNTkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ5MjE0NzEwMjo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcxNTA2OTY5NjY1NjI4OjY1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056M3k3d0VFSWE1M0xrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVpTZ0JMVEZzOENsajQ3VjQ2TWJtM2FkcENuc2Y1dThiY1JLVTFBYnVTQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaWjZYLzhUS3VTT1gzZkFiYnp1ZzZSUlFoNndYU3JxZm04bUdzTy9ER0VWbEo5a25ibHpLWkNXTWQxUk90YVh4eUpFTlEvZklqeC92MWhidUZJdjZEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4eFBuUnVNSzNzTmd0TzdSMitEVWRYZUtGVWlqaUFpNFVaUC9Gbzc1VWZYNkQ5SjBIMDUvNXVVVTBTOUpFUXpPUkFXREpHam93VjhzbGU1ZithcjRDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTIxNDcxMDI6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2NjUwMzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMVzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxXOS5qc29uIjogIntcImtleURhdGFcIjpcInpSU0draGRncHZwYlZsNmxhbnZzdDhnUm5hcnplcUV4MjRSKzl2MDF6Smc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIwMDgxNTA2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
