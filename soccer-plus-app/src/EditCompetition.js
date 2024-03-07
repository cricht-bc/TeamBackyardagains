// EditCompetition.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditCompetition = () => {
  const { id } = useParams();
  const [competitionName, setCompetitionName] = useState(`Competition ${id}`);

  const handleEditCompetition = () => {
    // Logic to edit competition
    console.log(`Competition ${id} edited:`, competitionName);
  };

  return (
    <div>
      <h2>Edit Competition {id}</h2>
      <input type="text" value={competitionName} onChange={(e) => setCompetitionName(e.target.value)} />
      <button onClick={handleEditCompetition}>Save</button>
      <br />
      <Link to="/list">Back to List</Link>
    </div>
  );
};

export default EditCompetition;
