import {sum, chartUpperCase, myFilter} from './lesson1';

describe('simple test', ()=>{
    it('should return valid value', () => {
        expect(sum(5,5)).toEqual(10);
    })

    it('should return undefined', () => {
        expect(()=>sum(undefined,undefined)).toThrowError();
    })

    it('should return NaN', () => {
        expect(()=>sum(5,NaN)).toThrowError();
    })
})


describe('chart to upperCase', () => {
    it('should return valid string with 2', () => {
        const testString = 'shouldreturnstring';
        const res = 'sHoUlDrEtUrNsTrInG';
        expect(chartUpperCase(testString,2)).toEqual(res)
    })

    it('should return valid string with 4', () => {
        const testString = 'shouldreturnstring';
        const res = 'shoUldrEturNstrIng';
        expect(chartUpperCase(testString,4)).toEqual(res)
    })

    it('should throw error for invalid arguments', () => {
        const testString = 'shouldreturnstring';
        expect(() => chartUpperCase(undefined,4)).toThrowError()
        expect(() => chartUpperCase(null,NaN)).toThrowError()
    })

    it('should throw error for invalid arguments 2', () => {
        const testString = 'shouldreturnstring';
        expect(() => chartUpperCase(testString,-45)).toThrowError();
        expect(() => chartUpperCase(testString,45)).toThrowError();
    })

})


// [1,2,3,4,5],(number)=> .

describe('My filter', () => {
    it('Should return valid data structure', () => {
        const testArray = [1,2,3,4,5,6,7,8,9,10];
        expect(myFilter(testArray, (num: number): boolean=> !(num % 3))).toEqual([3,6,9]);
        expect(myFilter(testArray, (num: number): boolean=> !(num % 4))).toEqual([4,8]);
    })

    it('Should return valid data structure', () => {
        expect(() => myFilter([], (num: number): boolean=> !(num % 3))).toThrowError();
    })

    it('Should return valid data structure', () => {
        expect(() => myFilter([], null)).toThrowError();
    })
})
