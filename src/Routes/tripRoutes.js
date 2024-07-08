// src/routes/tripRoutes.js
const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');

// Route: GET /api/trips
// Description: Get all trips
router.get('/getalltrips', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route: POST /api/trips
// Description: Add a new trip
router.post('/addnewtrip', async (req, res) => {
  const { title, description, location, image, price } = req.body;

  try {
    const newTrip = new Trip({
      title,
      description,
      location,
      image,
      price,
    });

    const trip = await newTrip.save();
    res.json(trip);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
