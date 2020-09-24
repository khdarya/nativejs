console.log('Lesson 3');
///// объект, его методы, деструктуризация

// let obj1 = {};
// // let obj2 = Object.create({});
//
// function F() {
// }
//
// let obj3 = new F();
//
// obj1 = {
//     name: "Eugene",
//     age: '32',
//     ['Some complex key'] : 0,
// }
//
// obj1.name = 'Vald';
// obj1.city = 'Minsk';
//
// let obj2 = {};

// console.log(obj1)
// console.log(obj1['Some complex key'])
//
// const komplexKey2 = 'Vety long key';
// obj1[komplexKey2] = 10;
//
// console.log(obj1[komplexKey2])
//
// let obj2 = {};
// obj2.toString = function () {
//     return 'I am obj2';
// }
//
// obj1[obj2] = 'Hello!'
// console.log(obj1[obj2])
// console.log(obj1)
// console.log(obj1 + 10)
//
// obj1.toString = function () {
//     return 'Hello, I am custom method';
// }
// console.log(obj1)
//
// obj1.valueOf = function () {
//     return 10;
// }
//
// console.log(obj1 + 10)

// obj3 = {
//     name: "Eugene",
//     age: '32',
//     ['Some complex key'] : 0,
//     name: 'Lena',
//     [obj1]: 10,
//     [obj2]: 50,
// }
//
// const obj4 = {
//     name: 'Vlad',
// }
//
// obj4.name = 'Peter';
// obj4.city = 'Minsk';
//
// obj4 = {
//     name: 'Vlad',
// }



//////////////////////
// Можно ли изменить объект, объявленный с помощью const?

////////////////
// Дано:

// const bird = {
//   size: 'small',
// };
//
// const mouse = {
//   name: 'Mickey',
//   small: true,
// };
//
// mouse[bird["size"]]

// Что вернут вызовы:
// А) mouse.bird.size
// Б) mouse[bird.size]
// В) mouse[bird["size"]]

///////////////////////
// Что выведет консоль:
// let c = { greeting: 'Hey!' };
// let d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);


//////////////
// Что выведет консоль:
// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);
//
// const obj2 = {};
// obj2.a = 'one';
// obj2.b = 'two';
// obj2.a = 'three';


////////////////////////
//Object.assign(), Object.entries(), Object.keys(), Object.values()


////Object.assign()

// let obj1 = {name: 'Eugene', age: 10}
// let obj2 = {age: 32}

// let obj3 = Object.assign({}, obj1, obj2);

// let obj3 = {}
// obj3.name = obj1.name;
// obj3.age = obj1.age;
// obj3.age = obj2.age;

// let obj3 = {...obj1, ...obj2};
// obj1 = {...obj1, ...obj2}

////Object.entries()

// let obj1 = {name: 'Eugene', age: 10}
// let keyValue = Object.entries(obj1); // [ ['name', 'Eugene'], ['age', 10] ]
//
// console.log(keyValue)
// let result = {};
// keyValue.forEach(item => {
//     result[item[0]] = item[1]
// })
//
// console.log('result', result);
// let customObj = Object.fromEntries(keyValue)
//
// console.log('customObj', customObj)

///// Object.keys(), Object.values()

// let obj = {name: 'Eugene', age: 10, city: 'Minsk'};
//
// const keys = Object.keys(obj) // ['name', 'age', city]
// const values = Object.values(obj) // ['Eugene', 10, 'Minsk']
//
// // for (let key in obj) {
// //     console.log(key);
// // }
// console.log(keys)
// let copyObj = {};
//
// keys.forEach(key => {
//     copyObj[key] = obj[key]; //copyObj.name ='Eugene';
// })
//
// copyObj = {...obj};
//
// let copy2 = JSON.parse(JSON.stringify(obj));

// let protoObj = {
//     sayHello: () => console.log('Hello')
// }
//
// let obj5 = Object.create(null, {'name' : {
//     value: 'Egene',
//     writable: false,
//     }});
// obj5.name = 'Vlad';
// console.log('empty', obj5);

// const App = ( {userId} ) => {
//     return (
//         <div>
//             {userId}
//         </div>
//     )
// }

// const props = {
//     userId: 15241516,
//     userName: 'Eugene',
//     userAge: 32,
//     userCity: 'Minsk',
//     userPhotoUrl: 'someURL',
// }

// const User = ( { userName, userAge, userCity, userPhotoUrl } ) => {
//     return (
//         <div>
//             <div>User name: { userName } </div>
//             <div>User age: { userAge } </div>
//             <div>User city: { userCity } </div>
//             <div><img src={ userPhotoUrl } alt='avatar' /></div>
//         </div>
//     )
// }

// let arr = [1, 5, 10, 20, 50];
//
// const [one, two, ...rest ] = arr;
// rest = [10, 20, 50];