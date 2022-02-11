import React from 'react';

import GlobalStyle from './styles/global.js'

import Container from './components/Container';
import Header from './components/Header';
import Screen from './components/Screen';
import Keypad from './components/Keypad';
import SmallButton from './components/SmallButton';
import BigButton from './components/BigButton';

function App() {
  return(
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Screen />
        <Keypad>
          <SmallButton role="number-symbol" value="7"/>
          <SmallButton role="number-symbol" value="8"/>
          <SmallButton role="number-symbol" value="9"/>
          <SmallButton role="word" value="DEL"/>
          
          <SmallButton role="number-symbol" value="4"/>
          <SmallButton role="number-symbol" value="5"/>
          <SmallButton role="number-symbol" value="6"/>
          <SmallButton role="number-symbol" value="+"/>
          
          <SmallButton role="number-symbol" value="1"/>
          <SmallButton role="number-symbol" value="2"/>
          <SmallButton role="number-symbol" value="3"/>
          <SmallButton role="number-symbol" value="-"/>

          <SmallButton role="number-symbol" value="."/>
          <SmallButton role="number-symbol" value="0"/>
          <SmallButton role="number-symbol" value="/"/>
          <SmallButton role="number-symbol" value="x"/>

          <BigButton role="word" value="RESET"/>
          <BigButton role="equal" value="="/>
        </Keypad>
      </Container>
    </>
  );
}

export default App;
