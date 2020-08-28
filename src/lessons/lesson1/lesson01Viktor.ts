
//Основные типы данных
//Примитивы
//learn.javascript.ru/types
// number, string, boolean, null, undefined


import {log} from "util";

let yo;
console.log(yo)    //undefined

//Объекты:
//learn.javascript.ru/objects
//1.objects
//2. array
//3. function

//Основные характеристики:
//1. Множество значений различного типа
//2. Имеет свойства и методы
//3. Объект - ссылочный тип данных

//Создание объекта

//let obj = new Object();  //ustarelo

let stBob = {
    name: 'Bob',
    age: 21,
    isMarried: false,
    'st address': { city: 'Minsk'},
    getInfo: function() {
        return [this.name, this.age, this.isMarried]   //возвращает значение свойств
    }
}
// Обращение к свойству объекта
console.log(stBob.name); //Bob
console.log(stBob['st address'])  //{ city: 'Minsk'}

let prop = 'age'
//console.log(stBob[prop]);

//Переменная как ссылка на объект
// let stAlex = stBob;
// stAlex.name = 'Alex';
// console.log(stBob.name)   //Alex
// console.log(stBob.name === stAlex.name)   //true

//Копироване(клонирование)
let stAlex = {...stBob}
stAlex.name = 'Alex';
console.log(stBob.name)   //Bob
console.log(stBob.name === stAlex.name)
//сравниваем адреса

// lo_dash (глубокое  копирование)

//Создание массивов

// let botReport = ['2', '3', '23']
// let botReport2 = botReport;
// botReport2[0] = false;
// console.log(botReport[0])

// console.log(botReport.length)     //3

//console.log(stBob.getInfo());  //['Bob', 21, false]

// console.log(botReport.toString());
// console.log(botReport.reverse());

//map-function
//console.log(Number(botReport2[0]));  //23

// function getNumber(str) {
//     if(typeof  str === 'string') {
//         return Number(str);   //строки в числа
//     } else {
//         return  'string is required'
//     }
// }

// function map(arr, fn) {
//     let mappedArr = []
//     for (let i = 0; i < arr.length; i++) {
//         mappedArr[i] = fn(arr[i])  //по очереди к массиву ф-ю
//     }
//     return mappedArr
// }

//console.log(map(botReport, getNumber))  //2 парам,
// или console.log(botReport.map(getNumber))
























