import React, { Component } from 'react'
import { nanoid } from 'nanoid';

export default class FormAddContacts extends Component {
  state = {
    name: '',
    number: ''
  }
  
  numberId = nanoid();
  nameId = nanoid();



  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

    handleSubmit = (e) => {
    e.preventDefault();
      const { number, name } = this.state;
      this.props.onSubmit(name, number)
    this.setState({
      number: '',
      name: ''
    })
    
    
}

  render() {
    const { numberId, nameId, handleSubmit, handleChange } = this;
    return (
      <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor={nameId}>Name</label>
              <input
              name="name"
              id={nameId}
              onChange={handleChange}
              value={this.state.name}
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
            <div className="input-field">
              <label htmlFor={numberId}>Number</label>
              <input
              name="number"
              id={numberId}
              onChange={handleChange}
              value={this.state.number}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            </div>
            <button className="submit-btn">Add contact</button>
          </form>
    )
  }
}
