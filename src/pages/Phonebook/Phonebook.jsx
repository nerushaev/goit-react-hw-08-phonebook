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
import { Input, Label } from 'components/Phonebook/Fields/Fields';
import { Container } from 'components/Phonebook/Container/Container.styled';
import { Title } from 'components/Phonebook/Title/Title.styled';
import { Navigate } from 'react-router';
import NavAuth from 'components/Phonebook/NavBar/NavBar';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: center;
`;


const Phonebook = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isUserLogin = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

    if (!isUserLogin) {
    return <Navigate to="/" />
  }

  const handleChange = (e) => {
    e.preventDefault();
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
      <FormContainer>
          <Label htmlFor="filter">Search</Label>
          <Input filterInput type="text" name="filter" value={filter} onChange={handleChange} />
      </FormContainer>
          {isLoading && !error && <Loader />}
          <ContactsList/>
      
      </>
    )
}

export default Phonebook;
