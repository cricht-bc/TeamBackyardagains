import axios from 'axios';
import App from './App';

const apiUrl = 'https://api.football-data.org/v4';

// Function to find matches by filters
export const findMatchesByFilters = async (filters) => {
  try {
    const response = await axios.get(`${apiUrl}/matches`, {
      params: filters,
      headers: {
        'X-Auth-Token': '{{tokenFotball}}'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error finding matches by filters:', error);
    throw new Error('Failed to find matches. Please try again later.');
  }
};

