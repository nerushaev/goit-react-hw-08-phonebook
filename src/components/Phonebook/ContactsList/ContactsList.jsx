import propTypes from 'prop-types';

export default function ContactsList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return <li className="contacts-item" key={id}>{name}: {number}<span className="delete-btn" onClick={() => removeContact(id)}>Delete</span></li>
  })
  return (
    <ul className="contacts-list">{elements}</ul>
  )
}

ContactsList.propTypes = {
  items: propTypes.array,
  removeContact: propTypes.func
}