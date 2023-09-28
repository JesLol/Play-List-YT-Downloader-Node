const axios = require('axios');
const cheerio  = require('cheerio')

const urlPrueba = 'https://www.youtube.com/playlist?list=PLRpBGgc4QDyfvBz4Z5niiH8W-KfCeF-EQ';
axios.get(urlPrueba)
.then((response)=>{
    if(response.status==200){
        const cheerioObject = cheerio.load(response.data)
        const videosLinks = [];
        cheerioObject('iframe').each((index, element)=>{
            const vidLink = cheerioObject(element).attr('href')
            videosLinks.push(`https://www.youtube.com${vidLink}`)
        })
        console.log(videosLinks);
    }
    else{
        console.log("No se pudo acceder a la lista de reproduccion.")
    }
}).catch((error)=>{
    console.log(`Ha ocurrido un error: ${error}`);
});