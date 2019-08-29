import React from 'react'
// import style from './styles.module.css'

let style = {
  paddingBottom: '1px',
  margin: '0'
}

class TaskItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: this.props.id,
      title: this.props.title,
      completed: false
    }
  }

  render () {
    return (
      <div style={style}>
        <p style={style}>{this.state.title}</p>
        <textarea />
        <button onClick={() => this.props.onDelete(this.state.id)} >X</button>
      </div>
    )
  }
}

export default TaskItem
