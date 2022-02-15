import styled from 'styled-components';

export const SCart = styled.div`
  position: absolute;
  width: 25rem;
  height: 17rem;
  padding: 1.5rem;
  
  top: 5.5rem;
  right: 10rem;

  border-radius: .5rem;

  background: white;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media(max-width: 400px) {
    right: .5rem;
    top: 7.5rem;
    width: 22.5rem;

    z-index: 2;
  }

  #header {
    border-bottom: 2px solid hsl(220, 14%, 75%);

    h1 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
  } 

  #cart-info {
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 4rem; 
      border-radius: .25rem;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
    }

    img:nth-child(3) {
      height: 1rem;
    }
  }

  #cart-empty {
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: calc(100% - 2 * 1.5rem);

    p {
      margin: 0 auto;
      font-weight: 700;
    }
  }

  button {
    width: 100%;
    height: 3.5rem;
    border-radius: .5rem;
    background: hsl(26, 100%, 55%);

    text-align: center;

    font-weight: 700;
    font-size: 1rem;

    color: white;

    border: none;

    cursor: pointer;
  }
`;