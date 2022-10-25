import React from 'react'
import './Phonebook.css'
import FormAddContacts from '../FormAddContacts/FormAddContacts';
import ContactsList from '../ContactsList/ContactsList'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { addContacts, removeContacts } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

const Phonebook = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch();

  const onAddContacts = (contact) => {
    if (isDuplicate(contact)) {
      return alert(`${contacts.name} ${contacts.number} is already on the site!`);
    }
    const action = addContacts(contact);
    dispatch(action);
}

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
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
    const action = removeContacts(id);
    dispatch(action);
  }

  const isDuplicate = ({ name, number }) => {
    const result = contacts.find((item) => item.name === name && item.number === number)
    return result;
  }

  const FilteredContacts = getFilteredContacts();
    return (
      <>
      <div className="phonebook-contaner">
        <h2 className="title">Phonebook</h2>
        <div className="block">
            <FormAddContacts onSubmit={onAddContacts}/>
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
