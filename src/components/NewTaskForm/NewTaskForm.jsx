import React from 'react'
import PropTypes from 'prop-types'


  export default class NewTaskForm extends React.Component {
    static defaultProps = {
        editForm: () => { },
        label: () => { },
        onEditEsc:()=>{ },
    }

    static propTypes = {
        editForm: PropTypes.func,
        label: PropTypes.string,
        onEditEsc:PropTypes.func,
    }

    onEditEsc=this.props.onEditEsc

    editForm = this.props.editForm

    label = this.props.label

    state = { value:  this.label  }


   onSubmiteForm = (e) => {
    e.preventDefault()
    this.editForm(this.state.value)
  }

   onLabelChange = (e) => {
    this.setState({value:e.target.value})
  }

  escFunction = (event)=>{
    if(event.keyCode === 27) {
      this.onEditEsc()
    }
  }

  render() {   
    const {value}=this.state
  return<form onSubmit={this.onSubmiteForm}>
      <label>
        <input
          type="text"
          className="edit"
          value={value}
          onChange={this.onLabelChange}
          onKeyDown={(event)=>this.escFunction(event)}
          autoFocus
        />
      </label>
    </form>}
 
  
}


