const readline = require('readline');
const input = readline.createInterface(process.stdin);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

const secretNumber = getRandomInt(0, 100);
console.log('Загадано число в диапазоне от 0 до 100')
input.on('line', (data) => {
    if (data == secretNumber) {
        console.log('Отгадано')
    } else if (data < secretNumber) {
        console.log('Больше')
    } else {
        console.log('Меньше')
    }
});
input.on('close', () =>console.log('Игра окончена'));