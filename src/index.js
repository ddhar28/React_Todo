import React from 'react'
import ReactDOM from 'react-dom'
import style from './styles.module.css'
import Input from './input'

function Container () {
  return (
    <div className={style.container}>
      <section className={`${style.sec} ${style.left}`}>
        <h2 className={style.title}>To-Do App</h2>
        <Input />
      </section>
      <section className={style.sec}>List</section>
    </div>
  )
}

ReactDOM.render(<Container />, document.getElementById('root'))
