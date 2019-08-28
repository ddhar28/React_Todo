import React from 'react'
import style from './styles.module.css'

function Input () {
  return (
    <>
      <input className={style.taskInput} maxLength='50' type='text' />
      <button className={style.addBtn}>Add</button>
    </>
  )
}

export default Input
