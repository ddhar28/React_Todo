import React from 'react'
// import style from './styles.module.css'

let style = {
  paddingBottom: '1px',
  margin: '0'
}

function TaskItem (props) {
  const { id, title, isComplete, note } = props.task
  let ActiveState = isComplete ? 'revert' : 'complete'
  console.log(title)
  return (
    <div style={style}>
      <p style={style}>
        <textarea value={title} onChange={(e) => props.onUpdate(id, 'title', e.target.value)} />
      </p>
      <textarea value={note} placeholder='Enter notes...' onChange={(e) => props.onUpdate(id, 'note', e.target.value)} />
      <button onClick={() => props.onChangeActiveState(id)} >{ActiveState}</button>
      <button onClick={() => props.onDelete(id)} >X</button>
    </div>
  )
}

export default TaskItem
