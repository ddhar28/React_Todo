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
      isComplete: false
    }
  }

  onChangeActiveState () {
    let isComplete = !this.state.isComplete

    this.setState({
      isComplete
    })

    console.log('changed task state to...', this.state.isComplete)
    this.props.onChangeActiveState(this.state.isComplete, this.state.id)
  }

  render () {
    let ActiveState = this.state.isComplete ? 'revoke' : 'complete'
    return (
      <div style={style}>
        <p style={style}>
          <textarea value={this.state.title} />
        </p>
        <textarea />
        <button onClick={(e) => this.onChangeActiveState(e)} >{ActiveState}</button>
        <button onClick={() => this.props.onDelete(this.state.id)} >X</button>
      </div>
    )
  }
}

export default TaskItem
