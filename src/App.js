import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import firebase from 'firebase'
import { db } from './firebase_config'

function App() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTodos()
  }, []) // blank to run only on first launch

  const getTodos = () => {
    db.collection('todos').onSnapshot((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      )
      setLoading(false)
    })
  }

  const addTodo = (e) => {
    let { value } = e.target
    e.preventDefault()
    if (value !== '') {
      db.collection('todos').add({
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
      })

      setTodoInput('')
    }
  }

  return (
    <main className='my-5 container'>
      <h1 className='display-6'>Todo List</h1>

      <TodoForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        addTodo={addTodo}
      />

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
