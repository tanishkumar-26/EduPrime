const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

// Set up ejs-mate and views

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Hi,I am root!');
});

// ...existing code...
app.get('/home', async (req, res) => {
  res.render('lists/index');
});
// ...existing code...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});