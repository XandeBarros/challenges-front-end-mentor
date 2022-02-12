import styled from 'styled-components';

export const ContainerResult = styled.div`
  width: 22rem;
  height: 100%;

  background: hsl(183, 100%, 15%);

  border-radius: 1rem;

  padding: 2rem;

  font-weight: 700;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 400px) {
    width: 100%;
    height: 20rem;
  }

  #box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3rem 3rem;
    gap: 1rem;
    height: 50%;
  }

  #box h2 {
    margin-left: auto;
    color: hsl(172, 67%, 45%);
    font-size: 32px;
  }
  
  p {
    color: hsl(189, 41%, 97%);
  }

  small {
    color: hsl(184, 14%, 56%);
    display: inline-block;
    margin-bottom: 3rem;
  }

  button {
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    border-radius: .35rem;
    padding: .75rem 0;
    cursor: pointer;
    transition: background-color 0.25s ease-in-out;
  }

  button:not([disabled]):hover{
    background-color: hsl(172, 67%, 55%);
  }

  button[disabled] {
    opacity: 0.25;
    cursor: default;
  }
`;