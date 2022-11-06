import { NavLink } from "react-router-dom"
import styled from "styled-components";
import { getIsLogin } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";

const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: black;
  margin-right: 32px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export default function NavAuth({ children }) {
  const isUserLogin = useSelector(getIsLogin);

  return (
    <Navigation>
      {children}
      {isUserLogin && <StyledLink to="/">Logout</StyledLink>}
      {!isUserLogin && <StyledLink to="/register">Register</StyledLink>}
      {!isUserLogin &&  <StyledLink to="/login">Login</StyledLink>}
      </Navigation>
  )
}
