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
    console.log('browser is opened !')
    return browser.pages()
  })
  .then(function (pages) {
    tab = pages[0]
    return tab.goto('https://www.hackerrank.com/auth/login')
  })

  //type email id
  .then(function () {
    return tab.type('#input-1', id)

    // return tab.type("#input-1" , id , {delay : 100}); //both are same , only "delay" function is used to slow the type speed
  })

  //type password
  .then(function () {
    return tab.type('#input-2', password)
    //   return tab.type("#input-2" , password , {delay : 100}); //both are same , only "delay" function is used to slow the type speed
  })

  //click login button
  .then(function () {
    return tab.click(
      '.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled'
    )
  })

  //   wait for promise pending ("#base-card-1-link") and then it will click on interview kit
  //  wait to open "interview kit" selector and then click
  .then(function () {
    return tab.waitForSelector('#base-card-1-link', { visible : true })
  })
  //open "interviw kit"
  .then(function () {
    return tab.click('#base-card-1-link')
  })

  // wait to open "warm up challenges" selector and then click
  .then(function () {
    return tab.waitForSelector('a[data-attr1="warmup"]', { visible : true })
  })
  //open "warm up challenges"
  .then(function () {
      return tab.click('a[data-attr1="warmup"]');
  });

  
