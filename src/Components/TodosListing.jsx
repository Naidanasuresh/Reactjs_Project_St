// // import React, { useEffect } from 'react'


// import { useEffect, useState } from "react"
// import AppwriteTablesDB from "../Appwrite_Services/AppwriteTableDB"
// import { useQuery } from "@tanstack/react-query";

// // import useTodoStore from '../Stores/useStoreTodos.js'
// const TodosListing = () => {

//     // const todos=useTodoStore ((State)=>State.todos)
//     // useEffect(()=>{
//     //     console.log("Rerender")
//     // })

//     // const [todos, setTodos]=useState([])
    

//     const appwritaTableDb=new AppwriteTablesDB()

//     const fetchallTodos=async()=>{
//         try {
//             const data= await appwritaTableDb.getAllRecords()
            
//         } catch (error) {
            
//         }
//     }


//     useEffect(()=>{
//         fetchallTodos()
//     })

//     // if(isPending){
//     //     return  <h1 className="text-5xl">Todos are Loading</h1>
//     // }   
//   return (
//     <div className="flex flex-col items-start gap-3">

//         {todos.map((todo)=>(
//             <article key={todo?.$id} className="p-3 bg-red-200 rounded-md shadow-sm">
//                 <h1 className="font-semibold text-xl">{todo?.text}</h1>
//                  <p>{todo?.description}</p>
//             </article>
           

//         ))}
      
//     </div>
//   )
// }

// export default TodosListing



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








//practice 28/02/2026  but the class was 13/02/2026 without tanstack


// import { useEffect, useState } from "react";
// import AppwriteTablesDB from '../Appwrite_Services/AppwriteTableDB'
// const appwriteTablesDB=new AppwriteTablesDB();
// const TodoListing=()=>{
    
//     const [todos,setTodos]=useState([])
//     const fetchAllTodos=async ()=>{
//         try {
//             const data =await appwriteTablesDB.getAllRecords('695e32a80021cb050bb8', 'todos')
//             setTodos(data)
//             console.log(data)
            
//         } catch (error) {
            
//         }
//     }

//     useEffect(()=>{
//         fetchAllTodos()

//     },[])

//     return(
//         <div className="flex flex-col items-center gap-4">
//             {
//                 todos.map((todo)=>(
//                     // <h1 key={index}>{todo}</h1>
//                     <article key={todo?.$id} className="p-3 bg-fuchsia-700 rounded-md shadow-md">
//                         <h1 className="font-semibold text-xl">{todo?.text}</h1>
//                         <p>{todo?.description}</p>

//                     </article>  
//                     // {
//                     //     console.log(todo?.text)
//                     //     console.log(todo?.description)
//                     // }
//                 ))
//             }

//         </div>
//     )
// }

// export default TodoListing










//with tanstack

// import { useEffect, useState } from "react";
import AppwriteTablesDB from '../Appwrite_Services/AppwriteTableDB'
import { useQuery } from "@tanstack/react-query";
const appwriteTablesDB=new AppwriteTablesDB();

 export const fetchAllTodos=async ()=>{
        try {
            const data =await appwriteTablesDB.getAllRecords('695e32a80021cb050bb8', 'todos')
            // setTodos(data)
            return data
            // console.log(data)
            
        } catch (error) {
            
        }
    }
const TodoListing=()=>{
    
    // const [todos,setTodos]=useState([])
   

    const {data:todos,isPending,isFetching, isLoading, error }=useQuery({
        queryKey:['todos'],
        queryFn:fetchAllTodos,
        refetchOnMount:true,
        refetchOnWindowFocus: true
    })

    if (isPending){
        return <h1 className="text-5xl">Todos are Loading...</h1>
    }

    // useEffect(()=>{
    //     fetchAllTodos()

    // },[])

    return(
        <div className="flex flex-col items-center gap-4">
            {
                todos.map((todo)=>(
                    // <h1 key={index}>{todo}</h1>
                    <article key={todo?.$id} className="p-3 bg-fuchsia-700 rounded-md shadow-md">
                        <h1 className="font-semibold text-xl">{todo?.text}</h1>
                        <p>{todo?.description}</p>

                    </article>  
                    // {
                    //     console.log(todo?.text)
                    //     console.log(todo?.description)
                    // }
                ))
            }

        </div>
    )
}

export default TodoListing








