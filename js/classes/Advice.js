import AdviceAPI from './AdviceAPI.js';

let advicesBlock = document.querySelector('.advices__list');

export default class Advise {
  constructor() {
    this._adviceAPI = new AdviceAPI();
    this.errorMessage = 'Something went wrong. Please try again';
  }

  createAdvice(el, ul) {
    let item = document.createElement('li');
    item.textContent = el.advice;
    item.classList.add('list__item');
    ul.append(item);
  }

  addAdvicesList(selectValue) {
    this._adviceAPI.getAdvicesBySelect(selectValue)
      .then((response) => {
        let list = document.createElement('ul');

        response.slips.forEach((el) => {
          this.createAdvice(el, list);
        });

        advicesBlock.replaceChildren(list);
      })
      .catch((error) => {
        this.newError(error)
      });
  }

  addRandomAdvice() {
    this._adviceAPI.getRandomAdvice()
      .then((response) => {
        let list = document.createElement('ul');

        this.createAdvice(response.slip, list);

        advicesBlock.replaceChildren(list);
      })
      .catch((error) => {
        this.newError(error)
      });
  }

  addAdviceById(id) {
    this._adviceAPI.getAdviceById(id)
      .then((response) => {
        let list = document.createElement('ul');

        this.createAdvice(response.slip, list);

        advicesBlock.replaceChildren(list);
      })
      .catch((error) => {
        this.newError(error)
      });
  }

  newError(error) {
    console.error(error);

    let errorBlock = document.createElement('p');
    errorBlock.textContent = this.errorMessage;
    advicesBlock.replaceChildren(errorBlock);
  }
}
