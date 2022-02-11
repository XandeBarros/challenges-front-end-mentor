import React, { useState, useMemo, useEffect } from 'react';

import themes from './styles/themes';

import GlobalStyle from './styles/global.js'
import { ThemeProvider } from 'styled-components';

import Container from './components/Container';
import Header from './components/Header';
import Screen from './components/Screen';
import Keypad from './components/Keypad';
import SmallButton from './components/SmallButton';
import BigButton from './components/BigButton';

function App() {
  const [screen, setScreen] = useState('');
  const [evaluation, setEvaluation] = useState(0);

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'normal');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.normal; 
  }, [theme]);

  function handleToggleTheme(value) {
    setTheme(value);
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  function handleScreen(value) {
    setScreen(prevState => prevState + value);
  }

  function handleClear() {
    setScreen('');
  }

  function handleEqual() {
    try {
      let newScreenValue = String(eval(screen.replace('×', '*')).toFixed(2));
      if (newScreenValue[newScreenValue.length - 1] === '0' && newScreenValue[newScreenValue.length - 2] === '0') newScreenValue = newScreenValue.slice(0, -3);
      if (newScreenValue.length > 13 && !newScreenValue.includes('.')) return setScreen('Error');
      setScreen(newScreenValue);
    } catch (e) {
      setScreen('Error');
    }
  }

  function handleDel() {
    setScreen(screen.slice(0, -1));
  }

  return(
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Container>
        <Header 
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
        <Screen value={screen}/>
        <Keypad>
          <SmallButton role="number-symbol" value="7" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="8" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="9" handleScreen={handleScreen}/>
          <SmallButton role="word" value="DEL" handleDel={handleDel}/>
          
          <SmallButton role="number-symbol" value="4" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="5" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="6" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="+" handleScreen={handleScreen} />
          
          <SmallButton role="number-symbol" value="1" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="2" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="3" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="-" handleScreen={handleScreen}/>

          <SmallButton role="number-symbol" value="." handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="0" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="/" handleScreen={handleScreen}/>
          <SmallButton role="number-symbol" value="×" handleScreen={handleScreen}/>

          <BigButton role="word" value="RESET" handleClear={handleClear}/>
          <BigButton role="equal" value="=" handleEqual={handleEqual}/>
        </Keypad>
      </Container>
    </ThemeProvider>
  );
}

export default App;
