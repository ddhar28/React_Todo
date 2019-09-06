import React from 'react'
import style from './styles.module.css'

const header = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

class TaskInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newItem: '',
      dueDate: '2018-01-01'
    }
  }

  updateInput = (e, field) => {
    if (field === 'title') this.setState({ newItem: e.target.value })
    else this.setState({ dueDate: e.target.value })
  }

  async addItem () {
    if (!this.state.newItem) return

    let newTask = {
      title: this.state.newItem.trim(),
      dueDate: this.state.dueDate}

    const res = await fetch('/add', {
      method: 'POST',
      headers: header,
      body: JSON.stringify(newTask)
    })
    let newItem = await res.json()
    this.props.addItem(newItem)
    this.setState({
      newItem: '',
      dueDate: '2018-01-01'
    })
  }

  render () {
    return (
      <section className={`${style.sec} ${style.left}`}>
        <input
          className={style.taskInput}
          type='text'
          maxLength='50'
          placeholder='Enter task title...'
          value={this.state.newItem}
          onChange={(e) => this.updateInput(e, 'title')} />

        <input
          type='date'
          className={style.dateInput}
          value={this.state.dueDate}
          onChange={(e) => this.updateInput(e, 'dueDate')} />

        <button className={style.addBtn} onClick={() => this.addItem()} >Add</button>
      </section>
    )
 }
}

export default TaskInput
