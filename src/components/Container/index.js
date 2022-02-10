import React from 'react';

import { MainGrid } from './styles.js';

export default function Container({ children }) {
  return(
    <MainGrid>
      {children}
    </MainGrid>
  );
}