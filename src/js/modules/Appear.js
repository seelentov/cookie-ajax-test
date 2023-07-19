export const Appear = (block, button) => {
  let action = 0
  button.addEventListener('click', ()=>{
    if(action === 0) {
      block.style.display = 'block'
      block.style.opacity = '1'
      action = 1
    } else {
      block.style.opacity = ''
      setTimeout(()=>{
        block.style.display = ''
      },500)
      action = 0
    }
  })
}