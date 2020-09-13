// @ts-ignore
console.log('lesson 5');

// https://learn.javascript.ru/object
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object


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
c.greeting = 'Hello';
// console.log(d.greeting);

//////////////
// Что выведет консоль:
// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);


// Task 1
// Реализовать функцию isEmpty, которая принимает 1 параметр объект
// и которая возвращает true, если у объекта нет свойств, иначе false


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
}

const exampleObj: ExampleObjType = {
    country: 'Belarus',
    countryPopulation: 9.5,
    capital: 'Minsk',
    capitalPopulation: 2,
    amountOfProgrammersInCountry: 0.05,
}