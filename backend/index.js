const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/messages', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./docs/data.json', 'utf-8'));
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
