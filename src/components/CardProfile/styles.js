import styled from 'styled-components';

export const Container = styled.div`
  background: hsl(235, 46%, 20%);

  width: 100%;

  border-radius: 20px;

  grid-row-start: 1;
  grid-row-end: 3;
`;

export const Profile = styled.div`
  background: hsl(246, 80%, 60%);

  width: 100%;
  height: 70%;

  border-radius: 20px;

  padding: 2rem;

  img {
    border: 4px solid hsl(236, 100%, 87%);
    border-radius: 50%;
    height: 5rem;

    margin-bottom: 2rem;
  }

  h1 {
    font-weight: 500;
  }

  p {
    font-size: 12px;
  }

  @media(max-width: 500px) {
    display: flex;

    img {
      margin-right: 2rem;
    }
  }
`;

export const Periods = styled.div`
  padding: 2rem;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    display: block;

    margin-bottom: 1rem;

    transition: .8s;

    &:hover {
      font-weight: bold;
      color: white;
      transform: translateY(-.25rem);
    }
  }

  @media(max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin: 0;
    }
  }
`;
