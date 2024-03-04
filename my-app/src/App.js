import React, { useState } from 'react';
import './App.css';
import { fetchArea, fetchCompetition, fetchStandings, fetchMatches, fetchTeams, fetchScorers } from './Api'; // Import your API functions

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch area
  const handleFetchArea = async (areaId) => {
    setLoading(true);
    try {
      const areaData = await fetchArea(areaId);
      setData(areaData);
    } catch (error) {
      console.error('Error fetching area data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch competition
  const handleFetchCompetition = async (competitionCode) => {
    setLoading(true);
    try {
      const competitionData = await fetchCompetition(competitionCode);
      setData(competitionData);
    } catch (error) {
      console.error('Error fetching competition data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch standings
  const handleFetchStandings = async (competitionId, matchday, season, date) => {
    setLoading(true);
    try {
      const standingsData = await fetchStandings(competitionId, matchday, season, date);
      setData(standingsData);
    } catch (error) {
      console.error('Error fetching standings data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch matches
  const handleFetchMatches = async (competitionId, dateFrom, dateTo, stage, status, matchday, group, season) => {
    setLoading(true);
    try {
      const matchesData = await fetchMatches(competitionId, dateFrom, dateTo, stage, status, matchday, group, season);
      setData(matchesData);
    } catch (error) {
      console.error('Error fetching matches data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch teams
  const handleFetchTeams = async (competitionId, season) => {
    setLoading(true);
    try {
      const teamsData = await fetchTeams(competitionId, season);
      setData(teamsData);
    } catch (error) {
      console.error('Error fetching teams data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch scorers
  const handleFetchScorers = async (competitionId, limit, season) => {
    setLoading(true);
    try {
      const scorersData = await fetchScorers(competitionId, limit, season);
      setData(scorersData);
    } catch (error) {
      console.error('Error fetching scorers data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Soccer+</h1>
      <div className="buttons">
        <button onClick={() => handleFetchArea(123)} disabled={loading}>Fetch Area</button>
        <button onClick={() => handleFetchCompetition('PL')} disabled={loading}>Fetch Competition</button>
        <button onClick={() => handleFetchStandings(123, 10, '2023', '2023-01-01')} disabled={loading}>Fetch Standings</button>
        <button onClick={() => handleFetchMatches(123, '2023-01-01', '2023-12-31', 'GROUP_STAGE', 'SCHEDULED', 1, 'A', '2023')} disabled={loading}>Fetch Matches</button>
        <button onClick={() => handleFetchTeams(123, '2023')} disabled={loading}>Fetch Teams</button>
        <button onClick={() => handleFetchScorers(123, 10, '2023')} disabled={loading}>Fetch Scorers</button>
        
      </div>
      {loading && <p>Loading...</p>}
      {data && (
        <div className="data">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
