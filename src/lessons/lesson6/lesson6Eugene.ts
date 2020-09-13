// @ts-ignore
console.log('lesson6');

//// Деструктуризация, спред, рест
// https://learn.javascript.ru/destructuring
// https://learn.javascript.ru/destructuring-assignment
// https://medium.com/@stasonmars/%D0%B4%D0%B5%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2-es6-%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-b865bb71f376
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://learn.javascript.ru/rest-parameters-spread-operator
// https://habr.com/ru/post/489550/

//// Копирование объектов
// https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff
// https://nuancesprog.ru/p/4443/

//const testObj = {name: "Eugene", work: true};
// const copy = testObj
//
// copy.work = false;
//
// const copy = {...testObj};
// copy.work = false;

const testObj = {name: "Eugene", work: { copanyName: 'twistellar', position: 'programmer'} };
// const copy = {...testObj};
// copy.work = {...copy.work, position: 'director'};
// const copy = {
//     ...testObj,
//     work: {
//         ...testObj.work,
//         position: 'director',
//     }
// };
//
// console.log(copy == testObj);
// console.log(copy.work == testObj.work);
// console.log(testObj);
// console.log(copy);

const testArr50 = [[{name: 'Eugene'}], [{name: 'Vlad'}]];
//const copyTestArr = [...testArr50];
const copyTestArr = testArr50.map(item => item.map(inner => ({...inner, isWorking: true})));
copyTestArr[0][0].name ='Elena';

// console.log(testArr50 === copyTestArr);
// console.log(testArr50[0] === copyTestArr[0]);
// console.log(testArr50[0][0] === copyTestArr[0][0]);
// console.log(testArr50[0][0]);
// console.log(copyTestArr[0][0]);


// Task 01
// Дан объект person. Необходимо сделать поверхностнуюкопию этого объекта (не мутировать вложенные структуры) и
// 1. Изменить возраст.
// 2. Создать и добавить брата или сестру.
// 3. Изменить возраст лбого из родителей.
// 4. Изменить любые данные у брата или сестры.


type Man = {
    name: string;
    age: number;
    hasChildren: boolean;
    hasHighEducation: boolean;
};
interface IPerson extends Man {
    parents: Array<Man>;
    siblings: Array<Man>;
    hasSpouse: boolean;
}

const person: IPerson = {
    name: 'Alex',
    age: 30,
    hasChildren: true,
    hasSpouse: false,
    hasHighEducation: true,
    parents: [
        {
            name: 'Dmitry',
            age: 60,
            hasChildren: true,
            hasHighEducation: true,
        },
        {
            name: 'Olga',
            age: 59,
            hasChildren: true,
            hasHighEducation: true,
        },
    ],
    siblings: [],
}

// 1
// const personCopy:IPerson = {...person, age: 60};
//2.1
// const sister: Man = {
//     name: 'Marina',
//     age: 37,
//     hasChildren: false,
//     hasHighEducation: true
// };
// const personCopy:IPerson = {...person, siblings: [...person.siblings, sister]};
//2.2
// const personCopy:IPerson = {
//     ...person,
//     siblings: [
//         ...person.siblings,
//         {
//             name: 'Marina',
//             age: 37,
//             hasChildren: false,
//             hasHighEducation: true,
//         }
//     ]
// };

//3
// mutate
// const personCopy:IPerson = {...person};
// personCopy.parents[0].age = 50;
// mutate inner
// const personCopy:IPerson = {...person, parents: [...person.parents]};
// personCopy.parents[0].age = 50;
//
// const personCopy:IPerson = {...person, parents: person.parents.map( parent => {
//         if (parent.name === 'Dmitry') {
//             return { ...parent, age: 50};
//         }
//         return parent;
//     })};


// Task 02
// Дан массив brands. Необходимо сделать поверхностную копию данного массива и
// 1. Добавить бренду ауди модель "А7" 2018 года и тогоже класса, что и модель "А6".
// 2. Удалить модель 'S-class'.
// 3. у модели '7 series' изменить год презентации на 2016.


export enum CAR_CLASSES {
    C = 'C_CLASS',
    D = 'D_CLASS',
    E = 'E_CLASS',
    F = 'F_CLASS',
}

