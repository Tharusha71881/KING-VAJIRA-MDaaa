/**
//---------------------------------------------------------------------------
██╗░░░██╗░█████╗░░░░░░██╗██╗██████╗░░█████╗░░░░░░███╗░░░███╗██████╗░
██║░░░██║██╔══██╗░░░░░██║██║██╔══██╗██╔══██╗░░░░░████╗░████║██╔══██╗
╚██╗░██╔╝███████║░░░░░██║██║██████╔╝███████║░░░░░██╔████╔██║██║░░██║
░╚████╔╝░██╔══██║██╗░░██║██║██╔══██╗██╔══██║░░░░░██║╚██╔╝██║██║░░██║
░░╚██╔╝░░██║░░██║╚█████╔╝██║██║░░██║██║░░██║░░░░░██║░╚═╝░██║██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░
//---------------------------------------------------------------------------
**/

const { tlang,cmd } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const Config = require('../config')
const axios = require('axios')
// Put here your url with modified words and urls
const url = 'https://gist.github.com/vajirabot1/9dd585014e2742484992c93d008531d4/raw'

/**
 cmd({
            pattern: "autosticker",
            category: "owner",
            use: '',
        },
**/ 
cmd({ on: "text" }, async (Void,citel,text,{isCreator})=> {
  let { data } = await axios.get(url)
  for (vr in data){
 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) await Void.sendMessage(citel.chat,{image: { url : data[vr]},package: 'made by vajira'},{ quoted: citel })   
}
})


 
