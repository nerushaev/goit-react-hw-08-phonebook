import { useSelector } from "react-redux";
import { getUser } from "redux/auth/auth-selectors";
import styled from "styled-components";

const UserContainer = styled.div`
  margin-right: 20px;
`;

const UserText = styled.p`
  font-size: 16px;
  color: #999;
`;

export default function NavUserInfo() {
  const { email } = useSelector(getUser);

  return (
    <UserContainer>
      <UserText>{`Welcome back, ${email}`}</UserText>
    </UserContainer>
  )
}
