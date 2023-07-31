document.addEventListener('DOMContentLoaded', () => {

  const callbackBtn = document.querySelector('.feedback__button');
  const callbackBtnFooter = document.querySelector('.footer-logo__feedback-btn');


  const callbackFormBG = document.querySelector('.callback-form');
  const callbackForm = document.querySelector('.callback-form__form');
  const callbackSending = document.querySelector('.callback-form__sending-animation')
  const callbackOk = document.querySelector('.callback-form__ok-animation')
  const callbackError = document.querySelector('.callback-form__error-animation')
  //Вызвать форму
  document.addEventListener('click', (event) => {
    if (event.target ==  callbackBtn || event.target ==  callbackBtnFooter) {
    callbackFormBG.style.display = 'flex';
    setTimeout(() => {
      callbackFormBG.style.background = 'rgba(0,0,0, 0.5)';
      callbackFormBG.children[0].style.top = '0';
    }, 100);
  }
  });
  


  //Убрать форму при клике все ее
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.callback-form__form') && event.target !== callbackBtn && event.target !== callbackSending && event.target !== callbackOk && event.target !== callbackError && event.target !== callbackBtnFooter) {
      callbackFormBG.style.background = 'none';
      callbackFormBG.children[0].style.top = '100%';
      setTimeout(()=>{
        callbackFormBG.style.display = 'none';
        
      }, 200)
      
    }
  });
  //Уведомление об успешной отправке данных
});


