import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Placeholder data for workouts
const workouts = [
  { name: 'Bench Press', img: '/path/to/cardio-placeholder.jpg' },
  { name: 'Squat', img: '/path/to/strength-placeholder.jpg' },
  { name: 'Deadlift', img: '/path/to/yoga-placeholder.jpg' },
  { name: 'Mile run', img: '/path/to/pilates-placeholder.jpg' },
  { name: '5k run', img: '/path/to/pilates-placeholder.jpg' },
  { name: '10k run', img: '/path/to/pilates-placeholder.jpg' },
  // Add more workouts as needed
];

const Workouts = () => {
  return (
    <>
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
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          {workouts.map((workout, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {workout.name}
                </Typography>
                <img src={workout.img} alt={workout.name} style={{ maxWidth: '100%', height: 'auto' }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Workouts;