export const ScrollBlock = (block, scrollWidth, arrsBlock) => {
  block.addEventListener('scroll',()=>{
    setTimeout(()=>{
      if(block.scrollLeft < 50) arrsBlock[0].style.transform = 'scale(0)'
      else arrsBlock[0].style.transform = 'scale(1)'
      if(block.scrollWidth < block.scrollLeft+ block.offsetWidth + 50) arrsBlock[1].style.transform = 'scale(0)'
      else arrsBlock[1].style.transform = 'scale(1)'
    },500)
  })


  arrsBlock[0].style.transform = 'scale(0)'
  arrsBlock[0].addEventListener('click',()=>{
    block.scrollTo({
      left:block.scrollLeft - scrollWidth,
      behavior:'smooth'
    });
    arrsBlock[1].style.transform = 'scale(1)'

    
  });
  arrsBlock[1].addEventListener('click',()=>{
    block.scrollTo({
    left:block.scrollLeft + scrollWidth,
    behavior:'smooth'
    
  });
  arrsBlock[0].style.transform = 'scale(1)'

  console.log(block.scrollWidth, block.scrollLeft+ block.offsetWidth)
});
}