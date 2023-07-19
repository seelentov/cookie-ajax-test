export const BannerSwitch = (block) =>{

  const arrs = block.querySelector('.banner__arrs').children
const bgBlock = block.querySelector('.banners__bg')
const textBlock = block.querySelectorAll('.banner__text')

const bannerQuads = block.querySelectorAll('.banner-items__quad')

const bannerImgBlock = block.querySelector('.banners__bg')
const blocksCount = textBlock.length - 1

let index = 0

const switchText = (move) => {
  textBlock[index].style.opacity = '0'
  index += move
  
  setTimeout(()=>{
  textBlock.forEach(item=>{
      item.classList.add('disabled')
      item.style.opacity = '0'
  })
  textBlock[index].classList.remove('disabled')
  textBlock[index].style.opacity = '1'
  },300)
}  

const textItemAnim = (move) =>{
  if (move == -1) {
  const newItem = document.createElement('div')
  newItem.classList.add('banner-items__quad')
  newItem.classList.add('banner-bottom-appear')

  newItem.style.transform = 'translate(33px, -10px)'
  newItem.style.position = 'absolute';
  newItem.style.zIndex = '0';

  bannerQuads[1].innerHTML = textBlock[index].innerHTML
  bannerQuads[0].parentNode.appendChild(newItem)

  bannerQuads[0].classList.add('banner-top-out')
  bannerQuads[1].classList.add('banner-middle-moveup')

  setTimeout(()=>{
    bannerQuads[0].classList.remove('banner-top-out')
    bannerQuads[1].classList.remove('banner-middle-moveup')
    bannerQuads[0].parentNode.removeChild(document.querySelector('.banner-bottom-appear'))
    bannerQuads[1].innerHTML = ''
    setTimeout(()=>{},200)
  },300)
}else{
  const newItem = document.createElement('div')
  newItem.classList.add('banner-items__quad')
  newItem.classList.add('banner-top-appear')

  newItem.style.transform = 'translate(-66px, -100px)'
  newItem.style.position = 'absolute';
  newItem.style.zIndex = '3';

  newItem.innerHTML = textBlock[index].innerHTML
  bannerQuads[0].parentNode.appendChild(newItem)

  bannerQuads[0].classList.add('banner-middle-movedown')
  bannerQuads[1].classList.add('banner-bottom-out')

  setTimeout(()=>{
    bannerQuads[0].classList.remove('banner-middle-movedown')
    bannerQuads[1].classList.remove('banner-bottom-out')
    bannerQuads[0].parentNode.removeChild(document.querySelector('.banner-top-appear'))
    newItem.innerHTML = ''
    setTimeout(()=>{},200)
  },300)
}
}

const switchImg = (move) =>{
  bannerImgBlock.scrollTo({
    left: bannerImgBlock.clientWidth * index,
    behavior:'smooth'
  })
}


const arrCheck = () =>{
  if(index >= blocksCount) arrs[1].style.transform = 'scale(0)'
  else arrs[1].style.transform = 'scale(1)'
  if(index <= 0) arrs[0].style.transform = 'scale(0)'
  else arrs[0].style.transform = 'scale(1)'
}
arrCheck()

let proc = 0

arrs[0].addEventListener('click', ()=>{
  if(index <= 0) return false  
  if (proc === 1) return false
  proc = 1
  
  switchText(-1)
  textItemAnim(-1)
  switchImg(index)
  arrCheck()

  setTimeout(()=>{
    proc = 0
  },750)  
  })

arrs[1].addEventListener('click', ()=>{
  if(index >= blocksCount) return false
  if (proc === 1) return false
  proc = 1
  
  switchText(1)
  textItemAnim(1)
  switchImg(index)
  arrCheck()
  
  setTimeout(()=>{
    proc = 0
  },750)  
  })

}
