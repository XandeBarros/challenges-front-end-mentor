import React, { useState } from 'react';

import { Container, Infos } from './styles.js';

export default function Card({ type, color, objInfos }) {
  return(
    <Container color={color}>
      <img src={type} align="right"/>
      <Infos>
        <h2>{objInfos.title}</h2>
        <div>
          <p>{objInfos.current}hrs</p>
          <small>Last {objInfos.timeframe === 'Daily' ? 'Day' : objInfos.timeframe === 'Weekly' ? 'Week' : 'Month'} - {objInfos.previous}hrs</small>
        </div>
      </Infos>
    </Container> 
  );
};
