import { arrayOfSums, flatArray, getArrayWords, searchBigNumbers } from './homework2Vlad';

describe('homework 2', () => {

    describe('task 1', () => {
        it('should be defined', () => {
            expect(getArrayWords).toBeDefined();
        });

        it('should throw an error if maxWordLength not a number or negative number', () => {
          //  expect(() => getArrayWords('', null)).toThrowError();
           // expect(() => getArrayWords('', undefined)).toThrowError();
            expect(() => getArrayWords('', NaN)).toThrowError();
            expect(() => getArrayWords('', Infinity)).toThrowError();
            expect(() => getArrayWords('', -1)).toThrowError();
           // expect(() => getArrayWords(null, 5)).toThrowError();
            //expect(() => getArrayWords(undefined, 10)).toThrowError();
        });

        it('should correctly work', () => {
            const testString = 'a big brown fox jumps over the lazy dog';
            const result = ['a', 'big', 'fox', 'the', 'dog'];
            expect(getArrayWords(testString, 3)).toEqual(result);
            expect(getArrayWords(testString, 1)).toEqual(['a']);
            expect(getArrayWords(testString, 0)).toEqual([]);
            expect(getArrayWords('', 10)).toEqual([]);
            expect(getArrayWords('sssss', 5)).toEqual(['sssss']);
            expect(getArrayWords('sssss', 3)).toEqual([]);
            expect(getArrayWords('sssss', 10)).toEqual(['sssss']);
        });
    });

    describe('Task 2', () => {
        it('should be defined ', () => {
            expect(searchBigNumbers).toBeDefined();
        });

        it('should correctly work', () => {
            expect(searchBigNumbers([])).toEqual([]);
            expect(searchBigNumbers(['1', '2'])).toEqual([2, 1]);
            expect(searchBigNumbers(['1', 2, '3'])).toEqual([3, 2, 1]);
            expect(searchBigNumbers(['1', 2, '3', 4, '5', '6', 7, '8', 9, 10])).toEqual([10, 9, 8]);
            expect(searchBigNumbers([10, '10', '10', 10])).toEqual([10, 10, 10]);
            expect(searchBigNumbers(['-3', '-5', '-10', '-15'])).toEqual([-3, -5, -10]);

        });
    });

    describe('task 3', () => {
        it('should be defined ', () => {
            expect(arrayOfSums).toBeDefined();
        });

        it('should throw an error if maxWordLength not a number', () => {
            expect(() => arrayOfSums([1, NaN, 1, 1, 1])).toThrowError();
         //  expect(() => arrayOfSums([1, undefined, 1, 1, 1])).toThrowError();
            expect(() => arrayOfSums([1, Infinity, 1, 1, 1])).toThrowError();
          //  expect(() => arrayOfSums([1, null, 1, 1, 1])).toThrowError();
        });

        it('should correctly work', () => {
            expect(arrayOfSums([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
            expect(arrayOfSums([10, -10, 10, -10, 10])).toEqual([10, 0, 10, 0, 10]);
            expect(arrayOfSums([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
            expect(arrayOfSums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
                .toEqual([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]);
        });

    });

    describe('task 4', () => {
        it('should be defined ', () => {
            expect(flatArray).toBeDefined();
        });

        it('should correctly work', () => {
            expect(flatArray([1, [1, 2, [3, [4, 5, [6], 10]], 8], 9])).toEqual([1, 1, 2, 3, 4, 5, 6, 10, 8, 9]);
            expect(flatArray([])).toEqual([]);
        });
    });

});