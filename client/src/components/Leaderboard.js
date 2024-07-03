import React, { useState } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Initial scores for demonstration
const initialScores = {
  BenchPress: [{ name: 'Alice', score: 30 }, { name: 'Bob', score: 25 }],
  Squat: [{ name: 'Charlie', score: 20 }, { name: 'Dave', score: 15 }],
  Deadlift: [{ name: 'Eve', score: 10 }, { name: 'Frank', score: 5 }],
  MileRun: [{ name: 'Grace', score: 40 }, { name: 'Heidi', score: 35 }],
  FiveKRun: [{ name: 'Ivan', score: 45 }, { name: 'Judy', score: 50 }],
  TenKRun: [{ name: 'Ivan', score: 45 }, { name: 'Judy', score: 50 }],
};

const Leaderboard = () => {
  const [scores, setScores] = useState(initialScores);
  const [newScore, setNewScore] = useState({ workout1: '', workout2: '', workout3: '', workout4: '', workout5: '' });

  const handleScoreChange = (event, workout) => {
    setNewScore({ ...newScore, [workout]: event.target.value });
  };

  const addScore = (workout) => {
    if (newScore[workout]) {
      const updatedScores = { ...scores, [workout]: [...scores[workout], { name: 'New Entry', score: parseInt(newScore[workout], 10) }] };
      updatedScores[workout].sort((a, b) => b.score - a.score); // Sort in descending order
      setScores(updatedScores);
      setNewScore({ ...newScore, [workout]: '' }); // Reset input field
    }
  };

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
    <Grid container spacing={3}>
      {Object.entries(scores).map(([workout, participants]) => (
        <Grid item xs key={workout}>
          <Typography variant="h6" component="h2" gutterBottom>
              {workout} Scores {/* This adds a title to each table */}
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label={`${workout} leaderboard`}>
              <TableHead>
                <TableRow>
                  <TableCell>Participant</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {participants.map((participant, index) => (
                  <TableRow key={index}>
                    <TableCell>{participant.name}</TableCell>
                    <TableCell align="right">{participant.score}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>
                    <TextField
                      label="Your Score"
                      variant="outlined"
                      size="small"
                      value={newScore[workout]}
                      onChange={(event) => handleScoreChange(event, workout)}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary" onClick={() => addScore(workout)}>
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default Leaderboard;