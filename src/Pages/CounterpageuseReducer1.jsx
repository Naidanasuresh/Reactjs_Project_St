import { useReducer } from 'react'
const initialState={count:0}
function reducer(state,action){
    switch(action.type){
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        case "reset":
            return {count:0}
        default :
            return state
    }
}

const CounterpageuseReducer1 = () => {

    const [state,dispatch]=useReducer(reducer,initialState)
    console.log("Component Rendered")
    console.log("Current State:", state)

  return (
    <div>

        <button onClick={()=>dispatch({type:'increment'})}>Add</button>
        <p>count:{state.count}</p>
        <button onClick={()=>dispatch({type:'decrement'})}>Subtract</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default CounterpageuseReducer1
