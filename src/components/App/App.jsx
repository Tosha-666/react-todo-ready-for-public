import React, {useState} from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Tasklist } from '../TaskList'


const App=function App(){

const [maxId, setMaxId]=useState(100)
const [toDoData, setToDoData]=useState([])
const [filter, setFilter]=useState('all')

const deleteItem = (id) => {
  setToDoData((data)=>
   {
     const delId = data.findIndex((el) => el.id === id)
     const newArray = [
        ...data.slice(0, delId),
        ...data.slice(delId + 1),
      ]
      return newArray
  })
  }

  const addItem = (text, time) => {
    if (((time[0]||time[1])<0)||((time[0]||time[1])>59)){
      alert('Введите корректные значения')
    } else {
       setMaxId(id=>id+1)
    const newItem = {
      label: text,
      id:maxId,
      date: new Date(),
      done: false,
      edit: false,
      time,
    }
    setToDoData((data)=>{
       const newArr = [...data, newItem]
      return [...newArr]
      
    })
  }
  
  }

const editForm = (text) => {
  if (text.trim() !== '') {
    setToDoData((data)=>{
      const editId = data.findIndex((el) => el.edit)
      let newEditId = data[editId]
      newEditId = { ...newEditId, label: text.trim(), edit: false }
       const newArr = [
        ...data.slice(0, editId),
        newEditId,
        ...data.slice(editId + 1),
      ]
      return newArr
      
    })
    } else {
      setToDoData((data)=> {
      const editId = data.findIndex((el) => el.edit)
      let newEditId = data[editId]

      newEditId = { ...newEditId, edit: false }
      const newArr = [
        ...data.slice(0, editId),
        newEditId,
        ...data.slice(editId + 1),
      ]
      return newArr
      
    })
  }
}

const onEdit = (id) => {
  setToDoData((data)=> {
    const editId = data.findIndex((el) => el.id === id)
    const oldItem = data[editId]
    const newItem = { ...oldItem, edit: !oldItem.edit }
    const newArr = [
      ...data.slice(0, editId),
      newItem,
      ...data.slice(editId + 1),
    ]
    return newArr
    
  })
}

const onToggleDone = (id) => {
  setToDoData((data)=> {
    const doneId = data.findIndex((el) => el.id === id)
    const oldItem = data[doneId]

    const newItem = {
      ...oldItem,
      done: !oldItem.done,
    }
    const newArr = [
      ...data.slice(0, doneId),
      newItem,
      ...data.slice(doneId + 1),
    ]
    return newArr
    
  })
}

const deleteComplited = () => {
  const uncomplitedItems = toDoData.filter((item) => !item.done)
  setToDoData(uncomplitedItems)
}

const setFiltered = (filt) => {
  setFilter( filt )
}

const getFilteredItems = (item) => {
  switch (filter) {
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

const activeButtonClass = (buttonName) => {
  if (buttonName === filter) {
    return 'selected'
  }
  return ''
}

const elseToDo =toDoData.length - toDoData.filter((el) => el.done).length

return (
  <section className="todoapp">
    <Header addItem={addItem} />
    <section className="main">
      <Tasklist
        toDoItem={toDoData.filter(getFilteredItems)} //
        onDestroyed={deleteItem}
        onToggleDone={onToggleDone}
        onEdit={onEdit}
        editForm={editForm}

      />
    </section>
    <Footer
      elseToDo={elseToDo}
      deleteComplited={deleteComplited}
      filter={setFiltered}
      activeButtonClass={activeButtonClass}
    />
  </section>
)

}

export default App

