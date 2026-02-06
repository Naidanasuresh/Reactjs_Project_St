import React, { useEffect } from 'react'
import useTodoStore from '../Stores/useStoreTodos.js'
const TodosListing = () => {

    const todos=useTodoStore ((State)=>State.todos)
    useEffect(()=>{
        console.log("Rerender")
    })
  return (
    <div>

        {todos.map((todo,index)=>(
            <h1 key={index}>{todo}</h1>

        ))}
      
    </div>
  )
}

export default TodosListing



// import useTodosStore from "../Stores/useStoreTodos"

// const TodoEditor=()=>{

//   const todos=useTodosStore((State)=>State.todos)

//   return (
//     <>

//     {
//       todos.map((todo,index)=>{
//         <h1 key={index}>{todo}</h1>

//       })
//     }
//     </>
//   )

// }

// export default TodoEditor
