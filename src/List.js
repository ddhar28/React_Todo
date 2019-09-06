import React from 'react'
import TaskItem from './Item'
import style from './styles.module.css'

class TaskList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      completed: false
    }
  }

  toggleDisplay = (e, isComplete) => {
    const completed = isComplete
    this.setState({completed})
    // e.target.parentNode.style.display = 'none'
  }

  listDisplay = () => {
    const completed = this.state.completed ? 'true' : 'false'
    const list = this.props.list.filter(item => item.isComplete === completed)
    return (
      <section className={style.listDisplay}>
      {list.map(item => {
        return (
          <TaskItem
            key={item._id}
            task={item}
            onDelete={this.props.onDelete}
            onChangeActiveState={this.props.onChangeActiveState}
            onUpdate={this.props.onUpdate}
            updateItem={this.props.updateItem} />
        )
      })}
    </section>
    )
  }

  render () {
    return (
      <section className={`${style.sec} ${style.right}`}>
        <span className={style.dropdown}>
          <button className={style.dropbtn}>&#8801;</button>
          <div className={style.dropdownContent}>
            <p onClick={(e) => this.toggleDisplay(e, false)}>To-Dos</p>
            <p onClick={(e) => this.toggleDisplay(e, true)}>Completed</p>
          </div>
        </span>
        {this.listDisplay()}
      </section>
    )
 }
}

export default TaskList
