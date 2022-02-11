import React from 'react';

import { Button } from './styles';

export default function SmallButton({ role, value}) {
  return(
    <Button role={role}>
      <p>
        {value}
      </p>
    </Button>
  );
}