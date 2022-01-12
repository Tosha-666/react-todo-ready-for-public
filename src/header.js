import React from 'react';
import PropTypes from 'prop-types'



class Header extends React.Component  {
    static defaultProps = {
        addItem: () => { },
    }

    static propTypes = {
       addItem: PropTypes.func
   }

    state = { value: '' }
   
    addItem=this.props.addItem
  
        onSubmiteForm = (e) => {
        e.preventDefault()
        this.addItem(this.state.value);
        this.setState({
            value:''
        })
    }

    onLabelChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }
    
    render() {
        const{value}=this.state
                // const{addItem}=this.props
         return <header className ="header">
             <form
                 className = "header-form"
                 onSubmit={this.onSubmiteForm}>
                 
                 <h1>todos</h1>
                 <input className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                value={value}
                onChange = {this.onLabelChange} />
            </form>
             
    </header>
    }
   
}
    


export default Header