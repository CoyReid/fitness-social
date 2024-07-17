import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

//Future changes: add in login/logout to app bar, profile page?
//Flesh out the bottom of the page and sides, make it look more realistic
//Maybe add in a carousel of images or a video to make it more engaging
//NEED TO SET UP BACKEND TO CONNECT TO DATABASE

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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to the Fitness Tracker!
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {'Track your workouts and see how you stack up against others on the leaderboard.'}
            </Typography>
            <Typography variant="body1">
              Get started by logging your first workout or checking out the top performances. Keep up the hard work!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box mt={5}>
        <Paper elevation={0} square>
          <Container maxWidth="sm">
            <Typography variant="body2" color="textSecondary" align="center" sx={{ py: 3 }}>
              © {new Date().getFullYear()} Fitness Tracker. All rights reserved.
            </Typography>
          </Container>
        </Paper>
      </Box>
    </div>
  );
};

export default HomePage;