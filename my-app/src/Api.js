import axios from 'axios';

const footballApi = axios.create({
  baseURL: 'https://api.football-data.org/v4',
  headers: {
    'X-Auth-Token': '{{tokenFotball}}',
  }
});

const fetchArea = async (areaId) => {
  try {
    const response = await footballApi.get(`/areas/${areaId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching area:', error);
    throw new Error('Failed to fetch area. Please try again later.');
  }
};

const fetchCompetition = async (competitionCode) => {
  try {
    const response = await footballApi.get(`/competitions/${competitionCode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching competition:', error);
    throw new Error('Failed to fetch competition. Please try again later.');
  }
};

const fetchStandings = async (competitionId, matchday, season, date) => {
  try {
    const response = await footballApi.get(`/competitions/${competitionId}/standings`, {
      params: {
        matchday: matchday,
        season: season,
        date: date
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching standings:', error);
    throw new Error('Failed to fetch standings. Please try again later.');
  }
};

const fetchMatches = async (competitionId, dateFrom, dateTo, stage, status, matchday, group, season) => {
  try {
    const response = await footballApi.get(`/competitions/${competitionId}/matches`, {
      params: {
        dateFrom: dateFrom,
        dateTo: dateTo,
        stage: stage,
        status: status,
        matchday: matchday,
        group: group,
        season: season
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw new Error('Failed to fetch matches. Please try again later.');
  }
};

const fetchTeams = async (competitionId, season) => {
  try {
    const response = await footballApi.get(`/competitions/${competitionId}/teams`, {
      params: {
        season: season
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw new Error('Failed to fetch teams. Please try again later.');
  }
};

const fetchScorers = async (competitionId, limit, season) => {
  try {
    const response = await footballApi.get(`/competitions/${competitionId}/scorers`, {
      params: {
        limit: limit,
        season: season
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching scorers:', error);
    throw new Error('Failed to fetch scorers. Please try again later.');
  }
};

export {
  fetchArea,
  fetchCompetition,
  fetchStandings,
  fetchMatches,
  fetchTeams,
  fetchScorers,
};
