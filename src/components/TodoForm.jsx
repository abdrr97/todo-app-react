import React from 'react'

const TodoForm = ({ addTodo, todoInput, setTodoInput }) => {
  return (
    <>
      <form className=''>
        <div class='mb-3'>
          <input
            className='form-control'
            placeholder='Write a Todo'
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='btn btn-outline-primary'
          onClick={addTodo}
        >
          Default
        </button>
      </form>
    </>
  )
}

export default TodoForm
