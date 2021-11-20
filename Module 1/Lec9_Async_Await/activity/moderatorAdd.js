const id = 'rilaj74184@brayy.com'
const pw = "123456";
const puppeteer = require("puppeteer");

async function login(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
    await tab.waitForTimeout(2000);
    let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await element.click();
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible:true});
    let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');
    let manageChallengeLi = bothLis[1];
    await manageChallengeLi.click();
    
    await addModerator(browser , tab);
};
login();

async function addModerator(browser , tab){
      await tab.waitForSelector('.backbone.block-center');
      let allTags = await tab.$$('.backbone.block-center');
      let allQuesLinks = [];
      for(let i = 0 ; i < allTags.length ; i++){
            let quesLink = await tab.evaluate( function(elem) {return elem.getAttribute("href"); }  , allTags[i]);
            quesLink = "https://www.hackerrank.com"+quesLink;
            allQuesLinks.push(quesLink);  
      }

      for(let i = 0 ; i < allQuesLinks.length ; i++){
            let quesLink = allQuesLinks[i];
            let newTab = await browser.newPage();
            await addModeratorToASingleQues(newTab , quesLink);
      }

      // next button active hai to click on next

    let allLis = await tab.$$('.pagination li');
    let nextBtnLi = allLis[allLis.length-2];
    let isDisabled = await tab.evaluate( function(elem){ return elem.classList.contains("disabled");  } , nextBtnLi );
    // if true ??
    if(isDisabled){
        return;
    }
    // else false ??
    await nextBtnLi.click();
    await tab.waitForTimeout(5000);
    await addModerators(browser , tab);
}


async function addModeratorToASingleQues(newTab , quesLink){
      await newTab.goto(quesLink);
      await newTab.waitForTimeout(2000);
      await newTab.click('li[data-tab="moderators"]');
      await newTab.waitForSelector('#moderator' , {visible:true});
      await newTab.type("#moderator" , "Ravi_Anand");
      await newTab.click('.btn.moderator-save');
      await newTab.click('.save-challenge.btn.btn-green');
      await newTab.waitForTimeout(2000);
      await newTab.close();
}
