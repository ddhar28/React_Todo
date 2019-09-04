import React from 'react'
import style from './styles.module.css'

function TaskInput (props) {
  return (
    <section className={`${style.sec} ${style.left}`}>
      <input
        className={style.taskInput}
        type='text'
        maxLength='50'
        placeholder='Enter task title...'
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onEnter} />

      <button className={style.addBtn} onClick={props.onClick} >Add</button>
    </section>
  )
}

export default TaskInput
