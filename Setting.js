const fs = require('fs-extra')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2348039607375' ;
global.mongodb = process.env.MONGODB_URI || "" ; 
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'astromedia0010@outlook.com' ; 
global.github = 'https://github.com/Astropeda/Asta-Md' ;
global.location = 'Nigeria Lagos' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.gurl = '' ; 
global.sudo =  process.env.SUDO || "2348039607375" ;
global.devs = "2348039607375"; //Dont change it
global.mztit = process.env.MZTIT ||"Asta-Md", 
global.Gname = process.env.GNAME ||"Asta-Md-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || '1',
global.waUrl = process.env.WAURL ||"",
global.website = '' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || '' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SUHAIL_12_35_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM0LFxuICAgICAgICA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIsXG4gICAgICAgIDksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MixcbiAgICAgICAgODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhJcnZ1ZkNvOFJ1WTNTbXR3OGdlU3VoSTNuRlBKTjY1Vnc0eVNqZTVsZE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2MzYyMjg2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjIyNDBFMUY4MkVEMEM5OEZBQkM3N0VFMTU3MzhDOUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MzE3MzAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2MzYyMjg2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDlDNUM2NTAzMTc0QTdCRjQ3NTVBRjdEM0RDRjhFRDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MzE3MzA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxlR0JKZWx6UVZpU3p3YlV6REk4QlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTAwMTcwY2YtODBkMC00MzllLWJjNGQtYTJjNDUyZTY3ZGE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDEyMCxcbiAgICAgIDIzMSxcbiAgICAgIDE3NSxcbiAgICAgIDIzNSxcbiAgICAgIDE4NyxcbiAgICAgIDE4NixcbiAgICAgIDIyOCxcbiAgICAgIDE0LFxuICAgICAgNDIsXG4gICAgICA5LFxuICAgICAgMTk4LFxuICAgICAgNzAsXG4gICAgICAxOTUsXG4gICAgICAxODYsXG4gICAgICAxNTYsXG4gICAgICAxNzQsXG4gICAgICAxNDAsXG4gICAgICAzMyxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDEwOSxcbiAgICAgIDE0MyxcbiAgICAgIDIyNCxcbiAgICAgIDE4MCxcbiAgICAgIDE3MyxcbiAgICAgIDUwLFxuICAgICAgMTYsXG4gICAgICAyMTEsXG4gICAgICA2NCxcbiAgICAgIDEwOCxcbiAgICAgIDEzOSxcbiAgICAgIDExOCxcbiAgICAgIDEzOSxcbiAgICAgIDEwMyxcbiAgICAgIDQ2LFxuICAgICAgNTUsXG4gICAgICA1OCxcbiAgICAgIDM5LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGV041S0VFR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MzYyMjg2OTo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjI3NTgyNzExNjM6NjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSnVkZXggT255ZWt3ZWx1XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9LanBzRUVQS0ZscmNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvSG5ZOW0veFBrQjNOUFhzcitwL1hmaTF2NkFrRnRmK2dqeFJrcFA3NmtnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInQ3R29FWGxXcUtBa2IycTh5OHNnVzFFMStDL1RreDlwYldobkxuQ3lobThtZlVSK1hsQWNpVVh6WHRQQzJiWHFLdHlkNHBDWWgyd2UwVTE2djRGS0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpYUWxlSjhoTlVQYnZXc2lWTXNRR1g2UjRMdzBuSG44R1RKQjhOTkdhRlVwWS9JK082cFJoK2t5eHN6VGVPeWRrc1hoaXpyaTRpTlB4VTdhUlN3dEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjM2MjI4Njk6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYzMTczMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEdzBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR3MC5qc29uIjogIntcImtleURhdGFcIjpcIkU4TUxhL013a3ZPL3ErK2JObUNmT2I5Q25nSU5jSDloZWxIbWtBSlRubW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzMDYwMzg1NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2MzE3MzAzMDc4XCJ9Igp9',
  botname: process.env.BOT_NAME || 'Asta-Md',
  ownername:  process.env.OWNER_NAME || `Astro`,
  author:  process.env.PACK_AUTHER || 'Astro', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_NAME || "Asta-Md" , 
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', 
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7",
  caption :process.env.CAPTION || "\t*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Asta-Md* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'V.4.5.0',
  LANG: process.env.THEME|| 'Asta_Md',
  menu : process.env.MENU || '',
  WORKTYPE: process.env.WORKTYPE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
