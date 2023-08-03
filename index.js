const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Database connection
mongoose.connect('mongodb://localhost/book_directory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
// Import the books route and use it
const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
 res.render('home'); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
