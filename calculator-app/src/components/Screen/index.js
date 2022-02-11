import React from 'react';

import { Container } from './styles.js';

export default function Screen({ value }) {
  return(
    <Container>
      <p>{value}</p>
    </Container>
  );
}
