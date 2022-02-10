import styled from 'styled-components';

export const MainGrid = styled.div`
  display: grid;
  margin: 8rem auto;
  height: calc(2 * 16rem + 2rem);
  width: calc(4 * 16rem + 6rem);

  grid-gap: 2rem;
  grid-template-columns: 16rem 16rem 16rem 16rem;
  grid-template-rows: 16rem 16rem;

  @media(max-width: 500px) {
    display: flex;
    flex-direction: column;

    width: 80%;
    height: auto;
  }
`;