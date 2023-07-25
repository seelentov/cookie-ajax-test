export const menuBurger = (menu, button) => {

}


const menuBurgerBlock = document.querySelector('.menu-burger')
const menuBurgerButton = document.querySelectorAll('.header__menu-burger')
const closeButton = document.querySelector('.menu-burger__close-button')

menuBurgerButton.forEach(item=>item.addEventListener('click',()=>{

  menuBurgerBlock.style.left = '0%' 
})
)

closeButton.addEventListener('click',()=>{
  menuBurgerBlock.style.left = '100%'
})