type CarModelType = {
    modelName: string;
    presentationYear: number;
    class: CAR_CLASSES;
}

type CarBrand = {
    brandName: string;
    yearOfFoundation: number;
    headquarter: string;
    brandModels: Array<CarModelType>;
}


const mercedes: CarBrand = {
    brandName: 'Mercedes-Benz',
    yearOfFoundation: 1926,
    headquarter: 'Stuttgart',
    brandModels: [
        {
            modelName: 'C-class',
            class: CAR_CLASSES.D,
            presentationYear: 2014,
        },
        {
            modelName: 'E-class',
            class: CAR_CLASSES.E,
            presentationYear: 2016,
        },
        {
            modelName: 'S-class',
            class: CAR_CLASSES.F,
            presentationYear: 2013,
        }
    ],
};

const bmw: CarBrand = {
    brandName: 'BMW',
    yearOfFoundation: 1916,
    headquarter: 'Munich',
    brandModels: [
        {
            modelName: '3 series',
            class: CAR_CLASSES.D,
            presentationYear: 2019,
        },
        {
            modelName: '5 series',
            class: CAR_CLASSES.E,
            presentationYear: 2016,
        },
        {
            modelName: '7 series',
            class: CAR_CLASSES.F,
            presentationYear: 2015,
        }
    ],
};

const audi: CarBrand = {
    brandName: 'Audi',
    yearOfFoundation: 1909,
    headquarter: 'Ingolstadt',
    brandModels: [
        {
            modelName: 'А4',
            class: CAR_CLASSES.D,
            presentationYear: 2015,
        },
        {
            modelName: 'А6',
            class: CAR_CLASSES.E,
            presentationYear: 2019,
        },
        {
            modelName: 'А8',
            class: CAR_CLASSES.F,
            presentationYear: 2017,
        }
    ],
}

const brands:Array<CarBrand> = [audi, bmw, mercedes];

//2.1
// const brandsCopy:Array<CarBrand> = brands.map( brand => {
//     if (brand.brandName === 'Audi') {
//         return {
//             ...brand,
//             brandModels: [
//                 ... brand.brandModels,
//                 {
//                     modelName: 'А7',
//                     class: CAR_CLASSES.E,
//                     presentationYear: 2018,
//                 },
//             ],
//         }
//     }
//     return brand;
// });

//2.2
// const brandsCopy:Array<CarBrand> = brands.map(brand => {
//     return {
//         ...brand,
//         brandModels: brand.brandModels.filter(model => model.modelName !== 'S-class'),
//     }
// });
//
// console.log(brandsCopy);

// 2.3
const brandsCopy:Array<CarBrand> = brands.map(brand => {
    return {
        ...brand,
        brandModels: brand.brandModels.map(model => {
            if (model.modelName === '7 series') {
                return {
                    ...model,
                    presentationYear: 2016,
                }
            }
            return model;
        }),
    }
});

console.log(brandsCopy);





// Task 03
// Написать функцию, которая принимает массив brands в качестве аргумента и
// 1. возвращает массив глубоких копий всех моделей относящихся к 'E_CLASS'.
// 2. возвращает массив глубоких копий всех моделей относящихся к 'D_CLASS' и презентованных до 2018 года.

function getModels(arr:Array<CarBrand>) {
    const result: Array<CarModelType> = [];
    arr.forEach(brand => brand.brandModels.forEach(model => {
        if (model.class === CAR_CLASSES.E) {
            result.push({...model});
        }
    }));
    return result;
}


// Task 04
// Написать функцию, которая принимает массив brands, brandName и объект типа CarModelType в качестве аргументов и
// возвращает копию переданного бренда с добавленной моделью в массив моделей

const newMode: CarModelType = {
    modelName: 'А7',
    class: CAR_CLASSES.E,
    presentationYear: 2018,
};

function addModel (arr:Array<CarBrand>, brandName: string, obj: CarModelType) {
    return arr.map(brand => {
        if (brand.brandName === brandName) {
            return {
                ...brand,
                brandModels: [...brand.brandModels, obj],
            }
        }
        return brand;
    });
}
