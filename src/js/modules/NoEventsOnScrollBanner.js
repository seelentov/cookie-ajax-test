const bannerButtons = [document.querySelector('.banner__arrs'), document.querySelector('.banner-text__btn')]
const bannersBlock = document.querySelector('.banners__bg')

bannersBlock.addEventListener('mousedown', () => {
  bannerButtons.forEach(e=>e.style.pointerEvents = 'none')
});

bannersBlock.addEventListener('mouseup', () => {
  bannerButtons.forEach(e=>e.style.pointerEvents = 'all')
})
bannersBlock.addEventListener('mouseleave', () => {
  bannerButtons.forEach(e=>e.style.pointerEvents = 'all')
})