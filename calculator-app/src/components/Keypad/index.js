import React from 'react';

import { Numpad } from './styles';

export default function Keypad({ children }) {
  return(
    <Numpad>
      {children}
    </Numpad>
  );
}
