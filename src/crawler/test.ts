import puppeteer from 'puppeteer'

(async function(){
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https:www.bilibili.com/')
  // await page.screenshot({path:'bili.png'})
  // const content = await page.content()
  const infoBoxes = await page.$$(".bili-live-card")
  console.log('2222',infoBoxes)
  for(let box of infoBoxes){
    const p = await box.$('.bili-live-card__info--tit span')
    const title = await p.evaluate(el=>el.innerHTML)
    console.log({title})
    console.log('1111')
  }
  // console.log(content)
  await browser.close()
})()