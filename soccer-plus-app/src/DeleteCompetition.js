// DeleteCompetition.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DeleteCompetition = () => {
  const { id } = useParams();

  const handleDeleteCompetition = () => {
    // Logic to delete competition
    console.log(`Competition ${id} deleted`);
  };

  return (
    <div>
      <h2>Delete Competition {id}</h2>
      <button onClick={handleDeleteCompetition}>Delete</button>
      <br />
      <Link to="/list">Back to List</Link>
    </div>
  );
};

export default DeleteCompetition;
