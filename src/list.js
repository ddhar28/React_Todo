import React from 'react'
import TaskItem from './item'
// import style from './styles.module.css'

function TaskList (props) {
  return (
    <section>
      {props.list.map(item => {
        return (
          <TaskItem
            key={item.id}
            task={item}
            onDelete={props.onDelete}
            onChangeActiveState={props.onChangeActiveState}
            onUpdate={props.onUpdate} />
        )
      })}
    </section>
  )
}

export default TaskList
