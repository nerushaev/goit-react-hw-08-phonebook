import React, { Component } from 'react'
import './Phonebook.css'
import FormAddContacts from './FormAddContacts';
import ContactsList from './ContactsList'
import { nanoid } from 'nanoid';

export default class Phonebook extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }


  addContacts = (name, number) => {
      const newContacts = {
      id: nanoid(),
      name,
      number,
      }
    
    const { contacts } = this.state;
    
    const normalizeName = name.toLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizeContactsName = name.toLowerCase();
      const result = normalizeContactsName.includes(normalizeName) || number.includes(contacts.number)
      return result;
    })
    console.log(filteredContacts);
    if (filteredContacts.length === 0) {
          this.setState((prevState) => {
      return {
      contacts: [...prevState.contacts, newContacts],
    }
  })
    } else {
      alert(`${newContacts.name} is already in contacts!`)
  }
}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  getFilteredContacts = (e) => {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizeName = name.toLowerCase();
      const result = normalizeName.includes(normalizeFilter) || number.includes(normalizeFilter);
      return result;
    })
    return filteredContacts;
  }

  removeContact = (id) => {
    this.setState((prev) => {
      const newContacts = prev.contacts.filter((item) => item.id !== id);
      return {
        contacts: newContacts,
      }
    })
  }
  

  render() {
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <>
      <div className="phonebook-contaner">
        <h2 className="title">Phonebook</h2>
        <div className="block">
            <FormAddContacts onSubmit={this.addContacts}/>
        </div>
        </div>
        <div className="block-info">
          <label htmlFor="filter" className="filter-label">Search</label>
          <input type="text" name="filter" value={filter} onChange={this.handleChange}/>
          <ContactsList items={contacts} removeContact={this.removeContact}/>
        </div>
      </>
    )
  }
}
