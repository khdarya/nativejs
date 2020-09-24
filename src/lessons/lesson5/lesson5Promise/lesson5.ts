console.log('lesson 5');


export function createPromise(value: string,delay: number, isResolve: boolean){
    return new Promise((resolve, reject) => setTimeout(isResolve? resolve: reject, delay * 1000, value))
}
//
// const allPromise = Promise.race(
//     [
//         createPromise('first',2,false),
//         createPromise('second',4,false),
//         createPromise('third',3,true)
//     ])
// allPromise.then(res => console.log(res)).catch(res => console.log('in catch: ',res));

//
// const promise =new Promise((resolve,reject)=>{
//     console.log('Promise is created');
// })
//
// console.log(promise);

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const promise= new Promise((res,rej)=>{
//     res('Promise Data')
// })
// promise.then(res=>console.log(res))
//
// Promise.resolve('Promise Data').then(res => console.log(res))




// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
//
// const task3Promise = new Promise((resolve,reject) => {
//     reject('Promise Error')
// })
//
// const b = task3Promise.then(null,res=>console.log(res))
//
// const c = b.then();

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// const promise= new Promise((res,rej)=>{
//     setTimeout(res,3000,'Promise Data')
// })
// promise.then(res=>console.log(res))






// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

// const promise = new Promise((res, rej) => setTimeout(res,1000,'My name is'));
//
//
// function onSuccess(value: string): string{
//     return `${value} Vlad`;
// }
//
// function print(value: string): string {
//     console.log(value);
//     return '10'
// }
//
// promise
//     .then(onSuccess)
//     .then(print)
//
//



// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.

// function onSuccess2(val:string):string {
//     throw new Error('Error');
//     // return `${val} Nastya`;
// }
//
// function print(par:string) {
//     console.log(par)
// }
//
// const promise= new Promise((res,rej)=>{
//     setTimeout(res,1000,'My name is')
// })
// promise.then(onSuccess2).then(print).catch(e=>console.log(e));





// function getPromiseData2(data:any) {
//     return new Promise((res,rej)=>{
//         setTimeout(res,1000,data)
//     })
// }
//
// getPromiseData2({ name:'Anna' })
//     .then(res=>console.log(res))
//     .catch(e=>console.log(e));


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData


// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с, {city: 'Minsk'} через 4с.
// Получите результаты работы трех промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

//
// function getPromiseData(value: {[key: string]: string|number}, delay: number, isResolve: boolean){
//     return new Promise((res,rej)=> setTimeout(isResolve ? res : rej,delay * 1000, value));
// }
//
//
// const allResponse = Promise.all([
//     getPromiseData({ name: "Anna" }, 2, true),
//     getPromiseData({age: 16}, 3, false),
//     getPromiseData({city: 'Minsk'}, 4, true),
// ])
// allResponse
//     .then(([name, age, city])=> { console.log(Object.assign({},name,age,city))})
//     .catch((res) => {
//         return ['age', 'city', 'name'].reduce((acc, key) => {
//             return {...acc,[key]: acc[key]? acc[key]: null}
//         },res);
//     })
//     .then(console.log)
//
//
// // @ts-ignore
// const woman ={city: 'Minsk', name:'Anna',age: null};

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

// const promise = new Promise((res, rej) => {
//     console.log('create Promise');
//     setTimeout(res,5000,'Promise Data');
// })
//
// let ref: any;
// const promise2 = new Promise((resolve, reject) => { ref = reject });
//
// const button = document.querySelector('#btn-cancel-promise');
// button.addEventListener('click', ()=>{ ref('Cancel Promise')})
//
// const promises = Promise.race([promise,promise2])
// promises.then(console.log).catch(console.log);
