import React from 'react'

const TodoForm = ({ addTodo, todoInput, setTodoInput }) => {
  return (
    <>
      <form>
        <input
          className='form-control'
          placeholder='Write a Todo'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
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
