export const SwipingBlock = (block) => {

let isScrolling = false;
let startX;
let scrollLeft;

block.addEventListener('mousedown', (e) => {
  isScrolling = true;
  startX = e.pageX - block.offsetLeft;
  scrollLeft = block.scrollLeft;
});

block.addEventListener('mousemove', (e) => {
  if (!isScrolling) return;
  e.preventDefault();
  const x = e.pageX - block.offsetLeft;
  const walk = (x - startX) * 1
  block.scrollLeft = scrollLeft - walk;
});

block.addEventListener('mouseup', () => {
  isScrolling = false;
})

block.addEventListener('mouseleave', () => {
  isScrolling = false;
})
}

