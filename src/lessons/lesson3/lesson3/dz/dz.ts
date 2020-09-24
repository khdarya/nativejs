// Для всех задач должны быть написаны тесты с учетом пограничных случаев.

// Task 1
// Реализовать функцию isEmpty, которая принимает 1 параметр объект
// и которая возвращает true, если у объекта нет свойств, иначе false

export function isEmpty() {}

// Task 2
// Реализовать функцию salarySum которая принимает объект в качестве аргумента и
// возвращает суму всех числовых свойств принятого объекта.
// * реализовать функцию так, что бы она могла работать с аргументом типа <Any>,
// но обрабатывала только объекты, на массивы и другие типы данных возвращать ошибку

export const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Kate: 170,
    Bruce: 90,
}

export type SalariesObjType = typeof salaries

export function salarySum() {}


// Task 3
// Реализовать функцию multiplyNumericObjectFields которая принимает объект и множитель в качестве аргументов и
// возвращает:
// 1) новый объект состоящий только из числовых полей входного объекта умноженных на множитель;
// 2) мутирует входящий объект и возвращает его;

export const exampleObj = {
    country: 'Belarus',
    countryPopulation: 9.5,
    capital: 'Minsk',
    capitalPopulation: 2,
    amountOfProgrammersInCountry: 0.05,
}

export type exampleObjType = typeof exampleObj;

export function multiplyNumericObjectFields() {}

// Task 4*
// Создать объект obj, с методами method1(),method2() и method3().
// В методе method3() должна возвращаться строка «метод3».
// Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()

