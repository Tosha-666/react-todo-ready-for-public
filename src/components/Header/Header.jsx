import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  static defaultProps = {
    addItem: () => {},
  }

  static propTypes = {
    addItem: PropTypes.func,
  }

  state = { value: '' }

  addItem = this.props.addItem

  onSubmiteForm = (e) => {
    e.preventDefault()
    if (this.state.value.trim() !== '') {
      this.addItem(this.state.value.trim())
      this.setState({
        value: '',
      })
    }
    this.setState({
      value: '',
    })
  }

  onLabelChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { value } = this.state
    return (
      <header className="header">
        <form className="header-form" onSubmit={this.onSubmiteForm}>
          <h1>todos</h1>
          <label>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={value}
              onChange={this.onLabelChange}
            />
          </label>
        </form>
      </header>
    )
  }
}

export default Header
