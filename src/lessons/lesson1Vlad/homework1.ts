 //Написать тесты и разработать функцианал для следущих задач:

//read JEST Testing jestjs.io

//1. Функция принимает число как параметр и должна возвращать следующие значения:
// 'Fuzz' если число кратно 2,
// 'Buzz' если число кратно 3
// 'FuzzBuzz' если число кратно и 2 и 3.
// * рассширить имплементацию функции: добавить возможность задавать параметры кратности;


// export function fuzzBuzz(num: number, mul1?: number, mul2?: number){
//     if (!isFinite(num) || num === null) throw new Error();
//     if (mul1 === undefined && mul2 === undefined) {
//         if (num % 2 === 0 && num % 3 === 0) return 'FuzzBuzz';
//         if (num % 2 === 0) return 'Fuzz';
//         if (num % 3 === 0) return 'Buzz';
//         return '';
//     }
//     if (!isFinite(mul1) || mul1 === null) throw new Error();
//     if (!isFinite(mul2) || mul2 === null) throw new Error();
//     if (num % mul1 === 0 && num % mul2 === 0) return 'FuzzBuzz';
//     if (num % mul1 === 0) return 'Fuzz';
//     if (num % mul2 === 0) return 'Buzz';
//     return '';
// }

export function fuzzBuzz(num: number, firstDiver: number = 2, secondDiver: number = 3) {
    if([num, firstDiver, secondDiver].some(num => !isFinite(num) || num === null)) throw new Error();

    function printer(divider: number, value: string) {
        return !(num % divider)? value : '';
    }

    return `${printer(firstDiver, 'Fuzz')}${printer(secondDiver,'Buzz')}`;
}



// 2.
// Функция прнимает массив Man's и возвращает новый массив [{}, {}, {}],
// где проверяет возвраст каждого эелемента массива и
// в зависимости от него добавляет новое поле yearsOld
// со значениями из enum в текущий обьект в зависимотси от текущего значения
// age в элементе.

export enum YearsOldType {
    yang = 'yang', // младше 18
    adult = 'adult', // 18 - 60
    old = 'old', // старше 60
}

export interface Man {
    name: string;
    age: number;
    yearsOld?: YearsOldType
}
export const startArray: Array<Man> = [
    {
        name: 'Vlad',
        age: 87,
    },
    {
        name: 'Eugene',
        age: 55,
    },
    {
        name: 'Dima',
        age: 18,
    }
    ,{
        name: 'Ira',
        age: 3,
    }
];
export function addOldToObject(people: Array<Man>) {
    return people.map(person => {
        if(!isFinite(person.age) || person.age === null || person.age < 0 || person.age >= 130) throw new Error();
        if(person.age < 18) {
            return Object.assign({}, person, {yearsOld: YearsOldType.yang});
        }
        if (person.age > 60) {
            return Object.assign({}, person, {yearsOld: YearsOldType.old});
        }
        return Object.assign({}, person, {yearsOld: YearsOldType.adult});

        //без map массив мутир и заполняется ссылакми, а не объектами
    })
}


///////////////////////////////////////////////////////////
export enum filterType {
    all = 'all',
    done = 'done',
    progress = 'progress'
}
export interface TaskI {
    title: string,
    isDone: boolean,
    id: string,
}
export interface TodoListI {
    title: string,
    id: string,
    filter: filterType,
    tasksList: Array<TaskI>
}
export interface JournalI {
    title: string,
    id: string,
    todoLists: Array<TodoListI>
}
export const journal: JournalI = {
    title: 'first journal',
    id: '1cvlasd',
    todoLists: [
        {
            title: 'Learn React',
            id: '1a',
            filter: filterType.all,
            tasksList: [
                {
                    id: '1a',
                    isDone: false,
                    title: 'Learn hooks'
                },
                {
                    id: '2a',
                    isDone: true,
                    title: 'Learn useEffect'
                },
                {
                    id: '3a',
                    isDone: false,
                    title: 'Learn Redux'
                }
            ]
        },
    ]
};
///////////////////////////////////////////////////////////

//3. Функция должна вернуть [{task}, {task}] у которых поле isDone = true
export function getDoneTask(journal: JournalI){
    const result: Array<TaskI> = [];
    journal.todoLists.forEach(todolist => {
        todolist.tasksList.forEach(task => {
            if(task.isDone) {
                result.push(task);
            }
        })
    });
    return result;
}

//4. Функция должна поменять поле isDone в текущей таске по её id мутируя исходный обьект;
export function changeTaskStatusById(journal: JournalI, todoId: string, taskId: string) {
    journal.todoLists.forEach(list => {
        if(list.id === todoId){
            list.tasksList.forEach(task => {
                if(task.id === taskId) {
                    task.isDone = !task.isDone;
                }
            })
        }
    })
}
// * повторный вызов getDoneTask должен вернуть другой результат