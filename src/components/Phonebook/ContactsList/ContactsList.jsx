import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { removeContact } from 'redux/contacts/contacts-operation';
import { Loader } from '../Loader/Loader';

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeContact(id))
  }
  const elements = contacts.items.map(({ name, number, id }) => {
    return <li className="contacts-item" key={id}>{name}: {number}<span className="delete-btn" onClick={() => handleDelete(id)}>Delete</span></li>
  })
  return (
    <ul className="contacts-list">
      {elements}
    </ul>
  )
}

ContactsList.propTypes = {
  items: propTypes.array,
  removeContact: propTypes.func
}