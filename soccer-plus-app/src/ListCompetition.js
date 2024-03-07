import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListCompetition() {
  const [competitions, setCompetitions] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSaveFavorite = async () => {
    try {
      if (selectedCompetition) {
        await axios.post('/SavedCompetitions', { competition: selectedCompetition });
        console.log('Competition saved successfully');
      }
    } catch (error) {
      console.error('Error saving competition:', error);
    }
  };
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCompetitions = competitions.filter((competition) =>
    competition.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Competitions</h2>
        <input type="text" placeholder="Search competitions..." value={searchQuery} onChange={handleSearchChange} />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredCompetitions
            .slice(0, showAll ? filteredCompetitions.length : 15)
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
          <button onClick={handleSaveFavorite}>Save as Favorite</button>
        </div>
      )}
    </div>
  );
}

export default ListCompetition;

