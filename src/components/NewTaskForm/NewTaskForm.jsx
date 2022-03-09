import React, {useState} from 'react'
import PropTypes from 'prop-types'

const NewTaskForm = function NewTaskForm({editForm, label}){
NewTaskForm.defaultProps = {
     editForm: () => {},
    label: () => {},
}
NewTaskForm.propTypes={
     editForm: PropTypes.func,
    label: PropTypes.string,
}

const[newlabel,setNewLabel] = useState(label)

const onSubmiteForm = (e) => {
  e.preventDefault()
  editForm(newlabel)
}
const  onLabelChange = (e) => {
setNewLabel(e.target.value)
  
}


return(
  <form onSubmit={onSubmiteForm}>
  <label>
    <input
      type="text"
      className="edit"
      value={newlabel}
      onChange={onLabelChange}
      autoFocus
    />
  </label>
</form>

)
}

export default NewTaskForm



// export default class NewTaskForm extends React.Component {
//   static defaultProps = {
//       editForm: () => {},
//     label: () => {},
//   }

//   static propTypes = {
//       editForm: PropTypes.func,
//     label: PropTypes.string,
//   }

//   editForm = this.props.editForm

//   label = this.props.label

//   state = { value: this.label }

//   onSubmiteForm = (e) => {
//     e.preventDefault()
//     this.editForm(this.state.value)
//   }

//   onLabelChange = (e) => {
//     this.setState({
//       value: e.target.value,
//     })
//   }

//   render() {
//     const { value } = this.state
//     return (
//       <form onSubmit={this.onSubmiteForm}>
//         <label>
//           <input
//             type="text"
//             className="edit"
//             value={value}
//             onChange={this.onLabelChange}
//             autoFocus
//           />
//         </label>
//       </form>
//     )
//   }
// }
