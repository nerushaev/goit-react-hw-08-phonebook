import { Container } from "components/Phonebook/Container/Container.styled";
import { Input, Label, Form, Button } from "components/Phonebook/Fields/Fields";
import { Title } from "components/Phonebook/Title/Title.styled";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import NavAuth from "components/Phonebook/NavBar/NavBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";
import { getIsLogin } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const isUserLogin = useSelector(getIsLogin);


  if (isUserLogin) {
    return <Navigate to="/contacts" />
  }

    const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
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
    dispatch(login({email, password}))
      setEmail('');
      setPassword('');
  }

  return (
    <Container>
    <NavAuth>
    <Title nav>Login</Title>
    </NavAuth>
    <Form onSubmit={handleSubmit}>
      <Label>Email</Label>
      <Input
      onChange={handleChange}
      name="email"
      id={emailId}
      value={email}
      type="text"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      />
      <Label>Password</Label>
      <Input
      onChange={handleChange}
      name="password"
      id={passwordId}
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

export default Login;