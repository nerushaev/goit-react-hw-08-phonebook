import styled from "styled-components"

export const List = styled.ul`
  width: 320px;
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
  font-size: 14px;
  position: absolute;
  top: 0;
  right: -110px;
`;