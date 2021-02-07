'use strict';

const tryButtonElement = document.querySelector('.tryButton-js');
const inputNumberElement = document.querySelector('.numberInput-js');
const tryNumberElement = document.querySelector('.tryNumber-js');
const counterTimesElement = document.querySelector('.numberTimes-js');
const resetButtonElement = document.querySelector('.resetButton-js');
const max = 100;

//GET RANDOM NUMBER
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(max);

//COUNTER
let acc = 0;
const timesTry = () => {
  acc += 1;
  counterTimesElement.innerHTML = `${acc}`;
};

//EVENT Times FUNCTION
function paintAnswerNumber() {
  const numberIntroduced = parseInt(inputNumberElement.value);
  let htmlCode = '';
  if (randomNumber === numberIntroduced) {
    htmlCode += '¡¡Enhorabuena, has acertado!!';
  } else if (numberIntroduced < 1 || numberIntroduced > 100) {
    htmlCode += 'Por favor, introduce un número entre 1 y 100';
  } else if (randomNumber < numberIntroduced) {
    htmlCode += 'El número es demasiado alto';
  } else {
    htmlCode += 'El número es demasiado bajo';
  }
  tryNumberElement.innerHTML = htmlCode;
}

//PAINT AND TIMES
function handlestart(event) {
  event.preventDefault();
  paintAnswerNumber();
  timesTry();
}

//RESET
function handleReset() {
  location.reload();
}
//LISTENER
tryButtonElement.addEventListener('click', handlestart);
resetButtonElement.addEventListener('click', handleReset);
