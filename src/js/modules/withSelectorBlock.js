const selectors = [...document.querySelector('.events__selector').children]
const banners = document.querySelector('.events__banners')
selectors.forEach(e=>{
  e.addEventListener('mouseover', ()=>{
    selectors.forEach(e=>e.classList.remove('events-selector__item__active'))
    e.classList.add('events-selector__item__active')
    let index = e.getAttribute('index')
    banners.scrollTo({
      left: banners.clientWidth * index,
      behavior: 'smooth'
    })
  })
})