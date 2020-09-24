import {
    exampleObj,
    isEmpty,
    multiplyNumericObjectFields, multiplyNumericObjectFields2,
    salaries,
    salarySum, salarySum2,
} from './dz';

describe('homework 3', () => {

    describe('task 1', () => {
        it('should be defined', () => {
            expect(isEmpty).toBeDefined();
        });

        it('should work correctly', () => {
            expect(isEmpty({})).toBeTruthy();
            expect(isEmpty({ name: 'Eugene' })).not.toBeTruthy();
            expect(isEmpty(Object.create({}, {
                name: {
                    value: 'Eugene',
                    enumerable: false
                }
            }))).not.toBeTruthy();
            expect(isEmpty({[Symbol()] : 'jskdgfhmdzfgs'})).not.toBeTruthy();
            expect(isEmpty(() => {})).not.toBeTruthy();
        });
    });

    describe('task 2/1', () => {
        it('should be defined', () => {
            expect(salarySum).toBeDefined();
        });

        it('should work correctly', () => {
            expect(salarySum(salaries)).toEqual(650);
        });
    });

    describe('task 2/2', () => {
        it('should be defined', () => {
            expect(salarySum2).toBeDefined();
        });

        it('should throw an Error', () => {
            expect(() => salarySum2([])).toThrowError();

            function testFunc() {
            }

            expect(() => salarySum2(testFunc)).toThrowError();
            expect(() => salarySum2(null)).toThrowError();
        });

        it('should work correctly', () => {
            expect(salarySum2({})).toEqual(0);
            expect(salarySum2({ name: 'Eugene', city: 'Minsk' })).toEqual(0);
            expect(salarySum2(
                {
                    name: 'Eugene',
                    num1: 50,
                    isTrue: true,
                    num2: 100,
                    func: () => {
                    },
                    num3: 200,
                }
            )).toEqual(350);
            expect(salarySum2({ John: 100, Ann: NaN, })).toEqual(100);
            expect(salarySum2({ John: 100, Ann: undefined, })).toEqual(100);
            expect(salarySum2({ John: 100, Ann: Infinity, })).toEqual(100);
        });
    });

    describe('task 3/1', () => {
        it('should be defined', () => {
            expect(multiplyNumericObjectFields).toBeDefined();
        });

        it('should work correctly', () => {
            const result = {
                countryPopulation: 19,
                capitalPopulation: 4,
                amountOfProgrammersInCountry: 0.1,
            }
            const depCopy = JSON.parse(JSON.stringify(exampleObj));
            expect(multiplyNumericObjectFields(exampleObj, 2)).toEqual(result);
            expect(exampleObj).toEqual(depCopy);
        });
    });

    describe('task 3/2', () => {
        it('should be defined', () => {
            expect(multiplyNumericObjectFields2).toBeDefined();
        });

        it('should work correctly', () => {
            const exampleObj = {
                country: 'Belarus',
                countryPopulation: 9.5,
                capital: 'Minsk',
                capitalPopulation: 2,
                amountOfProgrammersInCountry: 0.05,
            }
            const depCopy = JSON.parse(JSON.stringify(exampleObj));
            const resultObj = {
                country: 'Belarus',
                countryPopulation: 95,
                capital: 'Minsk',
                capitalPopulation: 20,
                amountOfProgrammersInCountry: 0.5,
            }
            expect(multiplyNumericObjectFields2(exampleObj, 10)).toEqual(resultObj);
            expect(depCopy).not.toEqual(resultObj);
        });
    });

});