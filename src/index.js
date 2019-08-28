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
    console.log('updating...', this.state)
  }

  addItem () {
    const newItem = {
      id: 1 + Math.random(),
      title: this.state.newItem
    }
    console.log('newItem', newItem)

    const list = [...this.state.list]
    list.push(newItem)
    console.log('list', list)

    this.setState({
      list,
      newItem: ''
    })
    console.log('updated state...', this.state)
  }

  render () {
    return (
      <>
        <header><h2>To-Do App</h2></header>
        <TaskInput
          value={this.state.newItem}
          onChange={(e) => this.updateInput(e.target.value)}
          onClick={() => this.addItem()} />
        <TaskList list={this.state.list} />
      </>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('root'))
