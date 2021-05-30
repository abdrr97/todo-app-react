import React from 'react'
import { db } from '../firebase_config'

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection('todos').doc(id).update({
      inprogress: !inprogress,
    })
  }

  function deleteTodo() {
    db.collection('todos').doc(id).delete()
  }

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {todo}
        {inprogress ? 'In Progress' : 'Completed'}
      </div>

      <button onClick={toggleInProgress}>
        {inprogress ? 'Done' : 'UnDone'}
      </button>
      <button onClick={deleteTodo}>X</button>
    </div>
  )
}
