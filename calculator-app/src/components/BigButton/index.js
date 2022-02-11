import React from 'react';

import { Button } from './styles';

export default function SmallButton({ role, value, handleEqual, handleClear }) {
  return(
    <Button role={role} value={value} onClick={e => {
      if (e.currentTarget.value === 'RESET') return handleClear();
      handleEqual();
    }}>
      <p>
        {value}
      </p>
    </Button>
  );
}