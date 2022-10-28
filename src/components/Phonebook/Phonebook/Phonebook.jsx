import React, { useEffect } from 'react'
import './Phonebook.css'
import FormAddContacts from '../FormAddContacts/FormAddContacts';
import ContactsList from '../ContactsList/ContactsList'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { selectIsLoading, selectError } from 'redux/contacts/contacts-selectors';
import { Loader } from '../Loader/Loader';

const Phonebook = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  }

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
          <input type="text" name="filter" value={filter} onChange={handleChange} />
          {isLoading && !error && <Loader />}
          <ContactsList />
        </div>
      </>
    )
}

export default Phonebook;
