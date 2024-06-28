import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Adjust the import path according to your file structure
import AppBar from '@mui/material/AppBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
