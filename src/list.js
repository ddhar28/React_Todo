import React from 'react'
import TaskItem from './item'
// import style from './styles.module.css'

function TaskList (props) {
  return (
    <section>
      {props.list.map(item => {
        return (
          <TaskItem
            title={item.title}
            key={item.id} />
        )
      })}
    </section>
  )
}

export default TaskList