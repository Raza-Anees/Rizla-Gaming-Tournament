const express = require('express');
const cors = require('cors'); // Ensure cors is required
const app = express();

// Middleware
app.use(express.json());

// Import your Pubg model and database
const Pubg = require('./Models/Pubg');
require('./db/db.js');

// Enable CORS and configure it to allow specific origin
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/gaming/pubg", async (req, res) => {
    try {
        let user = new Pubg(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: 'Error saving PUBG data' });
    }
});

app.post("/gaming/tekken8", async (req, res) => {
    try {
        let user = new Pubg(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: 'Error saving Tekken data' });
    }
});

app.post("/gaming/freefire", async (req, res) => {
    try {
        let user = new Pubg(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: 'Error saving FreeFire data' });
    }
});

// Start the server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
