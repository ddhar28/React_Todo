import React from 'react'
import onClickOutside from 'react-onclickoutside'
import style from './styles.module.css'

class TaskItem extends React.Component {
  constructor (props) {
    super(props)
  }
  
  handleClickOutside = () => this.props.updateItem(this.props.task._id)

  render () {
    const _id = this.props.task._id
    const title = this.props.task.title
    const isComplete = this.props.task.isComplete
    const note = this.props.task.note
    let ActiveState = isComplete === 'true' ? '\u21BA' : '\u2714'

    return (
    <div className={style.taskItem}>
      <textarea
        className={style.taskName}
        value={title}
        onChange={(e) => this.props.onUpdate(_id, 'title', e.target.value)} />
      <textarea
        className={style.note}
        value={note}
        placeholder='Enter notes...'
        onChange={(e) => this.props.onUpdate(_id, 'note', e.target.value)} />

      <button onClick={() => this.props.onChangeActiveState(_id, isComplete)} >{ActiveState}</button>
      <button onClick={() => this.props.onDelete(_id)} >&#x2717;</button>
    </div>
  )}
}

export default onClickOutside(TaskItem)
