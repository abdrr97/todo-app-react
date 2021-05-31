import React from 'react'
import { db } from '../firebase_config'

const TodoForm = (props) => {
  const {
    todoTitleInput,
    setTodoTitleInput,
    todoContentInput,
    setTodoContentInput,
  } = props

  const addTodo = (e) => {
    e.preventDefault()

    if (todoTitleInput !== '') {
      db.collection('todos').add({
        inprogress: true,
        title: todoTitleInput,
        content: todoContentInput,
      })

      setTodoTitleInput('')
      setTodoContentInput('')
    }
  }
  return (
    <>
      <form onSubmit={addTodo}>
        <div className='mb-3'>
          <div className='my-5'>
            <label htmlFor='' className='fw-light'>
              Todo Title
            </label>
            <input
              className='form-control'
              placeholder='Write a Todo'
              value={todoTitleInput}
              onChange={(e) => setTodoTitleInput(e.target.value)}
            />
          </div>
          <div className='my-5'>
            <label htmlFor='' className='fw-light'>
              Todo Content
            </label>
            <textarea
              className='form-control'
              placeholder='Write a Todo'
              value={todoContentInput}
              onChange={(e) => setTodoContentInput(e.target.value)}
            />
          </div>
        </div>
        <button
          type='submit'
          className='btn btn-outline-primary'
          onClick={addTodo}
        >
          Add Todo
        </button>
      </form>
    </>
  )
}

export default TodoForm
