import {PlusOne, MinusOne} from "./Action"


export const increment = () =>{

    return{
       type: PlusOne
    }

}
export const decrement = () =>{

    return{
        type: MinusOne
    }
    
}