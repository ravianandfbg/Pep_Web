//npm install puppeteer => install in package.json

const puppeteer = require('puppeteer')
const id = 'rilaj74184@brayy.com'
const password = '123456'
let tab

// puppeteer has promisfied functions

// by default headless = true

let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ['--start-maximized']
})

// Promise<Pending>
browserOpenPromise
  .then(function (browser) {
    console.log('browser is opened !');
    return browser.pages()
  })
  .then(function (pages) {
    tab = pages[0]
    return tab.goto('https://www.hackerrank.com/auth/login');
  })

  //type email id
  .then(function () {
    return tab.type('#input-1', id);

    // return tab.type("#input-1" , id , {delay : 100}); //both are same , only "delay" function is used to slow the type speed
  })

  //type password
  .then(function () {
    return tab.type('#input-2', password);
    //   return tab.type("#input-2" , password , {delay : 100}); //both are same , only "delay" function is used to slow the type speed
  })

  //click login button
  .then(function () {
    return tab.click(
      '.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled'
    );
  })

.then(function () {
    return waitAndClick("#base-card-1-link"); //make this function a promised function
})

.then(function () {
    return waitAndClick('a[data-attr1="warmup"]');
})

.catch(function(err){
    console.log(err);
})
function waitAndClick(selector){
    return new Promise(function(scb,fcb){
        let waitPromise = tab.waitForSelector(selector , {visible : true});
        waitPromise.then(function (){
            let clickPromise = tab.click(selector);
            return clickPromise;
        })
        .then(function (){
            scb();
        })
        .then(function (){
            fcb();
        })
    });
}

  
