console.log('lesson 2');

/*
 const arr1: Array<number> = [undefined,2,3,4,5];

/!* //spread
 const arr2: Array<string> =['vlad','petia','vasya'];
 const arr3: Array<any> = [14, ...arr2, 10, ...arr1];
console.log(arr3);*!/

//rest
const [a = 'custom value', b, ...rest] = arr1;
console.log(a)
console.log(b)
console.log(rest)
*/
/*const arr: Array<number> = [1,2,3,4,5];
//const b = arr.push(7); //6 dobavl poslednij el i vozvr dlinu
//const b = arr.pop(); //5 udal poslednij el
//const b = arr.shift(); //1 udal 1j el
//const b = arr.unshift(10); //6 dlina
console.log(b);*/


// Task 01
// Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль


// Task 02
// Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль

/*const arr: Array<number> = [1,2,3,4,5];
 const arr2: Array<number> = [...arr, 10];
 arr.push(10);*/

// Task 03
//  Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль

/*const arr: Array<number> = [1,2,3,4,5];

//arr.splice (3,1,10); //sozdaet novyj massiv

const arr3: Array<number> = [...arr.slice(0,2), 10, ...arr.slice(3)]; //modificiruet staryj
console.log(arr3);
   */

// Task 04 while, do while, for, for of, for in, forEach
//  Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.

//const arr: Array<number | string | {name: string}> = [{name: 'vlad'}, 2, 3, 4, '5', 'vlad'];

/*const arr = new Array(10);
all.forEach((elem: number , index: number, arr: any[]) => {
    console.log(elem);
})

for(const a of arr) {
console.log(a);
}*/
/*const arr = [1,2,3,4,5];
arr['vlad'] = 'vlad';
for(const a in arr) {
    console.log(arr[a]);
}*/

/**
 * Creates an array of integers from the specified start to end (inclusive)
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */


// function getRange(start, end) {
//     const result: Array<number> = [];
//     for(let i = start; i <= end; i++){
//         result.push(i);
//     }
//     return result;
// }

/*function getRangeRecursion(start, end, result: any[] = []) {
    if(start > end) return result;
    result = [...result, start];
    return getRangeRecursion(start +=1, end, result);
}
console.log(getRangeRecursion(1, 10));*/


// Task 05
// Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.

/*const arr: Array<number> = getRange(0, 100);

function sumRange(arr, condition: number = 0) {
     const baseArray : Array<number> = arr.filter(el => el > condition);

     function helper(baseArr, result = 0){
         if(!baseArr.length) return result;
         result = result + baseArr.pop();
         return helper(baseArr, result);
     }
     return helper(baseArray);
 }
 console.log(sumRange(arr, 50));*/


// Task 06
// Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.

/*const str: Array<string> = ['a', 'b', 'c'];
console.log(str.join(':'))
console.log(str.join('/'))
console.log(str.join('-'))
console.log(str.join(' '))*/


// Task 07
// Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.

/*const arr: Array<number> = [5,2,3,1,6,9,4,7]
//console.log(arr.sort((a: number, b: number) => a - b));
console.log(arr.sort((a: number, b: number) => a - b).reverse());*/

/*const arr: Array<string | number> = ['10', '14', '9', '1123', 15];
//console.log(arr.sort());
console.log(arr.sort((a, b)=>a-b));*/



// Task 08
// Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.

/*function mySort(arr: Arr<number>): Array<number> {
    const minusNumber: Array<number> = arr.filter(el => el < 0);
    const zeroNumber: Array<number> = arr.filter(el => el === 0);
    const plusNumber: Array<number> = arr.filter(el => el > 0);
    return [...minusNumber, ...zeroNumber, ...plusNumber];
}*/




/**7
 * Sorts digit names
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */

/*const enKeys = {
    zero: 0,
    one: 1,
    two: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10
};
const rusKeys = {
    "ноль": 0,
    "один": 1,
    "два": 2,
    "три": 3,
    "четыре": 4,
    "пять": 5,
    "шесть": 6,
    "семь": 7,
    "восемь": 8,
    "девять": 9,
    "десять": 10,
};
const enNumber = [ 'ten','one','eight','nine','eight'];
const rusNumber = ['семь','один','три','пять'];
function sortDigit(keys){
    return function(arr){
return arr.sort((a,b) => keys[a] - keys[b]);
    }
}
//const myDigitSort = sortDigit(enKeys)(enNumber);
console.log(sortDigit(enKeys)(enNumber));*/


// Task 09
//     1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.


/**
 * Returns the number of all falsy value in the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */


// Task 10
//     Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.


// const str: string = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";
//
// function getCounterChartInString(keys) {
//     return function(str) {
//         return str.split('').reduce((acc,chart) => {
//             if(acc.hasOwnProperty(chart)){
//                 acc[chart] += 1;
//                 return {...acc};
//             } else {
//                 return acc;
//             }
//         }, keys)
//     }
// }
// const result: {r: number, k: number, t: number} = getCounterChartInString({r:0, k:0, t:0}
// )(str);
// console.log(result);


/*const arr: Array<{ name: string } | {age: number} | {city: string}> = [
    {name: 'vlad'},
    {age: 'Minsk'},
    {age: 31},
];
console.log(arr.reduce((acc,elem )=> {
    return Object.assign({}, elem, acc);
}, {}))
//{ name: "vlad", age: 31, city: "Minsk"} */




/*
const arr: Arr<number> = [1,2,3,4,5];

console.log (arr.reduce((acc: number, elem: number, index: number, arr: number[]) => {
    return acc + elem;
}, 0))
*/


// Task 11
//     Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.


// Task 12
//     Преобразовать многомерные массив в одномерный.
//     Вывести его в консоль


// * Generates an array of odd numbers of the specified length
// *    1 => [ 1 ]
//*     2 => [ 1, 3 ]
//*     5 => [ 1, 3, 5, 7, 9 ]

/**1
 * Returns the doubled array - elements of the specified array are repeated twice using original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */

/**2
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */

/**3
 * Returns the array with strings only in the specified array (in original order)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */

/**4
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */

/**5
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  or f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */

/**6
 * Returns the 3 largest numbers from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */

