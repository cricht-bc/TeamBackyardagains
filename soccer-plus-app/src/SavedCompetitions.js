import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SavedCompetitions = () => {
  const [savedCompetitions, setSavedCompetitions] = useState([]);

  useEffect(() => {
    const fetchSavedCompetitions = async () => {
      try {
        const response = await axios.get('/favoriteCompetitions.json'); // Update the endpoint to fetch saved competitions
        setSavedCompetitions(response.data);
      } catch (error) {
        console.error('Error fetching saved competitions:', error);
      }
    };

    fetchSavedCompetitions();
  }, []);

  const handleDeleteCompetition = async (competitionId) => {
    try {
      await axios.delete(`/favoriteCompetitions/${competitionId}`); // Update the endpoint to delete a single competition
      const updatedCompetitions = savedCompetitions.filter(comp => comp.id !== competitionId);
      setSavedCompetitions(updatedCompetitions);
    } catch (error) {
      console.error('Error deleting competition:', error);
    }
  };

  const handleClearAllCompetitions = async () => {
    try {
      await axios.delete('/favoriteCompetitions'); // Update the endpoint to delete all competitions
      setSavedCompetitions([]);
    } catch (error) {
      console.error('Error clearing competitions:', error);
    }
  };

  return (
    <div>
      <h2>Saved Competitions</h2>
      <button onClick={handleClearAllCompetitions}>Clear All</button>
      <ul>
        {savedCompetitions.map((competition, index) => (
          <li key={index}>
            {competition.name}
            <button onClick={() => handleDeleteCompetition(competition.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCompetitions;
