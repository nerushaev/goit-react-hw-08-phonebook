import React from 'react'
import './Phonebook.css'
import FormAddContacts from '../FormAddContacts/FormAddContacts';
import ContactsList from '../ContactsList/ContactsList'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { removeContacts } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const Phonebook = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  }

  const removeContact = (id) => {
    const action = removeContacts(id);
    dispatch(action);
  }

  const FilteredContacts = getFilteredContacts(contacts, filter);
    return (
      <>
      <div className="phonebook-contaner">
        <h2 className="title">Phonebook</h2>
        <div className="block">
            <FormAddContacts contacts={contacts} />
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
