import styled from 'styled-components';

export const Content = styled.div`
  width: 50rem;
  height: 25rem;

  padding: 2rem;
  
  background: hsl(0, 0%, 100%);

  margin: 5rem auto;

  border-radius: 1rem;

  display: flex;
  justify-content: space-between;

  @media(max-width: 400px) {
    width: 100%;
    height: 50rem;
    flex-direction: column;
  }
`;
