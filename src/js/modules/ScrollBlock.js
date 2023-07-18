export const ScrollBlock = (block, scrollWidth, arrsBlock) => {
  console.log(123)
  arrsBlock[0].addEventListener('click',()=>{
    block.scrollTo({
      left:block.scrollLeft - scrollWidth,
      behavior:'smooth'
    });
  });
  arrsBlock[1].addEventListener('click',()=>{
    block.scrollTo({
    left:block.scrollLeft + scrollWidth,
    behavior:'smooth'
  });
});
}