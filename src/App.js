import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { db } from './firebase_config'

function App() {
  useEffect(() => {
    getTodos()
  }, []) // blank to run only on first launch

  const [todos, setTodos] = useState([])
  const [todoTitleInput, setTodoTitleInput] = useState('')
  const [todoContentInput, setTodoContentInput] = useState('')
  const [loading, setLoading] = useState(true)

  const todoFormArgs = {
    todoTitleInput,
    setTodoTitleInput,
    todoContentInput,
    setTodoContentInput,
  }

  const getTodos = () => {
    db.collection('todos').onSnapshot((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => {
          const { title, content, inprogress } = doc.data()

          return {
            id: doc.id,
            title: title,
            content: content,
            inprogress: inprogress,
          }
        })
      )
      setLoading(false)
    })
  }

  return (
    <main className='my-5 container'>
      <h1 className='display-6'>Todo List</h1>

      <TodoForm {...todoFormArgs} />

      <section className='my-5'>
        {loading ? (
          <div className='text-center'>
            <div className='spinner-border'></div>
          </div>
        ) : (
          <TodoList todos={todos} />
        )}
      </section>
    </main>
  )
}

export default App
