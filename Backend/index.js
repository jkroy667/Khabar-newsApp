const connectToMongo = require('./db');
const express = require('express');
const cors = require("cors");
connectToMongo();
const app = express()
const port = 5000
app.use(cors());
// Middleware
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
