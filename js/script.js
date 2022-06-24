import Advice from './classes/Advice.js';

let btnRandom = document.querySelector(".random-btn");
let btnSearchById = document.querySelector(".search__id-btn");
let btnSearchBySelect = document.querySelector(".search__select-btn");

let inputId = document.querySelector(".search__input");
let selectAdv = document.querySelector(".search__select");

const advice = new Advice;

btnRandom.addEventListener("click", (e) => {
  e.preventDefault;
  advice.addRandomAdvice();
});

btnSearchById.addEventListener("click", (e) => {
  e.preventDefault;
  if (!inputId.value) {
    alert('This field cant`t be empty.');
    return;
  }
  if(inputId.value < 1 || inputId.value > 199) {
    return
  }
  advice.addAdviceById(inputId.value);
});

btnSearchBySelect.addEventListener("click", (e) => {
  e.preventDefault;
  advice.addAdvicesList(selectAdv.value);
});
