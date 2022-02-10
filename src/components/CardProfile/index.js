import React from 'react';

import { Container, Profile, Periods } from './styles.js'

import ProfilePhoto from '../../assets/images/image-jeremy.png';

export default function CardProfile({ setPeriod }) {
  function handlePeriod(e) {
    setPeriod(e.target.value);
  }

  return(
    <Container>
      <Profile>
        <img src={ProfilePhoto} />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </Profile>
      <Periods>
        <button onClick={handlePeriod} value="Daily">Daily</button>
        <button onClick={handlePeriod} value="Weekly">Weekly</button>
        <button onClick={handlePeriod} value="Monthly" >Monthly</button>
      </Periods>
    </Container>
  );
}