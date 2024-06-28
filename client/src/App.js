import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

// const App = () => {
//   return <HomePage />;
// };

export default App;
