const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94766741926";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_21_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDMyLFxuICAgICAgICA0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdZK0JsbHVTRXM5cVovTGxwNXZDb3JBa0V2RXJMNTlVMkxEb01qdHNKek09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFEUW9NVDhLVDN5RVhQYkczbXRkb3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDZhNWJlZTgtY2IwYS00MDk2LWJkNzMtMDkyZjEyOWU1NGIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDU0LFxuICAgICAgMjA3LFxuICAgICAgMTc5LFxuICAgICAgMTA2LFxuICAgICAgODgsXG4gICAgICAxOTEsXG4gICAgICA5MixcbiAgICAgIDEzOSxcbiAgICAgIDkwLFxuICAgICAgMjM1LFxuICAgICAgOCxcbiAgICAgIDE5MixcbiAgICAgIDEwLFxuICAgICAgMjksXG4gICAgICA1LFxuICAgICAgMTY3LFxuICAgICAgNjUsXG4gICAgICA1MCxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxOTksXG4gICAgICAxMCxcbiAgICAgIDEzNSxcbiAgICAgIDQsXG4gICAgICAxOTIsXG4gICAgICA0NCxcbiAgICAgIDE5OCxcbiAgICAgIDcwLFxuICAgICAgNzcsXG4gICAgICAxNDIsXG4gICAgICA2OSxcbiAgICAgIDM0LFxuICAgICAgMTcsXG4gICAgICAxODMsXG4gICAgICAyNDEsXG4gICAgICAxNDQsXG4gICAgICAxMDMsXG4gICAgICA5LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdHUUZDNEsyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2Njc0MTkyNjozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY2MjcxNDA0NTExMzU5OjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpQXMrUUNFUFQvb0xVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVhVcmhudmtJcGFBMTMwTkh1ODBTa2NiY0d2azkrSXBHS0VOS0p3c0x6az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJieHdMaWpzTmxxRTdYR2YvZDQ1V0ZldnRtSWF1Z090U3VwSDBPMUxPTTBuWDQydUJSbFFndHRHTmk5MTIrZlVoS2Vzbm4xQW5sYmtxWkIrdEhxTGZEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSUmY2Z1dZSEZvdDBNSDVRSEo2bGZ2bXNWa1NqdlM5eDJGS28vdmZCTTNoVzQ2OU1aUVhuSkwvNHlYbmJ3b2p6RUVOSGNWQ1NXZE1NeWRnd09lM1FBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2Njc0MTkyNjozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjMwMjQ1NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SHAN",
  packname: process.env.PACK_NAME || "SHAN",
  botname : process.env.BOT_NAME  || "SHAN",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
