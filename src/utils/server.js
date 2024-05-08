const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000; // Choose any available port
app.use(cors());

// Endpoint to fetch Twitter follower count
app.get('/twitter/followers', async (req, res) => {
    try {
        const username = 'elonmusk'; // Change to the desired Twitter username
        const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}/followers`, {
            headers: {
                Authorization: `AAAAAAAAAAAAAAAAAAAAANPJtgEAAAAA8ZfoMF2TqQS%2BMrhEq3r34UFoVxw%3D2v7BddOdvsUIBjKO9xVjjEwH1sMJDpxgbiwUbrLetslEtkkE62`,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching followers:', error);
        res.status(500).json({ error: 'Error fetching followers' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
