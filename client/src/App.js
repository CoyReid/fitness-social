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

export default App;


// import axios from 'axios';

// const API_URL = '/api/auth/';

// const login = (username, password) => {
//     return axios
//         .post(API_URL + 'signin', { username, password })
//         .then((response) => {
//             if (response.data.accessToken) {
//                 localStorage.setItem('user', JSON.stringify(response.data));
//             }
//             return response.data;
//         });
// };

// const logout = () => {
//     localStorage.removeItem('user');
// };

// export default {
//     login,
//     logout,
// };
