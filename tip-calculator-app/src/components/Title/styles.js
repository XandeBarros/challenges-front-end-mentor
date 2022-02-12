import styled from 'styled-components';

export const Content = styled.h1`
  font-size: 1.5rem;
  color: hsl(186, 14%, 43%);
  font-weight: 700;
  text-align: center;

  width: calc(5*1.5rem);

  margin: 0 auto;
  margin-top: 5rem;

  @media(max-width: 400px) {
    margin-top: 4rem;
  }
`;