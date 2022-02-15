import styled from 'styled-components';

export const SHeader = styled.header`
  width: 80%;
  height: 7rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  
  border-bottom: 2px solid hsl(220, 14%, 75%);

  @media(max-width: 400px) {
    width: 100%;

    border-bottom: none;
  }
`;

export const SNavbar = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    width: 30%;

    margin-left: -30rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
    }

    a {
      color: hsl(220, 14%, 75%);

      #collection {
        position: absolute;
        width: 5.125rem;
        top: 6.65rem;
        height: .35rem;
      }

      #men {
        position: absolute;
        width: 2rem;
        top: 6.65rem;
        height: .35rem;
      }

      #women {
        position: absolute;
        width: 4rem;
        top: 6.65rem;
        height: .35rem;
      }

      #about {
        position: absolute;
        width: 3rem;
        top: 6.65rem;
        height: .35rem;
      }

      #contact {
        position: absolute;
        width: 3.75rem;
        top: 6.65rem;
        height: .35rem;
      }

      &:hover > #collection {
        background: hsl(26, 100%, 55%);
      }

      &:hover > #men {
        background: hsl(26, 100%, 55%);
      }

      &:hover > #women {
        background: hsl(26, 100%, 55%);
      }

      &:hover > #about {
        background: hsl(26, 100%, 55%);
      }

      &:hover > #contact {
        background: hsl(26, 100%, 55%);
      }
    }

    @media(max-width: 400px) {
      display: none;
    }
  }

  #mobile {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .75);

    z-index: 2;

    position: absolute;
    top: 0;
    left: 0;
  }

  #mobile-div {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 60vw;
    height: 100vh;
    background: white;

    padding: 1rem;
  }

  #mobile-nav {   
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10rem;

    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
    }
    
    a {
      color: black;
      font-weight: 700;
    }
  }
`;

export const SCartProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 8rem;

  img {
    cursor: pointer;
  }

  #profile-img {
    width: 3.5rem;
  }
`;

export const SQuantity = styled.div`
  position: absolute;
  top: 2.35rem;
  right: 17.75rem;

  background: hsl(26, 100%, 55%);
  width: 1.25rem;
  height: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: .25rem;

  p {
    color: white;
    font-weight: 700;
    font-size: 12px;
  }

  @media(max-width: 400px) {
    right: 7rem;
  }
`;
