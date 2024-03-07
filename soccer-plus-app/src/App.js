// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddCompetition from './AddCompetition';
import ListCompetition from './ListCompetition';
import EditCompetition from './EditCompetition';
import DeleteCompetition from './DeleteCompetition';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCompetition />} />
        <Route path="/list" element={<ListCompetition />} />
        <Route path="/edit" element={<EditCompetition />} />
        <Route path="/delete" element={<DeleteCompetition />} />
      </Routes>
    </Router>
  );
};

export default App;
