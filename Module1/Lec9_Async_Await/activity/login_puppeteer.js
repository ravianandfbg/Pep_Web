const puppeteer = require('puppeteer')
const id = 'rilaj74184@brayy.com'
const password = '123456';

(async function () {
      let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized']
          });
          let pages = await browser.pages();
          let tab = pages[0];
          await tab.goto("https://www.hackerrank.com/auth/login");
          await tab.type('#input-1', id);
          await tab.type('#input-2', password);
          await tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
          console.log("Logged in !!");
}) ();