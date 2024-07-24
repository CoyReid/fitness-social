import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';
import Login from './components/Login';
import Logout from './components/Logout';

//FOLLOW TO DO LIST, WRITE IT OUT STEP BY STEP AND LOOK UP TRICKS FOR COPILOT BEFORE IT EXPIRES

// To do:
// First fully set up the backend, need to watch videos on Spring Boot. This includes setting up the database, creating the necessary models, and implementing the necessary controllers.
// Then, implement the necessary API calls in the frontend to interact with the backend.
// Next, fully set up the authorization and login/logout functionalities in the frontend.
// Finally, implement the necessary components to display the data from the backend.
// Add additional routes as needed
// Focus on styling last
// Eventually, when everything is working, BEFORE DEPLOYING TO HEROKU, make sure to change the API_URL in the frontend to the Heroku URL
// Also, make sure styling is responsive and looks good on mobile
// Look into adding a dark mode feature? would be cool
// Consider adding a feature to allow users to create their own workouts and save them to the database?


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;


//Below code is authorization base code, need to figure out how to integrate with backend

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
