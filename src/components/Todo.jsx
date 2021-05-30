import React from 'react'
import { db } from '../firebase_config'

const Todo = ({ todo: { todo, inprogress, id } }) => {
  // toggle progress
  const toggleInProgress = () => {
    db.collection('todos').doc(id).update({
      inprogress: !inprogress,
    })
  }

  // delete progress
  const deleteTodo = () => {
    db.collection('todos').doc(id).delete()
  }
  return (
    <div
      style={{
        textDecoration: !inprogress ? 'line-through' : 'none',
        color: !inprogress ? '#999' : 'black',
      }}
      className='fw-bold list-group-item d-flex align-items-center justify-content-between'
    >
      <div>{todo}</div>

      <div className=''>
        <span className={inprogress ? 'badge bg-warning' : 'badge bg-success'}>
          {inprogress ? 'In Progress' : 'Completed'}
        </span>
        <button
          className='btn btn-sm  btn-primary mx-1'
          onClick={toggleInProgress}
        >
          {inprogress ? 'Done' : 'UnDone'}
        </button>
        <button className='btn btn-sm  btn-danger mx-1' onClick={deleteTodo}>
          X
        </button>
      </div>
    </div>
  )
}
export default Todo
