import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  const todosInprogress = () => {
    return todos.filter((todo) => todo.inprogress)
  }
  const todosCompleted = () => {
    return todos.filter((todo) => !todo.inprogress)
  }

  return (
    <>
      <h3 className='fw-light'>Todos In Progress</h3>
      <div className='my-5 list-group'>
        {todosInprogress().length > 0 ? (
          todos
            .filter((todo) => todo.inprogress)
            .map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <h2 className='fw-light text-center'>
            All Tasks Have been completed
          </h2>
        )}
      </div>

      <h3 className='fw-light'>Completed Todos</h3>
      <div className='my-5 list-group'>
        {todosCompleted().length > 0 ? (
          todos
            .filter((todo) => !todo.inprogress)
            .map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <h2 className='fw-light text-center'>All Tasks are in progress</h2>
        )}
      </div>
    </>
  )
}

export default TodoList
