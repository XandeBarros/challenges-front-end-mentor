import React from 'react';

import { MainContent } from './styles';

export default function Container({ children }) {
  return(
    <MainContent>
      {children}
    </MainContent>
  );
}
