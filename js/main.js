'use strict';

/* 1 Generar número aleatorio entre 0 y 100 


2 Escuchar botón de prueba
      2.1 cada click suma 1 
      2.2 Añade 1 al número de intentos



3 Leer número en input
    3.1 es mayor que el aleatorio = responder el núm es demasiado alto
    3.2 es menor que el aleatorio = responder es demasiado bajo
    3.3 es igual que el aleatorio = enhorabuena
    3.4  menor o mayor que 100 no válido

*/
const tryButtonElement = document.querySelector('.tryButton-js');
const resetButtonElement = document.querySelector('.resetButon-js');
const inputNumberElement = document.querySelector('.numberInput-js');
const tryNumberElement = document.querySelector('.tryNumber-js');
const counterTimesElement = document.querySelector('.numberTimes-js');

//sacar número aleatorio
const max = 100;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(max);

console.log(`El número aleatorio es: ${randomNumber}`);

//contador suma 1
let acc = 0;
const timesTry = () => {
  acc += 1;
  counterTimesElement.innerHTML = `${acc}`;
};
timesTry();
