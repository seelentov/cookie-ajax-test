export const popularXhr = () => {

var xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  '/files/database/popular.json',
  true
)
xhr.send()

const popularItems = document.querySelector('.popular__items')

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) {
    return
  }

  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText)
    for(let item in data){
      let thisData = data[item]
      
      let thisItemImgs = '';
      let thisItemImgsCount = thisData.imgs.length;

      for(let img of thisData.imgs){
        let alt = img.match(/\/([^/]+)\.\w+$/).slice(-1)
        thisItemImgs+= `<img class='product-img__image' src="${img}" alt="${alt}">`  + '\n'
      }

      let thisItemLines = ''

      for(let img of thisData.imgs){
        thisItemLines+= `<div class="points__hover"><div class="points__item"></div></div>`  + '\n'
      }
      
      let thisItem = `
    <article class="popular__item product-item">
        <a class='popular__item' href="`+thisData.link+`">
          <div class="product-item__promo">`
            +thisData.promo+
          `</div>
          <div class="product-item__img">`
          +thisItemImgs+
          `</div>
          <div class='product-img__points'>`
          +thisItemLines+
          `</div>
          <div class="product-item__name">
            <p>`
            +thisData.name+ 
            `</p>
          </div>
          <div class="product-item__cost">
            <div class="product-item__price">`
            +thisData.price+
            `</div>
            <div class="product-item__oldprice">`
            +thisData.oldprice+
            `</div>
          </div>
        </a>
        <div class="product-item__buybutton">
          <svg width="25" height="26" viewBox="0 0 25 26" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.45599 5.38574L3.51107 1.13574H0.77832" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M6.95222 17.0166L4.45605 5.38574H22.3882C23.2906 5.38574 23.9621 6.21733 23.7737 7.09991L21.6459 17.0166C21.5056 17.6697 20.9291 18.1357 20.2604 18.1357H8.33631C7.66906 18.1357 7.09247 17.6697 6.95222 17.0166Z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M8.54602 23.2715C8.25277 23.2715 8.01477 23.5095 8.0176 23.8027C8.01619 24.096 8.25419 24.334 8.54744 24.334C8.84069 24.334 9.07869 24.096 9.07869 23.8027C9.07869 23.5095 8.84069 23.2715 8.54602 23.2715"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M20.7391 23.2715C20.4459 23.2715 20.2079 23.5095 20.2107 23.8027C20.2093 24.096 20.4473 24.334 20.7406 24.334C21.0338 24.334 21.2718 24.096 21.2718 23.8027C21.2718 23.5095 21.0338 23.2715 20.7391 23.2715"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
      </article>
    `
    popularItems.insertAdjacentHTML('beforeend', thisItem)
    }
  } else {
    console.log('Popular err', xhr.responseText)
  }
}
}
