import React from 'react'
// import style from './styles.module.css'

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
      <div>
        <span>this.state.title</span>
        <button>X</button>
      </div>
    )
  }
}

export default TaskItem
