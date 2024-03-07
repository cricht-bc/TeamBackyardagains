import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ListCompetition from './ListCompetition';
import SavedCompetitions from './SavedCompetitions';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Soccer+</h1>
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none' }}>
            <li style={{ marginRight: '20px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: '20px' }}>
              <Link to="/ListCompetition">Competitions</Link>
            </li>
            <li>
              <Link to="/SavedCompetitions">Favorites</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListCompetition" element={<ListCompetition />} />
          <Route path="/SavedCompetitions" element={<SavedCompetitions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
