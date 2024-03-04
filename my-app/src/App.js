import React, { useState } from 'react';
import './App.css';
import { findMatchesByFilters } from './Api'; // Import the function from Api.js

function App() {
  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    season: '',
    status: '',
    venue: '',
    date: ''
  });

  const seasons = ['2023-2024', '2022-2023', '2021-2022']; // seasons
  const statuses = ['SCHEDULED', 'LIVE', 'FINISHED']; // statuses
  const venues = ['HOME', 'AWAY']; // venues
  const dates = ['2023-10-15', '2023-10-16', '2023-10-17']; // dates

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await findMatchesByFilters(filters);
      setMatches(data);
    } catch (error) {
      console.error('Error finding matches:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Soccer+</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Season:
          <select name="season" value={filters.season} onChange={handleChange}>
            <option value="">Select season...</option>
            {seasons.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Status:
          <select name="status" value={filters.status} onChange={handleChange}>
            <option value="">Select status...</option>
            {statuses.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Venue:
          <select name="venue" value={filters.venue} onChange={handleChange}>
            <option value="">Select venue...</option>
            {venues.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <select name="date" value={filters.date} onChange={handleChange}>
            <option value="">Select date...</option>
            {dates.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={loading}>Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {matches && (
        <div className="matches">
          <h2>Matches</h2>
          <ul>
            {matches.map(match => (
              <li key={match.id}>{match.homeTeam} vs {match.awayTeam}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
