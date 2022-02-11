import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ role }) => role === 'number-symbol' ? 'hsl(30, 25%, 89%)' : role === 'word' ? 'hsl(225, 21%, 49%)' : 'hsl(6, 63%, 50%)'};

  border-radius: .5rem;
  font-size: ${({ role }) => role === 'word' ? '18px' : '32px'};

  box-shadow: 0px 4px ${({ role }) => role === 'number-symbol' ? 'hsl(28, 16%, 65%)' : role === 'word' ? 'hsl(224, 28%, 35%)' : 'hsl(6, 70%, 34%)'};

  color: ${({ role }) => role === 'number-symbol' ? 'hsl(221, 14%, 31%)' : 'white'};
  
  p {
    text-align: center;
    margin-top: 4px;
  }
`;