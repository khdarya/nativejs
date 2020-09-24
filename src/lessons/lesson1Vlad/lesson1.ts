// console.log('Hello');

export const sum = (a: number, b: number): number | Error => {
    if(isFinite(a) && isFinite(b)) return a + b;
    throw new Error();
};


export const chartUpperCase = (base: string, number: number): string | Error => {
    if(!isFinite(number) || base === null || number === null) throw new Error();
    if(typeof base !== 'string') throw new Error();
    if(base.length < number || number < 0) throw new Error();




    // for(let i = 0; i < base.length; i++){
    //     if(!(i % number)){
    //         result += base[i].toUpperCase();
    //     } else {
    //         result += base[i];
    //     }
    // }
    let newArr: any = [];
    base.split('').map((char, idx) => {
        if((idx + 1)%number === 0){
            let newChar = char.toUpperCase();
            newArr.push(newChar)
        } else {
            newArr.push(char);
        }
    });
    return newArr.join("");
}


export const myFilter = (numbers: Array<number>, predicat: Function): Array<number> => {
    if(!numbers.length) throw new Error();
    if (typeof predicat !== 'function')throw new Error();
    return numbers.filter((elem) => predicat(elem));
}
