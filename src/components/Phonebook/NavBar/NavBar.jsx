import { NavLink } from "react-router-dom"
import styled from "styled-components";
import {useAuth} from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import NavUserInfo from "../NavUserInfo/NavUserInfo";

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
  const isUserLogin = useAuth();
  const dispatch = useDispatch();

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <Navigation>
      {children}
      {isUserLogin && <NavUserInfo />}
      {isUserLogin && <StyledLink onClick={onLogout} to="/">Logout</StyledLink>}
      {!isUserLogin && <StyledLink to="/register">Register</StyledLink>}
      {!isUserLogin &&  <StyledLink  to="/login">Login</StyledLink>}
      </Navigation>
  )
}
