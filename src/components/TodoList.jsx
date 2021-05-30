import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  // Tasks in prograss
  const todosInprogress = todos
    .filter((todo) => todo.inprogress)
    .map((todo) => <Todo key={todo.id} todo={todo} />)

  // completed Tasks
  const todosCompleted = todos
    .filter((todo) => !todo.inprogress)
    .map((todo) => <Todo key={todo.id} todo={todo} />)

  return (
    <>
      <h3 className='fw-light'>Todos In Progress</h3>
      <div className='my-5 list-group'>
        {todosInprogress.length > 0 ? (
          todosInprogress
        ) : (
          <h2 className='fw-light text-center text-secondary'>
            All Tasks Have been completed
          </h2>
        )}
      </div>

      <h3 className='fw-light'>Completed Todos</h3>
      <div className='my-5 list-group'>
        {todosCompleted.length > 0 ? (
          todosCompleted
        ) : (
          <h2 className='fw-light text-center text-secondary'>
            All Tasks are in progress
          </h2>
        )}
      </div>
    </>
  )
}

export default TodoList
