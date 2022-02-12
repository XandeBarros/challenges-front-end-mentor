import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 22rem;
  height: 100%;

  @media(max-width: 400px) {
    width: 100%;
    height: 25rem;
  }

  #box {
    height: 4.75rem;
    display: flex;
    flex-direction: column;
  }

  #tip {
    height: auto;
    display: flex;
    flex-direction: column;
  }

  #box img {
    top: -3rem;
    left: 1rem;
    position: relative;
    width: .75rem;
  }

  label {
    color: hsl(186, 14%, 43%);
    font-family: 'Space Mono';
    font-size: 16px;
    font-weight: bold;
  }

  div {
    display: grid;
    
    grid-template-columns: 104px 104px 104px;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem .5rem;
  }

  @media(max-width: 400px) {
    div {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  input {
    cursor: pointer;
  }

  input[type="text"] {
    background: hsl(189, 41%, 97%);
    height: 1.75rem;
    padding: .5rem;

    font-size: 24px;
    font-family: 'Space Mono';
    font-weight: 700;

    text-align: end;

    border-radius: .5rem;

    color: hsl(183, 100%, 15%);
    caret-color: hsl(172, 67%, 45%);

    &:focus {
      outline: 2px solid hsl(172, 67%, 45%);
    }
  }

  input[type="button"] {
    width: auto;
    height: 3rem;
    background: hsl(183, 100%, 15%);

    color: hsl(189, 41%, 97%);

    text-align: center;
    
    font-size: 24px;
    font-family: 'Space Mono';
    font-weight: 700;

    border-radius: .35rem;

    transition: background-color 0.25s ease-in-out;

    &:hover, &:focus {
      background-color: hsl(172, 67%, 55%);
      color: hsl(183, 100%, 15%);
    }
  }

  #error-input {
    outline: 2px solid #ff4246;

    &:focus {
      outline: 2px solid #ff4246;
    }
  }
  
  input[type="number"] {
    font-size: 1.5rem;
    font-family: 'Space Mono', monospace;
    background-color: hsl(189, 41%, 97%);
    outline: none;
    border: none;
    color: hsl(183, 100%, 15%)  ;
    caret-color: hsl(172, 67%, 45%);
    font-weight: 700;

    width: 104px;
    text-align: center;
    border-radius: .35rem;
    transition: outline 0.25s ease;

    &:focus, &:hover {
      outline: 2px solid hsl(172, 67%, 45%);
    }
  }

  .error {
    position: relative;
    top: -8rem;
    left: 64%;
    font-family: 'Space Mono';
    font-weight: 700;

    color: #ff4246;
  }

  .disable {
    display: none;
  }

  @media(max-width: 400px) {
    .error {
      top: -7.85rem;
      left: 59%;
    }
  }

`;