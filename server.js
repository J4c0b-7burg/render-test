require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4321;

app.get('/dburl', (request, response) => {
    response.send(`My connection string is: ${process.env.DATABASE_URL}`)
})

app.get('/', (request, response) => {
  response.send(`hello world I am listening to port ${PORT}`)
})

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`)
})