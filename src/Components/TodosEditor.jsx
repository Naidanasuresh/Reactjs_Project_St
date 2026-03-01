// import React, { useState } from "react";
// import useTodoStore from '../Stores/useStoreTodos.js'
// const TodosEditor = () => {
//   const [todostext, settodostext] = useState('');
//   const createTodo=useTodoStore((State)=>(State.create))

//   // function handleTodoTextChange(event) {
//   //   settodostext(event.target.value);
//   // }

//   function handleTodosSubmission(event) {
//     try {
//       event.preventDefault();
//       createTodo(todostext)
//     } catch (error) {
//         console.error(error)
//     } finally {
//         settodostext('')
//     }
//   }

//   return (
//     <>
//       <form onSubmit={handleTodosSubmission}>
//         <input onChange={(event)=>settodostext(event.target.value)} value={todostext} type="text"  className="border border-red-900 bg-red-50"/>
//         <button type="Submit" className="bg-red-500 border rounded-2xl p-1.5 text-white" >ADd</button>
//       </form>
//     </>
//   );
// };

// export default TodosEditor;



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

















//using tanstack 1/3/2026

// import React, { useState } from "react";
// import AppwriteTabledb from '../Appwrite_Services/AppwriteTableDB.js';
// import useTodoStore from '../Stores/useStoreTodos.js'
// const TodosEditor = () => {
//   const [todostext, settodostext] = useState('');
//   // const createTodo=useTodoStore((State)=>(State.create)) //zustand

//   // function handleTodoTextChange(event) {
//   //   settodostext(event.target.value);
//   // }
//   const appwriteTablesDb= new AppwriteTabledb()

//   async function handleTodosSubmission(event) {
//     try {
//       event.preventDefault();
//       const newTodoData=await appwriteTablesDb.createRecords(import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_TODOS_TABLE_ID, {text:todostext,description:""})
//       console.log(newTodoData)
//       console.log('efsef')
//       // createTodo(todostext)
//     } catch (error) {
//         console.error(error)
//     } finally {
//         settodostext('')
//     }
//   }

//   return (
//     <>
//       <form onSubmit={handleTodosSubmission}>
//         <input onChange={(event)=>settodostext(event.target.value)} value={todostext} type="text"  className="border border-red-900 bg-red-50"/>
//         <button type="Submit" className="bg-red-500 border rounded-2xl p-1.5 text-white" >ADd</button>
//       </form>
//     </>
//   );
// };

// export default TodosEditor;



//using useMutation 1/3/26

import React, { useState } from "react";
import AppwriteTabledb from '../Appwrite_Services/AppwriteTableDB.js';
import useTodoStore from '../Stores/useStoreTodos.js'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bounce, toast } from "react-toastify";

const TodosEditor = () => {
  const [todostext, settodostext] = useState('');
  // const createTodo=useTodoStore((State)=>(State.create)) //zustand

  // function handleTodoTextChange(event) {
  //   settodostext(event.target.value);
  // }
  const appwriteTablesDb= new AppwriteTabledb()
  const queryClient=useQueryClient()

  const createNewTodo=async()=>{
    //  try {
      
      const newTodoData=await appwriteTablesDb.createRecords(import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_TODOS_TABLE_ID, {text:todostext,description:""})
      console.log(newTodoData)
      return newTodoData

      // createTodo(todostext)
    // } catch (error) {
    //     console.error(error)
    // } 

  }
  
  const mutation=useMutation({
    mutationFn:createNewTodo,
    onSuccess:()=>{
      //to invalidate the cache and refetch todos
      queryClient.invalidateQueries({queryKey:['todos']})
      settodostext("")
      toast.success("🦄 New todo has been added, Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });



    },
    onerror:(error)=>{
      toast.error(error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

    }

  })


  async function handleTodosSubmission(event) {
    
    event.preventDefault()
    //to trigger the mutation  CREATE/POST
    mutation.mutate()
   
  }

  return (
    <>
      <form onSubmit={handleTodosSubmission}>
        <input onChange={(event)=>settodostext(event.target.value)} value={todostext} type="text"  className="border border-red-900 bg-red-50"/>
        <button type="Submit" className="bg-red-500 border rounded-2xl p-1.5 text-white" >ADd</button>
      </form>
    </>
  );
};

export default TodosEditor;