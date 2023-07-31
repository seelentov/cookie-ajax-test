document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.querySelector(".callback-form__form");
  const formDiv = document.querySelector(".callback-form");
  form.addEventListener("submit", formSend);
    
    
    async function formSend(e){
      e.preventDefault();
      let formData = $(form).serialize();
      $(formDiv).addClass('_sending');

      $.ajax({
        type: "POST",
        url: "/files/components/sendmail.php",
        data: formData,
        success: function () {
          setTimeout(()=>{
            form.reset()
            $(formDiv).removeClass('_sending');
            $(formDiv).addClass('_ok');
          },1000)
          setTimeout(()=>{
            $(formDiv).removeClass('_ok');
            formDiv.style.background = 'none';
            formDiv.children[0].style.top = '100%';
            setTimeout(()=>{
                formDiv.style.display = 'none';
            }, 200)
          },1500);
          
        },
        error: function(){
          setTimeout(()=>{
            $(formDiv).removeClass('_sending');
            $(formDiv).addClass('_error');
          },1000)
          setTimeout(()=>{
            $(formDiv).removeClass('_error');
          },1500)
        }
      });
      
    };
});