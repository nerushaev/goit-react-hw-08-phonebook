import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin-right: ${p => p.nav ? "auto" : ""};
  margin-left:  ${p => p.nav ? "32px" : ""};
`;