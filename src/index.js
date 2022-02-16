/* eslint-disable react/destructuring-assignment */
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasklist from './components/TaskList'

class App extends React.Component {
  maxId = 100

  state = {
    toDoData: [],
    filter: 'all',
  }

  deleteItem = (id) => {
    this.setState(({ toDoData }) => {
      const delId = toDoData.findIndex((el) => el.id === id)
      const newArray = [
        ...toDoData.slice(0, delId),
        ...toDoData.slice(delId + 1),
      ]
      return { toDoData: newArray }
    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      id: this.maxId++,
      done: false,
      date: new Date(),
      checked: false,
      edit: false,
    }

    this.setState(({ toDoData }) => {
      const newArr = [...toDoData, newItem]
      return {
        toDoData: newArr,
      }
    })
  }

  editForm = (text) => {
    if (text.trim() !== '') {
      this.setState(({ toDoData }) => {
        const editId = toDoData.findIndex((el) => el.edit)
        let newEditId = toDoData[editId]

        newEditId = { ...newEditId, label: text.trim(), edit: false }
        const newArr = [
          ...toDoData.slice(0, editId),
          newEditId,
          ...toDoData.slice(editId + 1),
        ]
        return {
          toDoData: newArr,
        }
      })
    } else {
      this.setState(({ toDoData }) => {
        const editId = toDoData.findIndex((el) => el.edit)
        let newEditId = toDoData[editId]

        newEditId = { ...newEditId, edit: false }
        const newArr = [
          ...toDoData.slice(0, editId),
          newEditId,
          ...toDoData.slice(editId + 1),
        ]
        return {
          toDoData: newArr,
        }
      })
    }
  }

  onEdit = (id) => {
    this.setState(({ toDoData }) => {
      const editId = toDoData.findIndex((el) => el.id === id)
      const oldItem = toDoData[editId]
      const newItem = { ...oldItem, edit: !oldItem.edit }
      const newArr = [
        ...toDoData.slice(0, editId),
        newItem,
        ...toDoData.slice(editId + 1),
      ]
      return {
        toDoData: newArr,
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ toDoData }) => {
      const doneId = toDoData.findIndex((el) => el.id === id)
      const oldItem = toDoData[doneId]

      const newItem = {
        ...oldItem,
        done: !oldItem.done,
        checked: !oldItem.checked,
      }
      const newArr = [
        ...toDoData.slice(0, doneId),
        newItem,
        ...toDoData.slice(doneId + 1),
      ]

      return {
        toDoData: newArr,
      }
    })
  }

  deleteComplited = () => {
    const { toDoData } = this.state
    const uncomplitedItems = toDoData.filter((item) => !item.done)
    this.setState({ toDoData: uncomplitedItems })
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getFilteredItems = (item) => {
    switch (this.state.filter) {
      case 'all':
        return true
      case 'complited':
        return item.done
      case 'active':
        return !item.done
      default:
        return true
    }
  }

  activeButtonClass = (buttonName) => {
    if (buttonName === this.state.filter) {
      return 'selected'
    }
    return ''
  }

  render() {
    const elseToDo =
      this.state.toDoData.length -
      this.state.toDoData.filter((el) => el.done).length
    return (
      <section className="todoapp">
        <Header addItem={this.addItem} />
        <section className="main">
          <Tasklist
            toDoItem={this.state.toDoData.filter(this.getFilteredItems)}
            onDestroyed={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onEdit={this.onEdit}
            editForm={this.editForm}
          />
        </section>
        <Footer
          elseToDo={elseToDo}
          deleteComplited={this.deleteComplited}
          filter={this.setFilter}
          getFilteredItems={this.getFilteredItems}
          activeButtonClass={this.activeButtonClass}
        />
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// https://www.youtube.com/watch?v=8s6JmWC9LqQ
