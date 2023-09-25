require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations.js')
var ctrlOthers = require('../controllers/others.js')

router.get('/', ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location2',ctrlLocations.locationInfo2);
router.get('/location3',ctrlLocations.locationInfo3);

router.get('/location/review/new',ctrlLocations.addReview);
router.get('/location/review/new2',ctrlLocations.addReview2);
router.get('/location/review/new3',ctrlLocations.addReview3);

router.get('/about',ctrlOthers.about);

module.exports = router;