import React from 'react'
import { db } from '../firebase_config'

const Todo = (props) => {
  let {
    todo: { title, content, inprogress, id },
  } = props
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
    <div className='col'>
      <article
        className='card text-dark bg-light mb-3'
        style={{
          border: '3px solid',
          borderColor: inprogress ? 'orange' : 'green',
        }}
      >
        <div className='card-header d-flex justify-content-between border-light align-items-center'>
          <h4 className='fw-light'>{title}</h4>
          <div>
            <button
              className='btn btn-sm btn-outline-primary mx-1'
              onClick={toggleInProgress}
            >
              {inprogress ? 'done' : 'un done'}
            </button>
            <button className='btn btn-sm btn-danger mx-1' onClick={deleteTodo}>
              &times;
            </button>
          </div>
        </div>
        <div className='card-body  border-light'>{content}</div>
        <div className='card-footer  border-light'>
          <span
            className={inprogress ? 'badge bg-warning' : 'badge bg-success'}
          >
            {inprogress ? 'In Progress' : 'Completed'}
          </span>
        </div>
      </article>
    </div>
  )
}
export default Todo
