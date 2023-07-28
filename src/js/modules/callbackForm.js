document.addEventListener('DOMContentLoaded', () => {

  const callbackBtn = document.querySelector('.feedback__button');
  const callbackFormBG = document.querySelector('.callback-form');
  const callbackForm = document.querySelector('.callback-form__form');

  //Вызвать форму
  callbackBtn.addEventListener('click', () => {
    callbackFormBG.style.display = 'flex';
    setTimeout(() => {
      callbackFormBG.style.background = 'rgba(0,0,0, 0.5)';
      callbackFormBG.children[0].style.top = '0';
    }, 100);
  });


  //Убрать форму при клике все ее
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.callback-form__form') && event.target !== callbackBtn) {
      callbackFormBG.style.background = 'none';
      callbackFormBG.children[0].style.top = '100%';
      setTimeout(()=>{
        callbackFormBG.style.display = 'none';
        
      }, 200)
      
    }
  });
  //Уведомление об успешной отправке данных
  callbackForm.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(callbackForm);

    let response = await fetch('mail.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok){
      let result = await response.json();
      form.reset()
      alert(result.message)
    }
  }
});


