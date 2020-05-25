const puppeteer = require('puppeteer');
process.argv.forEach(function (val, index, array) {
    if(index == 2){
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(`https://${val}.github.io/aboutme`, {waitUntil: 'networkidle2'});
            await page.pdf({path: 'aboutme.pdf', format: 'A4', printBackground: true});
            await browser.close();
        })();
    }
});