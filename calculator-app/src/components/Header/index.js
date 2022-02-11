import React from 'react';

import { Container } from './styles';

export default function Header({ onToggleTheme, theme }) {
  return(
    <Container>
      <h1>calc</h1>
      
      <div id="theme-selector">
        <p>THEME</p>
        <div id="label">
          <small>1</small>
          <small>2</small>
          <small>3</small>
        </div>
        <div id="toggle">
          <input type="radio" defaultChecked={theme === 'normal' ? true: false} name="toggle" value="normal" onChange={e => onToggleTheme(e.currentTarget.value)} />
          <label></label>
          <input type="radio" defaultChecked={theme === 'light' ? true: false} name="toggle" value="light" onChange={e => onToggleTheme(e.currentTarget.value)} />
          <label></label>
          <input type="radio" defaultChecked={theme === 'dark' ? true: false} name="toggle" value="dark" onChange={e => onToggleTheme(e.currentTarget.value)} />
          <label id="trd"></label>
          <span></span>
        </div>  
      </div>
    </Container>
  );
}

/*


        <button type="button" value="normal" onClick={e => onToggleTheme(e.currentTarget.value)}>normal</button>
        <button type="button" value="dark" onClick={e => onToggleTheme(e.currentTarget.value)}>dark</button>
        <button type="button" value="light" onClick={e => onToggleTheme(e.currentTarget.value)}>light</button>

*/