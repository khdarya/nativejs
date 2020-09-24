// @ts-ignore
console.log('lesson 5'); //2020-08-23/24 Eugene

// https://learn.javascript.ru/object
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

// let obj10 = {};
// Object.create({}, {name : {value: 10}});
// console.log(Object.fromEntries([['name', 'Eugene']]))

// type TestObjType = {
//     "same long key": number;
//     name: string;
//     [key: string]: number | string;
// }
//
// let testObj1: TestObjType = {"same long key": 10, name: 'Eugene'};
//
// let testFunc = () => "same long key";
// console.log(testObj1[testFunc()]);
// console.log(testObj1["same long " + "key"]);
// let someTest10Obj = {}
// let someTest10Obj2 = {}
// someTest10Obj2.toString = function() {return 'Hello'};
//@ts-ignore
// testObj1[someTest10Obj] = 'Hey';
// testObj1['[object Object]'] = 'Hey'
//@ts-ignore
// testObj1[someTest10Obj2] = 'Yo Yo';
//testObj1['[object Object]'] = 'Yo Yo'

// delete testObj1.name;
//console.log(testObj1)

// let someName = 'Vlad';
// let age10 = '30';
// let age50;

// let someTestObj = {
//     someName,
//     age10,
//     age50,
// }
//console.log('age50' in someTestObj);
//@ts-ignore
//console.log(someTestObj.age50);

// if ('age50' in someTestObj) {
//     console.log('work');
// }
// let someTestObj2 = Object.create({}, {bla: {value: 'bla bla', enumerable: true}});
// console.log(someTestObj2);
// for (let key in someTestObj2) {
//     console.log(key);
// }

// const p = {...someTestObj};
// p = {...someTestObj};
// console.log(p);

/// Object.assign
//let testObj1 = {"same long key": 10, name: 'Eugene'};
// let testObj2 = {age: 32, name: "Vlad"};
// Object.assign(testObj1, testObj2, {name: 'Lena'});
// console.log({...testObj1, ...testObj2})

// Object.entries
// console.log(Object.entries(testObj1));

// Object.fromEntries
//console.log(Object.fromEntries([['name', 'Lena'], ['age', 25], ['isHealthy', true]]));

// Object.keys & Object.values
// console.log('Object.keys ', Object.keys(testObj1));
// console.log('Object.values ', Object.values(testObj1));
////////////////
// Дано:

const bird = {
    size: 'small',
};

const mouse = {
    name: 'Mickey',
    small: true,
};

// Что вернут вызовы:
// А) mouse.bird.size
// Б) mouse[bird.size]
// В) mouse[bird["size"]]

///////////////////////
// Что выведет консоль:
let c = { greeting: 'Hey!' };
let d;
d = c;
//c.greeting = 'Hello';
// console.log(d.greeting);
//let someTestArr = [c, d];

//@ts-ignore
// c = null;
// d = null;
// console.log(someTestArr);

//////////////
// Что выведет консоль:
//@ts-ignore
// const obj50 = { a: 'one', b: 'two', a: 'three' };
// console.log(obj50);


// Task 1
// Реализовать функцию isEmpty, которая принимает 1 параметр объект
// и которая возвращает true, если у объекта нет свойств, иначе false

const isEmpty = (obj) => !Object.getOwnPropertyNames(obj).length > 0 || !Object.getOwnPropertySymbols(obj).length > 0;
// console.log(isEmpty(c));
//console.log(c.hasOwnProperty('greeting'));


// Task 2
// Реализовать функцию salarySum которая принимает объект в качестве аргумента и
// возвращает суму всех числовых свойств принятого объекта.
// * реализовать функцию так, что бы она могла работать с аргументом типа <Any>,
// но обрабатывала только объекты, на массивы и другие типы данных возвращать ошибку

type SalaryObjType = {
    [key: string] : number;
}

const salaries: SalaryObjType = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Kate: 170,
    Bruce: 90,
}

//const salarySum = (obj: SalaryObjType): number => Object.values(obj).reduce((sum, item) => sum + item, 0);
// const salarySum = (salar: SalaryObjType): number => {
//     let summSalaries = 0
//     for (let key in salar) {
//         summSalaries += salar[key]
//     }
//     return summSalaries
// }
// const salarySum2 = (salar: any) => {
//     let summSalaries = 0
//     // if (salar === null || Array.isArray(salar) || typeof salar !== 'object')
//     if (Array.isArray(salar) || !(salar instanceof Object))
//     {
//         throw new Error();
//     } else {
//         for (let key in salar) {
//             summSalaries += salar[key]
//         }
//     }
//     return summSalaries
// }

const salarySum2 = (obj: any) => {
    if (!Array.isArray(obj) && obj instanceof Object) {
        return (Object.values(obj) as Array<number>).reduce((a, b) => a + b)
    } else {
        throw new Error();
    }
}





// Task 3
// Реализовать функцию multiplyNumericObjectFields которая принимает объект и множитель в качестве аргументов и
// возвращает:
// 1) новый объект состоящий только из числовых полей входного объекта умноженных на множитель;
// 2) мутирует входящий объект и возвращает его;

type ExampleObjType = {
    country: string;
    countryPopulation: number;
    capital: string;
    capitalPopulation: number;
    amountOfProgrammersInCountry: number;
    [key: string]: any;
}

const exampleObj: ExampleObjType = {
    country: 'Belarus',
    countryPopulation: 9.5,
    capital: 'Minsk',
    capitalPopulation: 2,
    amountOfProgrammersInCountry: 0.05,
   // null: null,
}

type NewObjType = {
    [key: string]: number;
}

// const multiplyNumericObjectFields = (obj: ExampleObjType, mult: number): object => {
//     let newObj: NewObjType = {}
//     for (let key in obj) {
//         if (Number.isFinite(obj[key])) newObj[key] = obj[key] * mult
//     }
//     return newObj
// }

// const multiplyNumericObjectFields = (obj: ExampleObjType, mult: number): object => {
//     let newObj: NewObjType = {}
//     let values = Object.entries(obj);
//     values.forEach(item => {
//         if(typeof item[1] === 'number' && !isNaN(item[1])) {
//             newObj[item[0]] = item[1] * mult;
//         }
//     });
//     return newObj
// }

// const multiplyNumericObjectFields2 = (obj: ExampleObjType, mult: number): object => {
//     for (let key in obj) {
//         if (Number.isFinite(obj[key])) obj[key] = obj[key] * mult;
//     }
//     return obj
// }

// const multiplyNumericObjectFields = (obj: ExampleObjType, mult: number): object => {
//     let newArr: any = [];
//     let values = Object.entries(obj);
//     values.forEach(item => {
//         if(typeof item[1] === 'number' && !isNaN(item[1])) {
//             newArr.push([item[0], item[1] * mult]);
//         }
//     });
//     return Object.fromEntries(newArr);
//}



// const multiplyNumericObjectFields = (example: ExampleObjType, mult: number): object => {
//     let newObj: NewObjType = {};
//     Object.entries(example).forEach(([items, value]) => {
//         if (typeof value === 'number' && !isNaN(value))
//             newObj[items] = value * mult
//     });
//     return newObj;
// }

//console.log(multiplyNumericObjectFields(exampleObj, 3));