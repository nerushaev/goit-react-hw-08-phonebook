import { Title } from "components/Phonebook/Title/Title.styled";
import { Container } from "components/Phonebook/Container/Container.styled";
import NavAuth from "../components/Phonebook/NavBar/NavBar";
import { useSelector } from "react-redux";
import { getIsLogin } from "redux/auth/auth-selectors";
import { Navigate } from "react-router";

const Home = () => {
  const isUserLogin = useSelector(getIsLogin);


  if (isUserLogin) {
    return <Navigate to="/contacts" />
  }

  return (
    <Container>
      <NavAuth>
        <Title nav>Welcome to your phone book!</Title>
        </NavAuth>
    </Container>
  );
};

export default Home;