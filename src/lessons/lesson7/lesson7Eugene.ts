// Lesson 7

// https://learn.javascript.ru/settimeout-setinterval
// https://developer.mozilla.org/ru/docs/Web/API/WindowTimers/setTimeout
// https://learn.javascript.ru/callbacks
// https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F_%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D0%B0
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B0%D0%B8%CC%86%D0%BC%D0%B5%D1%80%D0%BE%D0%B2-%D0%B2-javascript-callback-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-settimeout-setinterval-%D0%B8-requestanimationframe-f73c81cfdc9d

// let counter = 0
// const timerId1 = setTimeout((name) => {}, 1000, 'Jon');
// const timerId2 = setInterval((name, timerId2) => {
//     counter += 1;
//     ...
//     if (counter === ?) clearInterval()
// }, 1000, 'Jon', timerId2);
// clearInterval(timerId2);
// clearTimeout(timerId1);

//@ts-ignore
console.log('lesson 7');

// Task 01
// Написать функцию которая выводит в консоль фразу "I am a programmer".
// Вызвать эту функцию с задержкой 1с.

function delayString() {
    setTimeout(()=> console.log("I am a programmer"), 1000);
}
//
// delayString();

// Task 02
// Написать функцию которая в качестве рагумента принимает переменную {name} и выводит в консоль фразу "My name is {name}".
// Вызвать эту функцию с задержкой 1с и передать в качестве аргумента любое имя.

const toConsoleLog = (name: string): void => {
    setTimeout(()=> console.log(`My name is ${name}`), 1000);
}

// const toConsoleLog = (name: string): void => {
//     setTimeout((...rest)=> console.log(rest), 1000, ...[name, 'Eugene' , 'Lena']);
// }
//
// toConsoleLog('Vlad');


// Task 03
// Написать функцию которая  принимает 3 аргумента (перве 2 - колличество милисекунд, 3й - любое имя) и которая
// интервально вызывает функции из тасок 01 и 02 в соответствии с переданными аргументами

// const intrval = (delay1: number, delay2: number, name: string): void => {
//     setInterval(delayString, delay1);
//     setInterval(toConsoleLog, delay2, name);
// }
//
// intrval(2000, 3000, 'Ivan');

// Task 04
// модернизировать функцию из Task 03 так, что бы можно было остановить вызовы вложенных функций

// type IdsType = {
//     id1?: number;
//     id2?: number;
// }
//
// const intrval = (delay1: number, delay2: number, name: string): IdsType => {
//     const ids: IdsType = {};
//     //@ts-ignore
//     ids.id1 = setInterval(delayString, delay1);
//     ids.id2 = setInterval(toConsoleLog, delay2, name);
//     return ids;
// }
//
// const idsResult: IdsType = intrval(2000, 3000, 'Ivan');
// //@ts-ignore
// clearInterval(idsResult.id1);
// //@ts-ignore
// clearInterval(idsResult.id2);

// function Task03(a: number, b: number, name: string) {
//     console.log('task 3')
//     let timerId1 = setInterval(Task01, a)
//     let timerId2 = setInterval(Task02, b, name)
//     setTimeout(() => clearInterval(timerId1), 5000)
//     setTimeout(() => clearInterval(timerId2), 5000)
// }
//
// Task03(1000,2000,'Alex')



// Task 05
// Написать функцию (randomNum) которая генерирует целое число от 0 до 20.
// Написать функцию (sumRandomNums) которая принимает 2 аргумента: 1) функция randomNum, 2) число сгенерированное randomNum
// функция sumRandomNums должна вернуть сумму всех сгенерированных randomNum чисел, количество этих чисел определяется
// 2ым аргументом sumRandomNums

// const randomNum = (): number => Math.floor(Math.random() * 20);
// let x: number = randomNum();
// const sumRandomNums = (func: Function, num: number):number => {
//     let sum = [];
//     for (let i = 0; i < num; i++) {
//         sum[i] = randomNum();
//     }
//     return sum.reduce((a, b) => a + b);
// }

//
// const sumRandomNums = (func: Function, num: number):number => {
//     let sum = 0;
//     for (let i = 0; i < num; i++) {
//         sum += randomNum();
//     }
//     return sum;
// }
//
// console.log(sumRandomNums(randomNum, x));


// Task 06**
// 1. написать функцию которая принимает число в качестве аргумента и возвращает функцию которая
// в свою очередь возвращает случайное целое число от 0 до числа передонного в  оригиальную функцию включительно.
// 2. спомощью функции из первого условия сделать 2 функции которые гененируют числа до 4 и 8 соответственно.
// 3. Написать функцию которая принимает в качестве аргументов объект functionObj, функции из условия 2 и любое число.
// данная функция должна в произвольном порядке применять функции из объекта к полученному числу столько раз, сколько
// сгенерирует функция с диапазоном до 8.

type FunctionsObjectType = {
    '0': (n: number) => number;
    '1': (n: number) => number;
    '2': (n: number) => number;
    '3': (n: number) => number;
    '4': (n: number) => number;
}

const functionObj: FunctionsObjectType = {
    '0': (n) => n + 2,
    '1': (n) => n * n,
    '2': (n) => n - (n * 0.5),
    '3': (n) => n * (n * 0.5),
    '4': (n) => n / (n * 0.5),
}


// const randomRange = (num: number): () => number => {
//     return () => Math.floor(Math.random() * num + 1);
// }
//
// const rangeToFour: () => number = randomRange(4);
// const rangeToEight: () => number = randomRange(8);
//
// const someFunction = (obj: FunctionsObjectType, func1: Function, func2: Function, num: number): number => {
//     let x = func1();
//     //let y = 0;
//     let y = num;
//     for (let i = 0; i < x; i++) {
//         //@ts-ignore
//         //y += obj[func2()](num);
//         y += obj[func2()](y);
//     }
//     return y;
// }
//
// console.log(someFunction(functionObj, rangeToEight, rangeToFour, 5));


function Task06_1(num: number) {
    return Math.round(Math.random() * num + 1)
    //return Math.round(Math.random() * num + 1)
}

const RangeTo4 = () => Task06_1(4);
const RangeTo8 = () => Task06_1(8);

function Task06_3(obj: FunctionsObjectType, f4: () => number, f8: () => number, num: number) {
    let a = f8()
    //let y = 0;
    let y = num;
    for (let i = 0; i < a; i++) {
        //y += obj[f8()](num);
        //@ts-ignore
        y += obj[f4()](y);
    }
    return y
}

console.log('task6 ' + Task06_3(functionObj, RangeTo4, RangeTo8, 8))
