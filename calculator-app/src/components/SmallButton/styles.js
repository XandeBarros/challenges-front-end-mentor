import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  background: ${({ theme, role }) => role === 'number-symbol' ? theme.keyBg : role === 'word' ? theme.wordKeyBg : theme.equalBg};

  border-radius: .5rem;
  font-size: ${({ role }) => role === 'word' ? '18px' : '32px'};

  box-shadow: 0px 4px ${({ theme, role }) => role === 'number-symbol' ? theme.keyShadow : role === 'word' ? theme.wordKeyShadow : theme.equalShadow};

  color: ${({ theme, role }) => role === 'number-symbol' ? theme.textColor : theme.textContrast};
  
  p {
    text-align: center;
    margin-top: 4px;
  }
`;