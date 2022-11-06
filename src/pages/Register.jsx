import { Container } from "components/Phonebook/Container/Container.styled";
import { Input, Label, Form, Button } from "components/Phonebook/Fields/Fields";
import { Title } from "components/Phonebook/Title/Title.styled";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import NavAuth from "components/Phonebook/NavAuth/NavAuth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";
import { getIsLogin } from "redux/auth/auth-selectors";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const isUserLogin = useSelector(getIsLogin);


  if (isUserLogin) {
    return <Navigate to="/contacts" />
  }

    const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
    }
  
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({name, email, password}))
      setName('');
      setEmail('');
      setPassword('');
  }

  return (
    <Container>
    <NavAuth>
    <Title nav>Register</Title>
    </NavAuth>
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input
      name="name"
      id={nameId}
      value={name}
      onChange={handleChange}
      type="text"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      />
      <Label>Email</Label>
      <Input
      name="email"
      id={emailId}
      onChange={handleChange}
      value={email}
      type="text"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      />
      <Label>Password</Label>
      <Input
      name="password"
      id={passwordId}
      onChange={handleChange}
      value={password}
      type="password"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      />
      <Button>Login</Button>
    </Form>
    </Container>
  );
};

export default Register;