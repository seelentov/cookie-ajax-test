export const ScrollImgs = (item) => {
  const lines = item.querySelectorAll('.points__hover')
  const images = item.querySelector('.product-item__img')

  lines[0].children[0].style.background = '#25262C'

  const scrollToImg = (numberItem) => {
    images.scrollTo({
      left: images.clientWidth * numberItem,
      behavior:'smooth'
    })
  }
  
  for(let i = 0;i<lines.length;i++){

    lines[i].setAttribute('index', i)
    lines[i].addEventListener('mouseover', ()=>{
      lines[0].children[0].style.background = '#e8e8e8'
      lines[i].children[0].style.background = '#25262C'
      console.log()
      scrollToImg(lines[i].getAttribute('index'))
      })
      lines[i].addEventListener('mouseout', ()=>{
        lines[i].children[0].style.background = '#e8e8e8'
        })
  }
}