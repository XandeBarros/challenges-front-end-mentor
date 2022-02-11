import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme, role }) =>   role === 'word' ? theme.wordKeyBg : theme.equalBg};

  border-radius: .5rem;
  font-size: ${({ role }) => role === 'word' ? '18px' : '24px'};

  box-shadow: 0px 4px ${({ theme, role }) =>  role === 'word' ? theme.wordKeyShadow : theme.equalShadow};

  grid-column-start: ${({ role }) => role === 'word' ? '1' : '3'};
  grid-column-end: ${({ role }) => role === 'word' ? '3' : '5'};

  color: white;

  p {
    text-align: center;
    margin-top: 4px;
  }
`;