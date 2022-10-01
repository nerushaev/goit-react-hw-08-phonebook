import React, { useEffect, useState } from 'react'
import './Phonebook.css'
import FormAddContacts from '../FormAddContacts/FormAddContacts';
import ContactsList from '../ContactsList/ContactsList'
import { nanoid } from 'nanoid';

const Phonebook = () => {
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts?.length) {
      setContacts(contacts);
      }
  }, []);

  const addContacts = (name, number) => {
      const newContacts = {
      id: nanoid(),
      name,
      number,
      }
    
    const normalizeName = name.toLowerCase();
    const filteredContacts = contacts.find(({ name, number }) => {
    const normalizeContactsName = name.toLowerCase();
    const result = normalizeContactsName.includes(normalizeName) || number.includes(contacts.number)
    return result;
    })
    if (filteredContacts) {
      alert(`${newContacts.name} is already in contacts!`)
    } else {
      return setContacts((prev) => {
        return [...prev, newContacts]
      })
  }
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter(value)
  }

  const getFilteredContacts = (e) => {
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

  const removeContact = (id) => {
    return setContacts((prev) => {
      const newContacts = prev.filter((item) => item.id !== id);
      return newContacts;
    })
  }

  const FilteredContacts = getFilteredContacts();
  
    return (
      <>
      <div className="phonebook-contaner">
        <h2 className="title">Phonebook</h2>
        <div className="block">
            <FormAddContacts onSubmit={addContacts}/>
        </div>
        </div>
        <div className="block-info">
          <label htmlFor="filter" className="filter-label">Search</label>
          <input type="text" name="filter" value={filter} onChange={handleChange}/>
          <ContactsList items={FilteredContacts} removeContact={removeContact}/>
        </div>
      </>
    )
}

export default Phonebook;
