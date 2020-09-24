import {
    addOldToObject,
    changeTaskStatusById, filterType,
    fuzzBuzz,
    getDoneTask, journal, JournalI,
    Man,
    startArray,
    TaskI,
    YearsOldType
} from "./homework1";

describe('home work', () => {

    describe('task1', () => {
        it('fuzzBuzz should be defined', () => {
            expect(fuzzBuzz).toBeDefined();
        })

        it('throw an error if argument not a number', () => {
            expect(() => fuzzBuzz(null)).toThrowError();
            expect(() => fuzzBuzz(undefined)).toThrowError();
            expect(() => fuzzBuzz(NaN)).toThrowError();
            expect(() => fuzzBuzz(Infinity)).toThrowError();
        })

        it('if the argument is multiple of number 2 then fuzzBuzz must return "Fuzz"', () => {
            expect(fuzzBuzz((2))).toEqual('Fuzz');
            expect(fuzzBuzz((4))).toEqual('Fuzz');
            expect(fuzzBuzz((8))).toEqual('Fuzz');
            expect(fuzzBuzz((10))).toEqual('Fuzz');
            expect(fuzzBuzz(10, 5, 7)).toEqual('Fuzz');
            expect(fuzzBuzz(30, 10, 9)).toEqual('Fuzz');
        })

        it('if the argument is multiple of number 3 then fuzzBuzz must return "Buzz"', () => {
            expect(fuzzBuzz((3))).toEqual('Buzz');
            expect(fuzzBuzz((9))).toEqual('Buzz');
            expect(fuzzBuzz((15))).toEqual('Buzz');
            expect(fuzzBuzz((21))).toEqual('Buzz');
            expect(fuzzBuzz(28, 5, 7)).toEqual('Buzz');
            expect(fuzzBuzz(36, 10, 9)).toEqual('Buzz');
        })

        it('if the argument is multiple of number 2 and 3 then fuzzBuzz must return "FuzzBuzz"', () => {
            expect(fuzzBuzz((0))).toEqual('FuzzBuzz');
            expect(fuzzBuzz((6))).toEqual('FuzzBuzz');
            expect(fuzzBuzz((12))).toEqual('FuzzBuzz');
            expect(fuzzBuzz((18))).toEqual('FuzzBuzz');
            expect(fuzzBuzz(35, 5, 7)).toEqual('FuzzBuzz');
            expect(fuzzBuzz(90, 10, 9)).toEqual('FuzzBuzz');
        })

        it('if the argument is not multiple of number 2 and 3 then fuzzBuzz must return ""', () => {
            expect(fuzzBuzz((1))).toEqual('');
            expect(fuzzBuzz((-1))).toEqual('');
            expect(fuzzBuzz((5))).toEqual('');
            expect(fuzzBuzz((7))).toEqual('');
            expect(fuzzBuzz(5, 2, 7)).toEqual('');
            expect(fuzzBuzz(-7, 3, 8)).toEqual('');
        })

    })

    describe('task2', () => {
        it('addOldToObject should be defined', () => {
            expect(addOldToObject).toBeDefined();
        })

        //функция не должна мутировать входящие данные
        it('start array not to be equal addOldToObject result', () => {
            expect(addOldToObject(startArray)).not.toBe(startArray);
        })

        it('if age has invalid data addOldToObject must throw an error', () => {
            const testData: Array<Man> = [
                {
                    name: 'Vlad',
                    age: undefined,
                },
            ]
            expect(() => addOldToObject(testData)).toThrowError();

            const testData1: Array<Man> = [
                {
                    name: 'Vlad',
                    age: NaN,
                },
            ]
            expect(() => addOldToObject(testData1)).toThrowError();
            const testData2: Array<Man> = [
                {
                    name: 'Vlad',
                    age: null,
                },
            ]
            expect(() => addOldToObject(testData2)).toThrowError();
            const testData3: Array<Man> = [
                {
                    name: 'Vlad',
                    age: Infinity,
                },
            ]
            expect(() => addOldToObject(testData3)).toThrowError();
            const testData4: Array<Man> = [
                {
                    name: 'Vlad',
                    age: -1,
                },
            ]
            expect(() => addOldToObject(testData4)).toThrowError();
            const testData5: Array<Man> = [
                {
                    name: 'Vlad',
                    age: 130,
                },
            ]
            expect(() => addOldToObject(testData5)).toThrowError();
        })

        it('if age < 18 addOldToObject must add field "yearsOld" with value "young"', () => {
            const testData: Array<Man> = [
                {
                    name: 'Vlad',
                    age: 15,
                },
            ];
            const result: Man = {
                name: 'Vlad',
                age: 15,
                yearsOld: YearsOldType.yang,
            }
            expect(addOldToObject(testData)).toContainEqual(result);
        })

        it('if age > 60 addOldToObject must add field "yearsOld" with value "old"', () => {
            const testData: Array<Man> = [
                {
                    name: 'Vlad',
                    age: 65,
                },
            ];
            const result: Man = {
                name: 'Vlad',
                age: 65,
                yearsOld: YearsOldType.old,
            }
            expect(addOldToObject(testData)).toContainEqual(result);
        })

        it('if 17 < age < 61 addOldToObject must add field "yearsOld" with value "adult"', () => {
            const testData: Array<Man> = [
                {
                    name: 'Vlad',
                    age: 18,
                },
            ];
            const result: Man = {
                name: 'Vlad',
                age: 18,
                yearsOld: YearsOldType.adult,
            }
            expect(addOldToObject(testData)).toContainEqual(result);
            const testData2: Array<Man> = [
                {
                    name: 'Vlad',
                    age: 60,
                },
            ];
            const result2: Man = {
                name: 'Vlad',
                age: 60,
                yearsOld: YearsOldType.adult,
            }
            expect(addOldToObject(testData2)).toContainEqual(result2);
        })

        it('should correct work addOldToObject with startArray', () => {
            const result: Array<Man> = [
                {
                    name: 'Vlad',
                    age: 87,
                    yearsOld: YearsOldType.old
                },
                {
                    name: 'Eugene',
                    age: 55,
                    yearsOld: YearsOldType.adult
                },
                {
                    name: 'Dima',
                    age: 18,
                    yearsOld: YearsOldType.adult
                }
                , {
                    name: 'Ira',
                    age: 3,
                    yearsOld: YearsOldType.yang
                }
            ];
            expect(addOldToObject(startArray)).toEqual(result);
        })
    })


    describe('task3', () => {
        it('getDoneTask should be defined', () => {
            expect(getDoneTask).toBeDefined();
        })

        it('should return correct result', () => {
            const result: TaskI = {
                id: '2a',
                isDone: true,
                title: 'Learn useEffect'
            };
            expect(getDoneTask(journal)).toEqual([result]);
            expect(getDoneTask(journal).length).toEqual(1);
        })

        it('should work correct', () => {
            changeTaskStatusById(journal, '1a', '1a');
            const result: Array<TaskI> = [
                {
                    id: '1a',
                    isDone: true,
                    title: 'Learn hooks'
                },
                {
                    id: '2a',
                    isDone: true,
                    title: 'Learn useEffect'
                }
            ];
            expect(getDoneTask(journal)).toEqual(result);
            expect(getDoneTask(journal).length).toEqual(2);
        })

    })

    describe('task4', () => {
        let copy:JournalI;
        beforeEach(() => {
            copy = JSON.parse(JSON.stringify(journal));
        })
        it('changeTaskStatusById should be defined', () => {
            expect(changeTaskStatusById).toBeDefined();
        })

        it('should not be equal', () => {
            changeTaskStatusById(copy, '1a', '1a')
            expect(copy).not.toEqual(journal);
        })

        it('should not mutate', () => {
            changeTaskStatusById(copy, 'sdfdfs', 'wesss')
            expect(copy).toEqual(journal);
        })

        it('should work correct', () => {
            const result: JournalI = {
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
                                isDone: true,
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
            changeTaskStatusById(copy, '1a', '1a')
            expect(copy).toEqual(result);
            changeTaskStatusById(copy, '1a', '1a')
            expect(copy).toEqual(journal);
        })
    })
});

