import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <>
      <div className='my-5 list-group'>
        {todos.map((todo) => {
          console.log(todo)
          return (
            <Todo
              key={todo.id}
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          )
        })}
      </div>
    </>
  )
}

export default TodoList
