import React from 'react'
import style from './styles.module.css'
import TaskInput from './Input'
import TaskList from './List'

const header = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      newItem: '',
      list: []
    }
  }

  async componentDidMount() {
    const result = await fetch('/get', {
      method: 'GET',
      Headers: header
    });
    const list = await result.json() 
    this.setState({ list })
  }

  updateInput (val) {
    this.setState({
      newItem: val
    })
  }

  async addItem () {
    let newTask = this.state.newItem.trim()
    if (newTask === '') return

    const res = await fetch('/add', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({ title: newTask })
    })
    let newItem = await res.json()
    const list = [...this.state.list]
    list.push(newItem)

    this.setState({
      list,
      newItem: ''
    })
  }

  async removeItem (taskId) {
    await fetch('/delete', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({ _id: taskId })
    })

    const list = this.state.list.filter(item => item._id !== taskId)
    this.setState({ list })
  }

  async updateActivestate (taskId, isComplete) {
    let val = isComplete === 'true' ? 'false' : 'true'
    
    await fetch('/edit', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({ 
		  _id: taskId, 
		  isComplete: val})
    })

    const list = [...this.state.list]
    list.forEach(item => {
      if (item._id === taskId) item.isComplete = val
    })

    console.log(list)
    this.setState({ list })
  }

  updateTaskState = (taskId, field, value) => {
    const list = [...this.state.list]
    list.forEach(item => {
      if (item._id === taskId) item[field] = value
    })

    this.setState({ list })
  }

  async updateItem (taskId) {
    const editedTask = this.state.list.find(item => item._id === taskId)

    await fetch('/edit', {
      method: 'POST',
      headers: header,
      body: JSON.stringify(editedTask)
    })
  }

  render () {
    return (
      <>
      <header>
        <h2 className={style.title}>To-Do App</h2>
        <p>Think. Plan. Execute.</p>
        </header>
      <div className={style.container}>
        <TaskInput
          value={this.state.newItem}
          onChange={(e) => this.updateInput(e.target.value)}
          onClick={() => this.addItem()}
          onEnter={(e) => {
            if (e.keyCode === 13) this.addItem()
          }} />
        <TaskList
          list={this.state.list}
          onDelete={(id) => this.removeItem(id)}
          onChangeActiveState={(id, state) => this.updateActivestate(id, state)}
          onUpdate={this.updateTaskState}
          updateItem={(id) => this.updateItem(id)} />
      </div>
      </>
    )
  }
}

export default App
