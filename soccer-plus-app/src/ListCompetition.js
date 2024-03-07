import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListCompetition() {
  const [competitions, setCompetitions] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        setCompetitions(response.data.competitions);
      } catch (error) {
        console.error('Error fetching competitions:', error);
      }
    };

    fetchData();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleCompetitionClick = (competition) => {
    setSelectedCompetition(competition);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Competitions</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {competitions
            .slice(0, showAll ? competitions.length : 15) // Show only the first 15 competitions
            .map((competition) => (
              <li
                key={competition.id}
                onClick={() => handleCompetitionClick(competition)}
                style={{ cursor: 'pointer' }}
              >
                {competition.name}
              </li>
            ))}
        </ul>

        <button onClick={toggleShowAll}>{showAll ? 'Show less' : 'Show more'}</button>
      </div>
      {selectedCompetition && (
        <div style={{ flex: 2, marginLeft: '20px' }}>
          <h3>{selectedCompetition.name}</h3>
          <p>ID: {selectedCompetition.id}</p>
          <p>Start Date: {selectedCompetition.currentSeason.startDate}</p>
          <p>End Date: {selectedCompetition.currentSeason.endDate}</p>
          {selectedCompetition.emblem && (
            <img src={selectedCompetition.emblem} alt={selectedCompetition.name} style={{ maxWidth: '100px' }} />
          )}
        </div>
      )}
    </div>
  );
}

export default ListCompetition;
