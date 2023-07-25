const serviceItems = [...document.querySelector('.services__items').children];
serviceItems.forEach(e => {
  let descBlock = e.querySelector('.service-item__hover');
  e.addEventListener('mouseover', () => {
    descBlock.style.opacity = '1';
  });
  e.addEventListener('mousemove', (event) => {
    let mouseX = event.pageX + 'px';
    let mouseY = event.pageY + 'px';
    console.log(mouseX,mouseY)
    descBlock.style.left = mouseX
    descBlock.style.top = mouseY
  });
  e.addEventListener('mouseout', () => {
    descBlock.style.opacity = '0';
    descBlock.style.left = 0
    descBlock.style.top = 0
  });
});