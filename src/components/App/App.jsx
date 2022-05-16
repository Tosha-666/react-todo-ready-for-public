import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Tasklist } from '../TaskList'


export default class App extends React.Component{

  maxId = 100

  state = {
    toDoData: [],
    filter:'all'
}

// const [maxId, setMaxId]=useState(100)
// const [toDoData, setToDoData]=useState([])
// const [filter, setFilter]=useState('all')

deleteItem = (id) => {
  this.setState(({ toDoData })=> {
    const delId = toDoData.findIndex((el) => el.id === id)
    const newArray = [...toDoData.slice(0, delId), ...toDoData.slice(delId+1)]
    return {toDoData: newArray}
})
  }

addItem = (text, time) => {
    if (((time[0]||time[1])<0)&&((time[0]||time[1])>59)){
      alert('Введите корректные значения')
    } else {

    const newItem = {
      label: text,
      id:this.maxId++,
      date: new Date(),
      done: false,
      edit: false,
      time,
    }
    
    this.setState(({toDoData})=>{
       const newArr = [...toDoData, newItem]
      return {
        toDoData: newArr
    }
   })
  }
  
  }

editForm = (text) => {
  if (text.trim() !== '') {
    this.setState(({ toDoData }) => {
      const editId = toDoData.findIndex((el) => el.edit)
      let newEditId = toDoData[editId]
      newEditId = {...newEditId, label:text.trim(), edit:false}
      const newArr = [
          ...toDoData.slice(0, editId), newEditId, ...toDoData.slice(editId + 1)
      ]
      return {
          toDoData:newArr
      }
  })
    } else {
      this.setState(({ toDoData }) => {
        const editId = toDoData.findIndex((el) => el.edit)
        let newEditId = toDoData[editId]
        newEditId = {...newEditId,  edit:false}
        const newArr = [
            ...toDoData.slice(0, editId), newEditId, ...toDoData.slice(editId + 1)
        ]
        return {
            toDoData:newArr
        }
    })
  }
}

onEditEsc=()=>{
  this.setState(({toDoData})=>{
     const editId = toDoData.findIndex((el) => el.edit)
     let newEditId = toDoData[editId]
     newEditId = {...newEditId, edit:false}
     const newArr = [
      ...toDoData.slice(0, editId), newEditId, ...toDoData.slice(editId + 1)
  ]
  return {
      toDoData:newArr
  }
  })
}

 onEdit = (id) => {
  this.setState(({ toDoData }) => {
    const editId = toDoData.findIndex((el) => el.id === id)
    const oldItem = toDoData[editId]
    const newItem = { ...oldItem, edit: !oldItem.edit }
    const newArr = [
        ...toDoData.slice(0, editId), newItem, ...toDoData.slice(editId+1)
    ]
    return {
        toDoData:newArr
    }
})
}

 onToggleDone = (id) => {
  this.setState(({ toDoData }) => {
    const doneId = toDoData.findIndex((el) => el.id === id)
    const oldItem = toDoData[doneId]
    
    const newItem ={...oldItem, done:!oldItem.done, checked:!oldItem.checked}
    const newArr = [
        ...toDoData.slice(0, doneId), newItem, ...toDoData.slice(doneId+1)
    ]

    return {
        toDoData:newArr
    }
})
}

 deleteComplited = () => {
  const {toDoData}=this.state
  const uncomplitedItems =toDoData.filter((item) => !item.done)
  this.setState(
      { toDoData: uncomplitedItems }
  )
}

setFilter = (filter) => {
  this.setState({ filter })
      };

getFilteredItems = (item) => {
  switch (this.state.filter) {
      case ('all'):
          return true
      case ('complited'):
          return item.done
      case ('active'):
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
    const {toDoData}=this.state
  const elseToDo = toDoData.length - toDoData.filter((el) => el.done).length
    return <section className='todoapp'>
      <Header
          addItem={this.addItem}/>
  <section className='main'>
      <Tasklist
          toDoItem={toDoData.filter(this.getFilteredItems)}
          onDestroyed={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onEdit={this.onEdit}
          editForm = {this.editForm} 
          onEditEsc={this.onEditEsc}
          />
             
  </section>
      <Footer
          elseToDo={elseToDo}
          deleteComplited={this.deleteComplited}
          filter={this.setFilter}
          getFilteredItems={this.getFilteredItems}
          activeButtonClass={this.activeButtonClass}  />
  </section>
  

}

}



