import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const HomePage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fitness Tracker
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/leaderboard">Leaderboard</Button>
          <Button color="inherit" component={Link} to="/workouts">Workouts</Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mt: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to the Fitness Tracker!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Track your workouts and see how you stack up against others on the leaderboard.'}
        </Typography>
        <Typography variant="body1">
          Get started by logging your first workout or checking out the top performances.
        </Typography>
      </Container>
    </div>
  );
};

export default HomePage;