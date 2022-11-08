import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { removeContact } from 'redux/contacts/contacts-operation';
import { useState } from 'react';
import { List, Item, DeleteMessage } from './ContactsList.styled';
import { Button } from '../Fields/Fields';

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const [deletingItem, setDeletingItem] = useState('');
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    setDeletingItem(id)
    dispatch(removeContact(id))
  }
  const elements = contacts.map(({ name, number, id }) => {
    return <Item key={id}>
      {name}: {number}
      <Button delete onClick={() => handleDelete(id)}>
        Delete
      </Button>
      {deletingItem === id && <DeleteMessage>Deleting item...</DeleteMessage>}
    </Item>
  })
  return (
    <List>
      {elements}
    </List>
  )
}

ContactsList.propTypes = {
  items: propTypes.array,
}