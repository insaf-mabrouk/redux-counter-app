
import {PlusOne, MinusOne} from "./Action"


const initialState={
    counter:0
}

const Reducer=(state=initialState,action)=>{
    
   switch (action.type) {

       case PlusOne:
           
           return {...state,counter:state.counter+1};

           case MinusOne:
           
            return {...state,counter:state.counter-1};
   
       default:
           return state;
   }

}
export default Reducer;




