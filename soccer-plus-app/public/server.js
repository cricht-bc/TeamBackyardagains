const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define schema for saved competitions
const competitionSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  // Add more fields as needed
});

const Competition = mongoose.model('Competition', competitionSchema);

app.use(bodyParser.json());

// API endpoint to save a competition
app.post('/SavedCompetitions', async (req, res) => {
  try {
    const { name, startDate, endDate } = req.body;
    const competition = new Competition({ name, startDate, endDate });
    await competition.save();
    res.status(201).send('Competition saved successfully');
  } catch (error) {
    console.error('Error saving competition:', error);
    res.status(500).send('Internal server error');
  }
});

// API endpoint to retrieve saved competitions
app.get('/SavedCompetitions', async (req, res) => {
  try {
    const competitions = await Competition.find();
    res.json(competitions);
  } catch (error) {
    console.error('Error fetching competitions:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
