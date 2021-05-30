import { useState, useEffect } from 'react'
import { db } from './firebase_config'
import firebase from 'firebase'
import TodoListItem from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')

  useEffect(() => {
    getTodos()
  }, []) // blank to run only on first launch

  function getTodos() {
    db.collection('todos').onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      )
    })
  }

  function addTodo(e) {
    e.preventDefault()

    db.collection('todos').add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    })

    setTodoInput('')
  }

  return (
    <div className='App'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <h1>Sanskar Tiwari Todos App 😃</h1>
        <form>
          <input
            id='standard-basic'
            label='Write a Todo'
            value={todoInput}
            style={{ width: '90vw', maxWidth: '500px' }}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button type='submit' variant='contained' onClick={addTodo}>
            Default
          </button>
        </form>

        <div style={{ width: '90vw', maxWidth: '500px', marginTop: '24px' }}>
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
