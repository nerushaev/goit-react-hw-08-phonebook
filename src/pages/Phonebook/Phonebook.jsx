import React, { useEffect } from 'react'
import FormAddContacts from '../../components/Phonebook/FormAddContacts/FormAddContacts';
import ContactsList from '../../components/Phonebook/ContactsList/ContactsList'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { fetchContacts } from 'redux/contacts/contacts-operation';
import { selectIsLoading, selectError } from 'redux/contacts/contacts-selectors';
import { Loader } from '../../components/Phonebook/Loader/Loader';
import { Input, Label, Form } from 'components/Phonebook/Fields/Fields';
import { Container } from 'components/Phonebook/Container/Container.styled';
import { Title } from 'components/Phonebook/Title/Title.styled';
import { getIsLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router';
import NavAuth from 'components/Phonebook/NavAuth/NavAuth';
const Phonebook = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isUserLogin = useSelector(getIsLogin)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

    if (!isUserLogin) {
    return <Navigate to="/" />
  }

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  }

  return (
      <>
      <NavAuth>
    <Title nav>Phonebook</Title>
        </NavAuth>
        <Container>
            <FormAddContacts contacts={contacts} />
        </Container>
        <Form className="block-info">
          <Label htmlFor="filter" className="filter-label">Search</Label>
          <Input filter type="text" name="filter" value={filter} onChange={handleChange} />
          {isLoading && !error && <Loader />}
          <ContactsList/>
      </Form>
      </>
    )
}

export default Phonebook;
