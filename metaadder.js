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
    var ts = +new Date;
    fileReader('./index.html').then( htmlData => {
            if(resumeData.about.metaTags)
            {
                const newHTML = htmlData.replace(/(\<meta property[^\>]+\>\s*)+/, 
                                resumeData.about.metaTags.map(({property, value}) => templaters(property,value)).join('\n\t\t')+'\n\t\t')
                                .replace(/\?v=[^"]*/g, '?v='+ ts)
                fs.writeFile('./index.html', new Uint8Array(Buffer.from(newHTML)), ()=>{console.log('wrote file!')})
            }
        }
    )
})
