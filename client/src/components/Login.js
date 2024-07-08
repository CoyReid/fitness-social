import React, { useState } from 'react';
import { TextField, Button, Paper, Grid, Typography } from '@material-ui/core';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    //Need to figure out how integrate authorization and backend syncing here
    onLogin(username, password);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={6}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h5">Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};