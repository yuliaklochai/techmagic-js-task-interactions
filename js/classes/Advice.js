import AdviseAPI from "./AdviceAPI.js";

let advicesBlock = document.querySelector(".advices__list");

export default class Advise {
  constructor() {
    this.API = new AdviseAPI();
  }

  createAdvice(el, ul) {
    let item = document.createElement("li");
    item.textContent = el.advice;
    item.classList.add("list__item");
    ul.append(item);
  }

  addAdvicesList(selectValue) {
    this.API.getAdvicesBySelect(selectValue).then((response) => {
      let list = document.createElement("ul");

      response.slips.forEach((el) => {
        this.createAdvice(el, list);
      });

      advicesBlock.replaceChildren(list);
    });
  }

  addRandomAdvice() {
    this.API.getRandomAdvice().then((response) => {
      let list = document.createElement("ul");

      this.createAdvice(response.slip, list);

      advicesBlock.replaceChildren(list);
    });
  }

  addAdviceById(id) {
    this.API.getAdviceById(id).then((response) => {
      let list = document.createElement("ul");

      this.createAdvice(response, list);

      advicesBlock.replaceChildren(list);
    });
  }
}
