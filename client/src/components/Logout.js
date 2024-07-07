import React from 'react';
import { Button } from '@material-ui/core';

const Logout = ({ onLogout }) => {
  return (
    <Button color="secondary" variant="contained" onClick={onLogout}>
      Logout
    </Button>
  );
};

export { Login, Logout };