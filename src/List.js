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

  toggleDisplay = (isComplete) => {
    const completed = isComplete
    this.setState({completed})
  }

  listDisplay = () => {
    const completed = this.state.completed ? 'true' : 'false'
    const list = this.props.list.filter(item => item.isComplete === completed)
    return (
      <section>
      {list.map(item => {
        return (
          <TaskItem
            className={style.listDisplay}
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
        <span className='dropdown'>
          <button className='dropbtn'>&#8801;</button>
          <div className='dropdown-content'>
            <p onClick={() => this.toggleDisplay(false)}>To-Dos</p>
            <p onClick={() => this.toggleDisplay(true)}>Completed</p>
          </div>
        </span>
        {this.listDisplay()}
      </section>
    )
 }
}

export default TaskList
