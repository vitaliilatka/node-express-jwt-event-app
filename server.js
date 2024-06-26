const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
        });
    })
    .catch((err) => console.log('MongoDB connection error:', err));
