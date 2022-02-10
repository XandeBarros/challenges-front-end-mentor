import styled from 'styled-components';

const objColors = {
  work: 'hsl(15, 100%, 70%)',
  play: 'hsl(195, 74%, 62%)',
  study: 'hsl(348, 100%, 68%)',
  exercise: 'hsl(145, 58%, 55%)',
  social: 'hsl(264, 64%, 52%)',
  selfCare: 'hsl(43, 84%, 65%)'
};

export const Container = styled.div`
  background: ${({ color }) => objColors[color]};

  border-radius: 20px 20px 25px 25px;

  img {
    margin-right: 10%;
  }
`;

export const Infos = styled.div`
  height: 85%;
  margin-top: 2.4rem;

  position: relative;

  border-radius: 20px;

  z-index: 1;

  background: hsl(235, 46%, 20%);

  padding: 2rem;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  small { 
    font-size: 16px;
  }

  @media(max-width: 500px) {
    h2 {
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    p {
      font-size: 2rem;
    }
  }
`;