// Для всех задач должны быть написаны тесты с учетом пограничных случаев.

// Task 1
// Реализовать функцию isEmpty, которая принимает 1 параметр объект
// и которая возвращает true, если у объекта нет свойств, иначе false

export function isEmpty(obj: Object): boolean {
    return Object.getOwnPropertyNames(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
    // return Object.keys(obj).length === 0;
    // for (let key in obj) {
    //     return false
    // }
    // return true;
}

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

export function salarySum(obj: SalariesObjType): number {
    return Object.values(obj).reduce((acc, item) => acc + item, 0);
}

export function salarySum2(obj: any): number {
    if (typeof obj !== 'object' || obj === null) throw new Error();
    if (Array.isArray(obj)) throw new Error();
    // @ts-ignore
    return Object.values(obj).reduce((acc: number, item: any) => {
        if (typeof item === 'number' && isFinite(item)) {
            return acc + item;
        }
        return acc;
    }, 0);
}

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
interface IObjectType extends exampleObjType {
    [key: string] : any;
};

interface Iresult {
    [key: string] : number;
};


export function multiplyNumericObjectFields(obj: IObjectType, mul: number): Object {
    const result: Iresult = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            result[key] = obj[key] * mul;
        }
    }
    return result
}

export function multiplyNumericObjectFields2(obj: IObjectType, mul: number): Object {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * mul;
        }
    }
    return obj;
}


// Task 4*
// Создать объект obj, с методами method1(),method2() и method3().
// В методе method3() должна возвращаться строка «метод3».
// Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()

let obj = {
    method1() {
        return obj;
    },
    method2() {
        return obj;
    },
    method3() {
        return 'метод3';
    }
};

// const obj2 = obj;
//
// obj = null;
//
// [1,3].map().filter().sort();


// let kek = 'foo' + +'foo'
//
// let kek2 = ( ('5') +  (- '-2'));

