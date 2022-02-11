import React from 'react';

import { Button } from './styles';

export default function SmallButton({ role, value, handleScreen, handleOperation, handleDel }) {
  return(
    <Button role={role} value={value} onClick={e => {
      if (e.currentTarget.value === 'DEL') return handleDel();
      handleScreen(e.currentTarget.value);
    }}>
      <p>
        {value}
      </p>
    </Button>
  );
}