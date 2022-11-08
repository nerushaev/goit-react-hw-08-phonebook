import styled from 'styled-components'

const Text = styled.p`
  text-align: center;
`;

export default function ErrorMessage({ message }) {
  return (
    <Text>{message}</Text>
  )
}
