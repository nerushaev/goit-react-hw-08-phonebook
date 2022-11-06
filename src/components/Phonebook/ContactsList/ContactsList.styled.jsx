import styled from "styled-components"

export const List = styled.ul`
  width: 520px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const DeleteMessage = styled.span`
  position: absolute;
  top: 0;
  right: -130px;
`;