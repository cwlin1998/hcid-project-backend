var express = require('express')
var LocationService = require('../service/location')

var router = express.Router()

router.get('/', async(req, res) => {
  locs = await LocationService.getLocations(req.query)
  res.json(locs)
})

router.get('/:locationId', async(req, res) => {
  loc = await LocationService.getLocation(req.params.locationId)
  res.json(loc)
})

module.exports = router
