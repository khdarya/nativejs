import {createPromise} from "./lesson5";

describe('',()=>{
    it('promise',()=>{
        createPromise('test', 3, true).then(res=> {
            expect(res).toEqual('test')
            }
        )
    })
})
