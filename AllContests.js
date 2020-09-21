const { listenerCount } = require('process');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://clist.by/');

  const allContests = await page.evaluate(() => {
              var li=[];
              var arr = Array.from(
                document.querySelectorAll(".data-ace"));
                for (var i = 0; i < arr.length; i++) {
                  var te = JSON.parse(arr[i].dataset["ace"]);
                      if(te.location=="codechef.com")
                        li.push(te);
  
                }
                return li;

  });

  console.log(allContests);
  await browser.close();
})();
