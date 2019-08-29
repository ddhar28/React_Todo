import React from 'react'
import ReactDOM from 'react-dom'
// import style from './styles.module.css'
import TaskInput from './input'
import TaskList from './list'

class Container extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      newItem: '',
      list: []
    }
  }

  updateInput (val) {
    this.setState({
      newItem: val
    })
  }

  addItem () {
    const newItem = {
      id: 1 + Math.random(),
      title: this.state.newItem,
      isComplete: false
    }

    const list = [...this.state.list]
    list.push(newItem)

    this.setState({
      list,
      newItem: ''
    })
  }

  removeItem = (taskId) => {
    const list = this.state.list.filter(item => item.id !== taskId)
    this.setState({ list })
  }

  updateActivestate = (isComplete, taskId) => {
    const list = [...this.state.list]
    list.forEach(item => {
      if (item.id === taskId) item.isComplete = isComplete
    })

    this.setState({ list })
    console.log(this.state.list)
  }

  render () {
    return (
      <>
        <header><h2>To-Do App</h2></header>
        <TaskInput
          value={this.state.newItem}
          onChange={(e) => this.updateInput(e.target.value)}
          onClick={() => this.addItem()}
          onEnter={(e) => {
            if (e.keyCode === 13) this.addItem()
          }} />
        <TaskList
          list={this.state.list}
          onDelete={this.removeItem}
          onChangeActiveState={this.updateActivestate} />
      </>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('root'))
