const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ mensaje: 'Backend market_web funcionando 🚀' });
});

app.listen(3000, () => {
  console.log('Backend corriendo en http://localhost:3000');
});
