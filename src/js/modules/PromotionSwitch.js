export const promotionItems = document.querySelectorAll('.promotion__item')

promotionItems.forEach(e => {
  e.addEventListener('mouseover', ()=>{
    promotionItems.forEach(item=>{
      item.classList.remove('promotion-item-big')
      item.classList.add('promotion-item-small')
  })
    e.classList.remove('promotion-item-small')
    e.classList.add('promotion-item-big')
  })
})