export const CatalogButton = (button, catalog, hideitems) => {
  let action = 0
  button.addEventListener('click', () => {
    if (action === 0) {
      button.style.background = '#FED16E'
      button.style.width = '52px'

      button.children[1].style.position = 'absolute'
      button.children[1].style.transform = 'scale(0)'

      button.children[0].style.transform = 'scale(2.7)'

      innerWidth > 1200 ? catalog.style.transform = 'translate(0, -51px) scale(1)' : catalog.style.transform = 'translate(26px, -51px) scale(1)'
      
      hideitems.forEach(item => item.style.transform = 'scale(0)')
      action = 1;
    } else {
      button.style.background = ''
      button.style.width = ''
      button.children[1].style.position = ''
      button.children[1].style.transform = ''
      button.children[0].style.transform = ''
      catalog.style.transform = '';
      hideitems.forEach(item => item.style.transform = '')
      action = 0;
    }
  });
}