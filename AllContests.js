const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.stopstalk.com/contests');

  const allContests = await page.evaluate(() => ({
    alldata: document
      .querySelector('#contests-table > tbody')
      .innerText.split('\n'),
  }));

  allContests.alldata.forEach((element, index, thearr) => {
    thearr[index] = element.trim();
  });

  console.log(allContests.alldata);
  await browser.close();
})();
