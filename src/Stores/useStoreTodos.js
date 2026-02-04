import {create} from 'zustand';

const useTodoStore=create((set)=>({
    todos:[],
    createTodo :((newTodo)=>(set((State)=>({todos:[...State.todos,newTodo]}))))
}))

export default useTodoStore