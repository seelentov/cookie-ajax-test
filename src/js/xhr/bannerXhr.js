export const bannerXhr = () => {

var xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  '/files/database/banner.json',
  true
)
xhr.send()

const bannerTexts = document.querySelector('.banner__quad')
const bannerImgs = document.querySelector('.banners__bg')

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) {
    return
  }

  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText)

    let i = 0;

    for(let item in data){
      let thisData = data[item]
      let isDisable = i === 0 ? '' : 'disabled'
      i = 1;

      let thisItemImg;
      let thisItemText;

      thisItemImg = `
      <div class="banner__bg" index="0" style='background: url(${thisData.img}) 0 0 no-repeat;
        background-size: cover;
    background-position-x: center;'></div>
      `
      thisItemText = `
      <div class="banner__text ${isDisable}">
            <div class="banner-text__top text-min">
            ${thisData.text.promo}
            </div>
            <div class="banner-text__header text-big">
            ${thisData.text.header}
            </div>
            <div class="banner-text__desc">
            ${thisData.text.desc}
            </div>
            <a class="banner-text__btn btn" href='#'>
            ${thisData.text.button}
              <img src="/img/icon-arrow-right.svg" alt="">
            </a>
          </div>
      `
      bannerImgs.innerHTML+=thisItemImg
      bannerTexts.innerHTML+=thisItemText
    }
  } else {
    console.log('Banner err', xhr.responseText)
  }
}
}
