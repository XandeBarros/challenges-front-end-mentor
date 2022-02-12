import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import dollar from '../../assets/images/icon-dollar.svg';
import person from '../../assets/images/icon-person.svg';

export default function Form({ handleTotal, handlePeople, handlePercent, values }) {
  const [classError, setClassError] = useState('');

  useEffect(() => {
    console.log(values);
    (Number(values.people) === 0 && values.people !== "") ? setClassError('error') : setClassError('');
  }, [values.people, values.percent]);

  return(
    <Container> 
      <div id="box">
        <label>Bill</label>
        <input 
          onChange={e => {
            handleTotal(e.currentTarget.value);
          }} 
          type="text" 
          value={values.total}
        />
        <img src={dollar}></img>
      </div>

      <div id="tip">
        <label>Select Tip %</label>
        <div>
          <input type="button" value="5%" 
            onClick={e => {
              const percentValue = Number(e.currentTarget.value.slice(0, -1));
              handlePercent(percentValue);
            }}
          />
          <input type="button" value="10%"
            onClick={e => {
              const percentValue = Number(e.currentTarget.value.slice(0, -1));
              handlePercent(percentValue);
            }}
          />
          <input type="button" value="15%"
            onClick={e => {
              const percentValue = Number(e.currentTarget.value.slice(0, -1));
              handlePercent(percentValue);
            }}
          />
          <input type="button" value="20%"
            onClick={e => {
              const percentValue = Number(e.currentTarget.value.slice(0, -1));
              handlePercent(percentValue);
            }}
          />
          <input type="button" value="25%"
            onClick={e => {
              const percentValue = Number(e.currentTarget.value.slice(0, -1));
              handlePercent(percentValue);
            }}
          />
          <input type="number"
            placeholder="Custom"
            onChange={e => {
              const percentValue = Number(e.currentTarget.value);
              handlePercent(percentValue);
            }}
            value={(Number(values.percent) === 0 && values.percent !== "") ? 'Custom' : values.percent}
          />
        </div>
      </div>

      <div id="box">
        <label>Number of People</label>
        <input
          id={`${classError}-input`}
          onChange={e => {
            handlePeople(e.currentTarget.value);
          }}  
          type="text"
          value={values.people}
        />
        <img src={person}></img>
        <span className={classError === '' ? 'disable' : classError}>Can't be zero</span>
      </div>
    </Container>
  );
};

