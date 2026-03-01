import React from 'react'
import TodosEditor from '../Components/TodosEditor'
import TodosListing from '../Components/TodosListing'

const TodosAppPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>TodoAPP</h1>
        <TodosEditor/>
        <TodosListing/>


    </div>
  )
}

export default TodosAppPage;
