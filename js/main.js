'use strict';

const tryButtonElement = document.querySelector('.tryButton-js');
const inputNumberElement = document.querySelector('.numberInput-js');
const tryNumberElement = document.querySelector('.tryNumber-js');
const counterTimesElement = document.querySelector('.numberTimes-js');

const max = 100;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(max);
console.log(`El número aleatorio es: ${randomNumber}`);

let acc = 0;
const timesTry = () => {
  acc += 1;
  counterTimesElement.innerHTML = `${acc}`;
};

function priceAnswer() {
  const numberIntroduced = inputNumberElement.value;
  console.log(`La usuaria ha introducido el número ${numberIntroduced}`);

  if (randomNumber === numberIntroduced) {
    tryNumberElement.innerHTML = '¡¡Enhorabuena, has acertado!!';
    console.log('La usuaria ha ganado el juego');
  } else if (numberIntroduced < 1 || numberIntroduced > 100) {
    tryNumberElement.innerHTML = 'Por favor, introduce un número entre 1 y 100';
  } else if (randomNumber < numberIntroduced) {
    tryNumberElement.innerHTML = 'El número es demasiado alto';
  } else {
    tryNumberElement.innerHTML = 'El número es demasiado bajo';
  }
}

function start(event) {
  event.preventDefault();
  priceAnswer();
  timesTry();
}
tryButtonElement.addEventListener('click', start);
