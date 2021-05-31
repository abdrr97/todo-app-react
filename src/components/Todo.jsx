import React from 'react'
import { db } from '../firebase_config'

const Todo = (props) => {
  let {
    todo: { title, content, inprogress, id, createdAt },
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
          <div className='form-check form-switch'>
            <input
              className='form-check-input'
              type='checkbox'
              id='flexSwitchCheckDefault'
              value={!inprogress}
              onChange={toggleInProgress}
            />
            <label
              className='form-check-label'
              htmlFor='flexSwitchCheckDefault'
            >
              change progress
            </label>
          </div>
          <button className='btn btn-sm btn-danger mx-1' onClick={deleteTodo}>
            &times;
          </button>
        </div>
        <div className='card-body border-light'>
          <pre>{content}</pre>
        </div>
        <div className='card-footer border-light d-flex justify-content-between align-items-center'>
          <span
            className={inprogress ? 'badge bg-warning' : 'badge bg-success'}
          >
            {inprogress ? 'In Progress' : 'Completed'}
          </span>

          <span>{new Date(createdAt).toDateString()}</span>
        </div>
      </article>
    </div>
  )
}
export default Todo
