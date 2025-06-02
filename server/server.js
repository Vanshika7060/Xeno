const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const campaignRoutes = require('./routes/campaignRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDBReact.js Connected'));

app.use('/api/campaigns', campaignRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));