<div class="callback-form">
  <form class='callback-form__form' action="#">
    <h1 class="callback-form__header text-big">
      Оставьте заявку и с вами свяжутся в течение пары минут
    </h1>
    <label class='callback-form__name' for="name">
      Имя:
      <input pattern="^[А-Яа-яЁёA-Za-z\s]+$" required class='callback-form__name-input' type="text" id="name" name='name' placeholder="Виталий">
    </label>
    <label class='callback-form__number' for="tel">
      Номер телефона:
      <input type="tel" id="tel" name="tel"
        required pattern="\+?[0-9\s\-\(\)]+" placeholder="+7(922)984-13-43">
    </label>
    <input class='callback-form__submit btn' type="submit" value="Отправить"></input>
  </form>
  <div class='callback-form__sending-animation'>
    Отправка...
    <div class="sending-animation__bar">
    <div class="sending-animation__line"></div>
    </div>
  </div>
  <div class='callback-form__ok-animation'>
    Форма успешно отправлена
    <div class="sending-animation__bar">
    <div class="sending-animation__line" style="width: 100%; animation: none"></div>
    </div>
  </div>
  <div class='callback-form__error-animation'>
    Ошибка!
    <div class="sending-animation__bar">
    <div class="sending-animation__line" style="width: 100%; background: red; ; animation: none"></div>
    </div>
  </div>
</div>