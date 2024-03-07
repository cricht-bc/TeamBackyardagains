import React, { useState } from 'react';
import axios from 'axios';

function AddCompetition() {
  const [newCompetition, setNewCompetition] = useState({
    id: '',
    name: '',
    startDate: '',
    endDate: '',
    notes: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCompetition({ ...newCompetition, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the backend server to add the new competition
      await axios.post('/add', newCompetition);
      // Reset the form fields
      setNewCompetition({
        id: '',
        name: '',
        startDate: '',
        endDate: '',
        notes: '',
      });
      alert('Competition added successfully!');
    } catch (error) {
      console.error('Error adding competition:', error);
      setError('Error adding competition. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Competition</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={newCompetition.id} onChange={handleChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={newCompetition.name} onChange={handleChange} />
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" name="startDate" value={newCompetition.startDate} onChange={handleChange} />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" name="endDate" value={newCompetition.endDate} onChange={handleChange} />
        </div>
        <div>
          <label>Notes:</label>
          <textarea name="notes" value={newCompetition.notes} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCompetition;
