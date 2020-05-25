const puppeteer = require('puppeteer');
process.argv.forEach(function (val, index, array) {
    if(index == 2){
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            console.log(`reading https://${val}.github.io/aboutme`)
            await page.goto(`https://${val}.github.io/aboutme`, {waitUntil: 'networkidle0'});
            await page.pdf({path: 'aboutme.pdf', format: 'A4', printBackground: true});
            await browser.close();
        })();
    }
});