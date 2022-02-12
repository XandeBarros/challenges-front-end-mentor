import React, { useState } from 'react';

import GlobalStyle from './styles/global';

import Container from './components/Container';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [total, setTotal] = useState(0);
  const [people, setPeople] = useState(1);
  const [percent, setPercent] = useState(0);

  function handleTotal(value) {
    setTotal(value);
  }

  function handlePeople(value) {
    setPeople(value);
  }

  function handlePercent(value) {
    setPercent(value);
  }

  function handleReset() {
    setTotal(0);
    setPeople(1);
    setPercent(0);
  }

  return(
    <>
      <GlobalStyle />
      <Title />
      <Container>
        <Form handleTotal={handleTotal} handlePeople={handlePeople} handlePercent={handlePercent} values={{ total, people, percent }} />
        <Result values={{ total, people, percent }} handleReset={handleReset} />
      </Container>
    </>
  );
};

export default App;
