const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');
const pool = require('../utils/pool');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  try {
    const profile = await Profile.insert({ ...req.body, quote: 'N/A' });
    res.send(profile);
  } catch (error) {
    error.status = 404;
    next(error);
  }
});
