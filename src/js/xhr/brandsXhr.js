export const brandsXhr = () => {
  var xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  '/files/database/brands.json',
  true
)
xhr.send()

const brandsItems = document.querySelector('.brands__items')

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) {
    return
  }

  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText)

    for(let item in data){
      let thisData = data[item]
      let alt = thisData.match(/\/([^/]+)\.\w+$/)[1];
      let thisItem; 
      thisItem = `
      <article class="brands__item brands-item">
          <img src="${thisData}" alt="${alt}">
      </article>`;
      brandsItems.innerHTML += thisItem
    }
  } else {
    console.log('Brands err')
  }
}
}
