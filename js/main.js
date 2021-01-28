'use strict';

/* 1 Escuchar botón de prueba
      1.1 cada click suma 1 = bucle

2 Generar número aleatorio entre 0 y 100

3 Leer número en input
    3.1 es mayor que el aleatorio = responder el núm es demasiado alto
    3.2 es menor que el aleatorio = responder es demasiado bajo
    3.3 es igual que el aleatorio = enhorabuena
    3.4  menor o mayor que 100 no válido

4 escuchar botón reset= volver a 0
*/

//VARIABLES
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

//COUNTER
let acc = 0;
const timesTry = () => {
  acc += 1;
  counterTimesElement.innerHTML = `${acc}`;
};

//EVENT Times FUNCTION
function priceAnswer() {
  const numberIntroduced = inputNumberElement.value;
  const userIntroduceValue = userIntroduceValue;

  console.log(`La usuaria ha introducido el número ${numberIntroduced}`);

  if (randomNumber === userIntroduceValue) {
    tryNumberElement.innerHTML = '¡¡Enhorabuena, has acertado!!';
    console.log('La usuaria ha ganado el juego');
  } else if (userIntroduceValue < 1 || userIntroduceValue > 100) {
    tryNumberElement.innerHTML = 'Por favor, introduce un número entre 1 y 100';
  } else if (randomNumber < userIntroduceValue) {
    tryNumberElement.innerHTML = 'El número es demasiado alto';
  } else {
    tryNumberElement.innerHTML = 'El número es demasiado bajo';
  }
}
priceAnswer();
function start(event) {
  event.preventDefault();

  timesTry();
}

//LISTENERS
tryButtonElement.addEventListener('click', start);
