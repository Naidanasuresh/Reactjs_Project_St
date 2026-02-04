import React, { useState } from "react";
import useTodoStore from '../Stores/useStoreTodos.js'
const TodosEditor = () => {
  const [todostext, settodostext] = useState('');
  const createTodo=useTodoStore((State)=>(State.createTodo))

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
        <input onChange={handleTodoTextChange} value={todostext} type="text" />
        <button type="Submit">ADd</button>
      </form>
    </>
  );
};

export default TodosEditor;
