import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample GET endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Sample POST endpoint
app.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});