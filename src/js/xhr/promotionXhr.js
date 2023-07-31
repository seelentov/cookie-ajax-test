export const promotionXhr = () => {

var xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  '/files/database/promotion.json',
  true
)
xhr.send()

const promotionItems = document.querySelector('.promotion__container')

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) {
    return
  }

  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText)
      let firstBanner = data['item-1'];
      let secondBanner = data['item-2'];
      let thirdBanner = data['item-3'];
      let fourthBanner = data['item-4'];

      promotionItems.innerHTML = `
      <article class="promotion__item promotion-item-small" style="background:${firstBanner.bgColor}">
      <div class="promotion-item__text" style='color:inherit'>
        <div class="promotion-item__number text-big">
          01
        </div>
        <div class="promotion-item__header">
          ${firstBanner.header}
        </div>
        <button onclick="window.location.href = '${firstBanner.src}'" class="promotion-item__btn btn">
          <img src="/img/icon-arrow-right.svg" alt="" style="transform: rotate(180deg);object-fit: none;height: 100%;">
        </button>
      </div>
      <div class="promotion-item__img">
      <img src="${firstBanner.img}" alt="" >
      </div>
    </article>
    <article class="promotion__item promotion-item-big" style="background:${secondBanner.bgColor}">
      <div class="promotion-item__text" style='color:inherit'>
        <div class="promotion-item__number text-big">
          01
        </div>
        <div class="promotion-item__header">
          ${secondBanner.header}
        </div>
        <button onclick="window.location.href = '${secondBanner.src}'" class="promotion-item__btn btn">
          <img src="/img/icon-arrow-right.svg" alt="" style="transform: rotate(180deg);object-fit: none;height: 100%;">
        </button>
      </div>
      <div class="promotion-item__img">
      <img src="${secondBanner.img}" alt="" >
      </div>
    </article><article class="promotion__item promotion-item-small" style="background:${thirdBanner.bgColor}">
      <div class="promotion-item__text" style='color:inherit'>
        <div class="promotion-item__number text-big">
          01
        </div>
        <div class="promotion-item__header">
          ${thirdBanner.header}
        </div>
        <button onclick="window.location.href = '${thirdBanner.src}'" class="promotion-item__btn btn">
          <img src="/img/icon-arrow-right.svg" alt="" style="transform: rotate(180deg);object-fit: none;height: 100%;">
        </button>
      </div>
      <div class="promotion-item__img">
      <img src="${thirdBanner.img}" alt="" >
      </div>
    </article>
    <article class="promotion__item promotion-item-small" style="background:${fourthBanner.bgColor}">
      <div class="promotion-item__text" style='color:inherit'>
        <div class="promotion-item__number text-big">
          01
        </div>
        <div class="promotion-item__header">
          ${fourthBanner.header}
        </div>
        <button onclick="window.location.href = '${fourthBanner.src}'" class="promotion-item__btn btn">
          <img src="/img/icon-arrow-right.svg" alt="" style="transform: rotate(180deg);object-fit: none;height: 100%;">
        </button>
      </div>
      <div class="promotion-item__img">
      <img src="${fourthBanner.img}" alt="" >
      </div>
      </article>
      `

  } else {
    console.log('Promotion err', xhr.responseText)
  }
}
}
