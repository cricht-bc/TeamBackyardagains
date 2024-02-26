document.getElementById('preferences-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get user preferences
    const player = document.getElementById('player').value;
    const team = document.getElementById('team').value;
    const league = document.getElementById('league').value;

    // Make API request
    fetch(`:https://rapidapi.com/soccerfootball-info-soccerfootball-info-default/api/soccer-football-info`)
        .then(response => response.json())
        .then(data => {
            // Display data
            document.getElementById('results').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
            document.getElementById('results').innerHTML = 'An error occurred. Please try again later.';
        });
});
