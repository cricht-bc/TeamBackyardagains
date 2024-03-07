import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Soccer+ App</h1>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
          <li>
            <Link to="/add">Add </Link>
          </li>
          <li>
            <Link to="/edit">Edit </Link>
          </li>
          <li>
            <Link to="/delete">Delete </Link>
          </li>
          <li>
            <Link to="/list">List </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
