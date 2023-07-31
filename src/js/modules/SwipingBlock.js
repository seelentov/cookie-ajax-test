export const swipingBlock = (block, speed=1) => {
let isScrolling = false;
let startX;
let scrollLeft;

block.addEventListener('mousedown', (e) => {
  isScrolling = true;
  startX = e.pageX - block.offsetLeft;
  scrollLeft = block.scrollLeft;
  [...block.children].forEach(e=>e.style.pointerEvents = 'none')
});

block.addEventListener('mousemove', (e) => {
  if (!isScrolling) return;
  e.preventDefault();
  const x = e.pageX - block.offsetLeft;
  const walk = (x - startX) * speed;
  block.scrollLeft = scrollLeft - walk;
});

block.addEventListener('mouseup', () => {
  isScrolling = false;
  [...block.children].forEach(e=>e.style.pointerEvents = 'all')
})
block.addEventListener('mouseleave', () => {
  isScrolling = false;
  [...block.children].forEach(e=>e.style.pointerEvents = 'all')
})
}