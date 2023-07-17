const arrowLeft = document.querySelector('.popular-arrs__left');
const arrowRight = document.querySelector('.popular-arrs__right');
const arrowLeftMobile = document.querySelector('.popular-arrs-mobile__left');
const arrowRightMobile = document.querySelector('.popular-arrs-mobile__right');
const items = document.querySelector('.popular__items');
console.log('READY');


arrowLeft.addEventListener('click',()=>{
  console.log('Yes');
  console.log(items.scrollLeft);
  items.scrollTo({
    left:items.scrollLeft - items.clientWidth,
    behavior:'smooth'
  });
});
arrowRight.addEventListener('click',()=>{
  console.log('Yes');
  console.log(items.scrollLeft);
  items.scrollTo({
    left:items.scrollLeft + items.clientWidth,
    behavior:'smooth'
  });
});
arrowLeftMobile.addEventListener('click',()=>{
  console.log('Yes');
  console.log(items.scrollLeft);
  items.scrollTo({
    left:items.scrollLeft - items.clientWidth,
    behavior:'smooth'
  });
});
arrowRightMobile.addEventListener('click',()=>{
  console.log('Yes');
  console.log(items.scrollLeft);
  items.scrollTo({
    left:items.scrollLeft + items.clientWidth,
    behavior:'smooth'
  });
});