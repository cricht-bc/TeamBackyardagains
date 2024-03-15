import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ListCompetition from './ListCompetition';
import VideoSection from './VideoSection';
import './styles.css'; // CSS file

const App = () => {
  return (
<Router>
  <div>
    {/* header logo Soccer+ app name */}
    <header className="header">
      <h1 className="logo">Soccer+</h1>
      <nav>
      {/* navgation bar */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/competitions" className="nav-link">Competitions</Link>
          </li>
          <li>
            <Link to="/videos" className="nav-link">Videos</Link>
          </li>
        </ul>
      </nav>
    </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competitions" element={<ListCompetition />} />
            <Route path="/videos" element={<VideoSection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
