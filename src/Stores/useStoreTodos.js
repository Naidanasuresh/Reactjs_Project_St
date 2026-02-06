import {create} from 'zustand';

const useTodosStore=create((set)=>({
    todos:[],
    create :((newTodo)=>(set((State)=>({todos:[...State.todos,newTodo]}))))
}))
export default useTodosStore;










// import {create} from 'zustand';

// const useTodoStore=create((set)=>({ //we create a store 
//     todos:[],// data
//     createTodo :((newTodo)=>(set((State)=>({todos:[...State.todos,newTodo]})))) //spread opertor copy the previous data in the todos array, and set  merge the  newtodo and the new array is override the old array // the State takes the previous dataand it is a call back function
// }))

// export default useTodoStore