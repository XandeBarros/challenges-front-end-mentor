import React from 'react';

import { ContainerResult } from './styles';

export default function Result({ values, handleReset }) {
  function calc(values, aux) {
    if (Number(values.people) === 0) return '0.00';
    return ((Number(values.total) * (aux + values.percent/100))/Number(values.people)).toFixed(2)
  }

  return(
    <ContainerResult>
      <div id="box">
        <div>
          <p>Tip Amount</p>
          <small>/ person</small>
        </div>
        <h2>${calc(values, 0)}</h2>
      
        <div>
          <p>Total</p>
          <small>/ person</small>
        </div>
        <h2>${calc(values, 1)}</h2>
      </div>

      <button type="submit" onClick={e => {
        handleReset();
      }}>RESET</button>
    </ContainerResult>
  );
}