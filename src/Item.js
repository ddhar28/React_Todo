import React from 'react'
import onClickOutside from 'react-onclickoutside'
// import style from './styles.module.css'

let style = {
  paddingBottom: '1px',
  margin: '0',
  backgroundColor: 'cadetblue',
  width: '25%'
}

function TaskItem (props) {
  const { _id, title, isComplete, note } = props.task
  let ActiveState = isComplete === 'true' ? '\u21BA' : '\u2714'

  TaskItem.handleClickOutside = () => props.updateItem(_id)

  return (
    <div style={style}>
      <p>
        <textarea value={title} onChange={(e) => props.onUpdate(_id, 'title', e.target.value)} />
      </p>
      <textarea value={note} placeholder='Enter notes...' onChange={(e) => props.onUpdate(_id, 'note', e.target.value)} />
      <button onClick={() => props.onChangeActiveState(_id, isComplete)} >{ActiveState}</button>
      <button onClick={() => props.onDelete(_id)} >&#x2717;</button>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => TaskItem.handleClickOutside
}

export default onClickOutside(TaskItem, clickOutsideConfig)
