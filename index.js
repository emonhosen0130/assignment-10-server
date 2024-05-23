const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.POST || 5000;

// middleware
app.use = (cors());
app.use = (express.json());






app.get('/', (req, res) => {
    console.log('Art & Craft Store in running ')
})
app.listen(port, () => {
    console.log(`Art & Craft Store port in running port ,${port}`)
})