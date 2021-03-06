import AbstractView from "../abstract-view";
import Application from "../application";

export default class WelcomeScreen extends AbstractView {
  constructor() {
    super();
  }


  get template() {
    return `
      <div class="end">
        <p>Ghbdtn! Настало время приключений! Вы готовы сразится с неприятностями и получить принцессу прямо сейчас?!<br>
        A?!<br>
        Точно?!<br>
        Уверен?!<br>
        Стопудов?!</p>
        <p>08 есть?</p>
        <div class="repeat">
        Ваше имя:<input type="text"><br>
        <span class="repeat-action">Да</span>
        </div>
      </div>`;
  }

  onAgreeClick() {
  }

  bind() {
    const nameField = this.element.querySelector(`input`);
    this.element.querySelector(`span.repeat-action`).onclick = (evt) => {
      evt.preventDefault();

      Application.showGame(nameField.value);
    };
  }

}
