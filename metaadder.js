const fs = require('fs');
function templaters(tag, url){
    return `<meta property="${tag}" content="${url}"/>`
}
const fileReader = function (path){
                        return new Promise((resolve, reject)=>{
                            fs.readFile(path, (err, data) => {
                                if (err) reject(err)
                                resolve(Buffer.from(data).toString());
                            })
                        });
                    }
fileReader('./data.js').then(fileData => {
    eval(fileData);
    fileReader('./index.html').then( htmlData => {
            const newHTML = htmlData.replace('<!--open graph items-->', 
                templaters('og:image', resumeData.about.metaImg) + ' ' + 
                templaters('og:description', resumeData.about.metaDescription))
            console.log(newHTML);
            fs.writeFile('./index.html', new Uint8Array(Buffer.from(newHTML)), ()=>{console.log('wrote file!')})
        }
    )
        
})