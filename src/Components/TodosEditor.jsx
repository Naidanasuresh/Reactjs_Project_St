import React, { useState } from "react";
import useTodoStore from '../Stores/useStoreTodos.js'
const TodosEditor = () => {
  const [todostext, settodostext] = useState('');
  const createTodo=useTodoStore((State)=>(State.create))

  function handleTodoTextChange(event) {
    settodostext(event.target.value);
  }

  function handleTodosSubmission(event) {
    try {
      event.preventDefault();
      createTodo(todostext)
    } catch (error) {
        console.error(error)
    } finally {
        settodostext('')
    }
  }

  return (
    <>
      <form onSubmit={handleTodosSubmission}>
        <input onChange={handleTodoTextChange} value={todostext} type="text"  className="input"/>
        <button type="Submit">ADd</button>
      </form>
    </>
  );
};

export default TodosEditor;



// import { useState } from "react";
// import useTodosStore from "../Stores/useStoreTodos";

// const TodoEditor=()=>{
//   const [texttodos, settexttodos]=useState('')

//   const createtodo=useTodosStore((State)=>(State.todos))

//   function handletodostext(event){
//     settexttodos(event.target.value)


//   }

//   function handleTodosSubmission(event){
//     try{
//       event.preventDefault();
//       createtodo(texttodos)


//     }
//     catch(error){
//       console.error("error")
      

//     }
//     finally{
//       settexttodos('')

//     }
//   }
//   return (
//     <>
//     <form onSubmit={handleTodosSubmission}>
//       <input onChange={handletodostext} type="text" value={texttodos} />
//       <button type="submit">Add</button>
//     </form>
//     </>
//   )


// }

// export default TodoEditor;