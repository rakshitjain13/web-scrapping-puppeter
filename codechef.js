const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.codechef.com/users/oneday");
  const codechef_user = await page.evaluate(() => ({
    name: document.querySelector("div.plr10 h2").innerText,
    username: document.querySelector("ul.side-nav li span span:nth-child(2)")
      .innerText,
    star: document.querySelector("ul.side-nav li span span").innerText,
    rating: document.querySelector(".rating-number").innerText,
    all_rating: window.all_rating,
    highest_rating: document.querySelector(".rating-header small").innerText,
    global_ranking: document.querySelector(
      "ul.inline-list li:nth-child(1) strong"
    ).innerText,
    country_ranking: document.querySelector(
      "ul.inline-list li:nth-child(2) strong"
    ).innerText,
  }));

  console.log(codechef_user);

  await browser.close();
})();
