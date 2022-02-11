import styled from 'styled-components';

export const Container = styled.div`
  height: 8rem;
  width: 100%;

  border-radius: .5rem;

  background: ${({ theme }) => theme.screenBg};

  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: end;

  p {
    font-size: 48px;
    color: ${({ theme }) => theme.screenColor};
  }
`;
