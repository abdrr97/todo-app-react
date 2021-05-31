import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  // Tasks in prograss
  const todosList = todos.map((todo) => <Todo key={todo.id} todo={todo} />)

  // completed Tasks
  // const todosCompleted = todos
  //   .filter((todo) => !todo.inprogress)
  //   .map((todo) => <Todo key={todo.id} todo={todo} />)

  return (
    <>
      <h3 className='fw-light'>Todos In Progress - {todosList.length}</h3>
      <section className='row row-cols-1 row-cols-md-2 g-4'>
        {todos.length > 0 ? (
          todosList
        ) : (
          <h2 className='fw-light text-center text-secondary'>
            No Todos Found
          </h2>
        )}
      </section>
    </>
  )
}

export default TodoList
