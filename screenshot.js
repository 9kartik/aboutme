const puppeteer = require('puppeteer');
/*
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://9kartik.github.io/aboutme', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'aboutme.pdf', format: 'A4', printBackground: true});
  await browser.close();
})();*/
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});