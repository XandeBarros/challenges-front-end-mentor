import styled from 'styled-components';

export const SContainer = styled.main`
  width: 80%;
  height: 45rem;
  margin: 0 auto;

  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 400px) {
    flex-direction: column;
    
    width: 100%;
    height: auto;

    padding: 0;
  }
`;

export const SProductPhotos = styled.div`
  width: 35%;
  height: auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media(max-width: 400px) {
    width: 100%;

    #icon-prev-mobile {
      position: absolute;
      background: white;

      z-index: 1;

      display: flex;
      align-items: center;
      justify-content: center;

      left: 1rem;
      top: 40%;

      padding: 1rem;
      width: 3rem;
      border-radius: 50%;
      
      cursor: pointer;

      &:hover {
        opacity: .8;
      }
    }

    #icon-next-mobile {
      position: absolute;
      background: white;

      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 1;

      padding: 1rem;
      width: 3rem;
      border-radius: 50%;

      right: 1rem;
      top: 40%;
      
      cursor: pointer;
      
      &:hover {
        opacity: .8;
      }
    }
  }
`;

export const SPhoto = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 2rem;

  @media(max-width: 400px) {
    border-radius: 0;
  }
`;

export const SLightbox = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  z-index: 1;

  background: rgba(0, 0, 0, 0.75);

  @media(max-width: 400px) {
    display: none;
  }
`;

export const SLightboxPhotos = styled.div`
  width: 30rem;
  height: 45rem;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #icon-prev {
    position: relative;
    background: white;

    display: flex;
    align-items: center;
    justify-content: center;

    left: -14.75rem;
    top: 40%;

    padding: 1rem;
    width: 3rem;
    border-radius: 50%;
    
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }

  #icon-next {
    position: relative;
    background: white;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    width: 3rem;
    border-radius: 50%;

    right: -14.75rem;
    top: -40%;
    
    cursor: pointer;
    
    &:hover {
      opacity: .8;
    }
  }
`;

export const SLightboxThumb = styled.img`
  width: 20%;
  border-radius: .5rem;

  &:hover {
    opacity: .8;
  }
`;

export const SCloseLightbox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  left: 48%;
  top: -1rem;

  cursor: pointer;

  img {
    width: 1.5rem;
    color: hsl(26, 100%, 55%);
  }

  &:hover {
    opacity: .8;
  }
`;

export const SThumbnail = styled.img`
  width: 20%;
  border-radius: .5rem;

  &:hover {
    opacity: .6;
  }

  @media(max-width: 400px) {
    display: none;
  }
`;

export const SProductDescription = styled.div`
  width: 35%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  div {
    display: flex;
    align-items: center;
  }

  @media(max-width: 400px) {
    width: 80%;

    height: 22.5rem;
  }
`;

export const SSubtitle = styled.h2`
  color: hsl(26, 100%, 55%);
  letter-spacing: .125rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const STitle = styled.h1`
  color: hsl(0, 0%, 0%);
  font-size: 2.5rem;
  font-weight: 700;

  @media(max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const SDescription = styled.p`
  color: hsl(220, 14%, 75%);
  font-size: 1rem; 

  @media(max-width: 400px) {
    font-size: 0.85rem;
  }
`;

export const SPrice = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 1rem;
`;

export const SDiscount = styled.p`
  color: hsl(26, 100%, 55%);
  background: #fdebdd;

  width: 2.5rem;

  padding: .25rem;

  border-radius: 0.5rem;
  
  font-weight: 700;
`;

export const SSelectButton = styled.div`
  width: 100%;
  height: 3rem;

  @media(max-width: 400px) {
    height: auto;

    display: flex;
    flex-direction: column;
  }
`;

export const SQuantity = styled.div`
  background: hsl(223, 64%, 98%);

  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: .75rem;
  border-radius: .5rem;
  margin-right: auto;

  p {
    font-weight: 700;
  }

  img:hover{
    cursor: pointer;
  }

  @media(max-width: 400px) {
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
  }
`;

export const SAddToCart = styled.div`
  width: 60%;
  height: 100%;
  border-radius: .5rem;
  background: hsl(26, 100%, 55%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  cursor: pointer;

  transition: .3s;

  &:hover {
    opacity: .7;
    transform: translateZ(-.5rem);
  }

  img {
    color: white;
    margin-left: 25%;
  }
  
  p {
    font-weight: 700;
    color: white;
    margin-right: 25%;
  }

  @media(max-width: 400px) {
    width: 100%;
    height: 3rem;

    margin-bottom: 1rem;
  }
`;