export const ScrollImgs = (item) => {
  const lines = item.querySelectorAll('.points__hover');
  const images = item.querySelector('.product-item__img');
  const firstLineChild = lines[0].children[0];

  firstLineChild.style.background = '#25262C';

  const scrollToImg = (numberItem) => {
    images.scrollTo({
      left: images.clientWidth * numberItem,
      behavior: 'smooth'
    });
  };

  lines.forEach((line, index) => {
    line.setAttribute('index', index);
    line.addEventListener('mouseover', () => {
      firstLineChild.style.background = '#e8e8e8';
      line.children[0].style.background = '#25262C';
      scrollToImg(line.getAttribute('index'));
    });
    line.addEventListener('mouseout', () => {
      line.children[0].style.background = '#e8e8e8';
    });
  });
};