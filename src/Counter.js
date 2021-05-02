import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from "./ActionTypes"

const Counter = ({counter, increment,decrement}) => {
    return (
        <div>
            <button onClick={()=>increment}>+</button>
                   {counter}
           <button  onClick={()=>decrement}>-</button>
        </div>
    )

    
}
const mapStateToProps=(state)=>{

    return {counter: state.counter}

 }
 const mapDispatchToProps=(dispatch)=>{

     return{
         increment:()=>dispatch (increment()),
         decrement:()=>dispatch (decrement())
     }
     
 }

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
