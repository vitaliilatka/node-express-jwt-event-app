const express = require('express');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());

// View engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => res.render('home'));
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

module.exports = app;
