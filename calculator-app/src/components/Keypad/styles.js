import styled from 'styled-components';

export const Numpad = styled.div`
  width: 100%;
  height: 25rem;
  padding: 1rem;

  border-radius: .5rem;

  background: ${({ theme }) => theme.keypadBg};

  display: grid;

  grid-gap: calc((100% - 5 * 3.5rem) / 4) calc((100% - 4 * 6rem) / 3);
  grid-template-columns: 6rem 6rem 6rem 6rem;
  grid-template-rows: 3.5rem 3.5rem 3.5rem 3.5rem 3.5rem;

  @media(max-width: 400px) {
    grid-gap: calc((100% - 5 * 3rem) / 4) calc((100% - 4 * 3rem) / 3);
    grid-template-columns: 3rem 3rem 3rem 3rem;
    grid-template-rows: 3rem 3rem 3rem 3rem 3rem;
  }
`;
