// Для всех задач должны быть написаны тесты с учетом пограничных случаев.

// Task 1
// Реализовать функцию, которая принимает 2 параметра:
// 1. - строка произвольной длинны с набором произвольных слов;
// 'a big brown fox jumps over the lazy dog'
// 2. максимальное кол-во симоволов в слове.
// Функция должна вернуть массив из слов, которые не привышают заданную длинну либо [].

export function getArrayWords(str: string, num: number): Array<string> {
    if (str === undefined ||
        str === null ||!isFinite(num) || num === null || num < 0) throw new Error();
    if (str.length === 0 || num === 0) return [];
    const arrFromString: Array<string> = str.split(' ');
    return arrFromString.filter(word => word.length <= num);
}

// Task 2
//  Функция должна вернуть массив из 3 самых больших чисел из входящего массива.
//  Пример
//      [] => []
//      [ '1', '2' ] => [ 2, 1 ]
//      [ '1', 2, '3' ] => [ 3, 2, 1 ]
//      [ '1',2,'3',4,'5','6',7,'8',9,10 ] => [ 10, 9, 8 ]
//      [ 10, '10', '10', 10 ] => [ 10, 10, 10 ]

export function searchBigNumbers(arr: Array<string | number>): Array<number> {
    return arr.map(i => +i)
        .sort((a,b) => b - a)
        .slice(0, 3);
}

// Task 3
//  Функция принимает массив чисел и преобразует его в массив сумм согласно примеру ниже:
//  f[n] = x[0] + x[1] + x[2] +...+ x[n]
//  or f[n] = f[n-1] + x[n]
//  Примеры :
//      [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
//      [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
//      [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
//      [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]

export function arrayOfSums(arr: Array<number>): Array<number> {
    function checkNumber(num: number) {
        if (!isFinite(num) || num === null) throw new Error();
        return true;
    }
    let sum = 0;
    const result: Array<number> = [];
    arr.forEach(num => {
        if(checkNumber(num)) {
            sum += num;
            result.push(sum);
        }
    })
    return result;
}



// Task 4
// Реализовать Фукнцию, которая принимает массив разной вложенности и
// возвращает одномерный(плоский, одного уровня) массив элементов.
// [1,[1,2,[3,[4,5,[6],10]],8],9] => [1,1,2,3,4,5,6,10,8,9]
// Вывести его в консоль

// export function flatArray(arr: Array<any>): Array<any> {
//     let result: Array<any> = [];
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             result = [...result, ...flatArray(item)];
//         } else {
//             result = [...result, item];
//         }
//     });
//     return result
// }

export function flatArray(arr: Array<any>): Array<any> {
    return arr.reduce((acc, item) =>{
        return Array.isArray(item) ? [...acc, ...flatArray(item)] : [...acc, item];
    },[]);
}


//const f = (acc) => arr.reduce((acc, item) => Array.isArray(item) ? [...acc, ...flatArray(item)] : [...acc, item], []);

