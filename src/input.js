import React from 'react'
// import style from './styles.module.css'

function TaskInput (props) {
  return (
    <section>
      <input
        type='text'
        maxLength='50'
        placeholder='Enter task title...'
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown} />

      <button onClick={props.onClick} >Add</button>
    </section>
  )
}

export default TaskInput
