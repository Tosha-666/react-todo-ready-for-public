import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Header = function Header ({addItem}) {
  Header.defaultProps = {
    addItem: () => {},
  }

  Header.propTypes = {
    addItem: PropTypes.func,
  }

  const [value, setValue] = useState('')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')


  const onSubmiteForm = (e) => {
    e.preventDefault()
    if (value.trim() !== '') {
      addItem(value.trim(),[minutes,seconds])
      setValue('')
    }
    setValue('')
  }

    return (
      <header className="header">
        
        <form className="new-todo-form" id='new-todo-form' onSubmit={onSubmiteForm}>
          <h1>todos</h1>
          <label htmlFor='new-todo-form'> 
            <input
              className="new-todo"
              placeholder="Task"
              autoFocus
              value={value}
              onChange={event => setValue(event.target.value)}
            />
            </label>
           <label>
             <input
              className="new-todo-form__timer"
              type='number'
              placeholder="Min"
              autoFocus
              min={0}
              max={59}
              onChange={event => setMinutes(event.target.value)}
            /></label>
            
               <input
              className="new-todo-form__timer"
              type='number'
              placeholder="Sec"
              autoFocus
              min={0}
              max={59}
              onChange={event => setSeconds(event.target.value)}
            />

        </form>
      </header>
    )
  }



// class Header extends React.Component {
//   static defaultProps = {
//     addItem: () => {},
//   }

//   static propTypes = {
//     addItem: PropTypes.func,
//   }

//   state = { value: '' }
//   const [value, onChangeValue] = useState('')

//   addItem = this.props.addItem

//   onSubmiteForm = (e) => {
//     e.preventDefault()
//     if (this.state.value.trim() !== '') {
//       this.addItem(this.state.value.trim())
//       this.setState({
//         value: '',
//       })
//     }
//     this.setState({
//       value: '',
//     })
//   }

//   onLabelChange = (e) => {
//     this.setState({
//       value: e.target.value,
//     })
//   }

//   onMinutesChange=(e)=>{
//     this.setState({
//       value: e.target.value,
//     })
//   }

//   render() {
//     const { value } = this.state
//     return (
//       <header className="header">
        
//         <form className="new-todo-form" onSubmit={this.onSubmiteForm}>
//           <h1>todos</h1>
// <label htmlFor="">
//             <input
//               className="new-todo"
//               placeholder="Task"
//               autoFocus
//               value={value}
//               onChange={this.onLabelChange}
//             />
//             <input
//               className="new-todo-form__timer"
//               placeholder="Min"
//               autoFocus
//               onChange={this.onMinutesChange}
//             />
//                <input
//               className="new-todo-form__timer"
//               placeholder="Sec"
//               autoFocus
//               onChange={this.onSecondsChange}
//             />
// </label>
//         </form>
//       </header>
//     )
//   }
// }


export default Header
