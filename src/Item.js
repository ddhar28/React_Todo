import React from 'react'
import style from './styles.module.css'

class TaskItem extends React.Component {
  render () {
    const { _id, title, isComplete, note, due } = this.props.task
    let ActiveState = isComplete === 'true' ? '\u21BA' : '\u2714'

    return (
      <div className={style.taskItem}>
        <textarea
          className={style.taskName}
          value={title}
          onChange={(e) => this.props.onUpdate(_id, 'title', e.target.value)}
          onBlur={() => this.props.updateItem(_id)} />
        <textarea
          className={style.note}
          value={note}
          placeholder='Enter notes...'
          onChange={(e) => this.props.onUpdate(_id, 'note', e.target.value)}
          onBlur={() => this.props.updateItem(_id)} />

        <span className={style.date}>Due: {due.slice(0, 10)}</span>
        <button
          className={style.taskBtn}
          onClick={() => this.props.onChangeActiveState(_id, isComplete)} >{ActiveState}</button>
        <button
          className={style.taskBtn}
          onClick={() => this.props.onDelete(_id)} >&#x2717;</button>
      </div>
    )
  }
}

export default TaskItem
