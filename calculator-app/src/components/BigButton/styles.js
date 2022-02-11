import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ role }) =>   role === 'word' ? 'hsl(225, 21%, 49%)' : 'hsl(6, 63%, 50%)'};

  border-radius: .5rem;
  font-size: ${({ role }) => role === 'word' ? '18px' : '24px'};

  box-shadow: 0px 4px ${({ role }) =>  role === 'word' ? 'hsl(224, 28%, 35%)' : 'hsl(6, 70%, 34%)'};

  grid-column-start: ${({ role }) => role === 'word' ? '1' : '3'};
  grid-column-end: ${({ role }) => role === 'word' ? '3' : '5'};

  color: white;

  p {
    text-align: center;
    margin-top: 4px;
  }
`;