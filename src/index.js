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
      title: this.state.newItem
    }

    const list = [...this.state.list]
    list.push(newItem)

    this.setState({
      list,
      newItem: ''
    })
  }

  removeItem = (id) => {
    const list = this.state.list.filter(item => item.id !== id)
    this.setState({
      list
    })
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
          onDelete={this.removeItem} />
      </>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('root'))
