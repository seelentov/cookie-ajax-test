export const HoverBlocks = (event ,elements, oldCss, newCss) =>{
  const promotionItems = document.querySelectorAll('.promotion__item')

  elements.forEach(e => {
  e.addEventListener(event, ()=>{
    elements.forEach(item=>{
      item.classList.remove(oldCss)
      item.classList.add(newCss)
  })
    e.classList.remove(newCss)
    e.classList.add(oldCss)
  })
})
}