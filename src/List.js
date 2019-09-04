import React from 'react'
import TaskItem from './Item'
import style from './styles.module.css'

function TaskList (props) {
  return (
    <section className={`${style.sec} ${style.right}`}>
      {props.list.map(item => {
        return (
          <TaskItem
            key={item._id}
            task={item}
            onDelete={props.onDelete}
            onChangeActiveState={props.onChangeActiveState}
            onUpdate={props.onUpdate}
            updateItem={props.updateItem} />
        )
      })}
    </section>
  )
}

export default TaskList
