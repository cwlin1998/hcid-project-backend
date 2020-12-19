var express = require('express')
var PlanService = require('../service/plan')
var UserService = require('../service/user')

var router = express.Router()

router.get('/', async(req, res) => {
  plans = await PlanService.getPlans()
  res.json(plans)
})

router.post('/', async(req, res) => {
  plan = await PlanService.addPlan(req.body.user, req.body.name)
  await UserService.addUser2Plan(plan.id, req.body.user)
  res.status(201)
  res.json({})
})

router.get('/:planId', async(req, res) => {
  plan = await PlanService.getPlan(req.params.planId)
  res.json(plan)
})

router.post('/:planId', async(req, res) => {
  await PlanService.addDay(req.params.planId)
  res.status(201)
  res.json({})
})

router.patch('/:planId', async(req, res) => {
  await PlanService.updatePlan(req.params.planId, req.body)
  res.json({})
})

router.delete('/:planId', async(req, res) => {
  await PlanService.deletePlan(req.params.planId)
  res.json({})
})

router.put('/:planId/users', async(req, res) => {
  await PlanService.addUser(req.params.planId, req.body.user)
  await UserService.addUser2Plan(req.params.planId, req.body.user)
  res.status(201)
  res.json({})
})

router.delete('/:planId/users/:userAccount', async(req, res) => {
  await PlanService.deleteUser(req.params.planId, req.params.userAccount)
  await UserService.deleteUserFromPlan(req.params.planId, req.params.userAccount)
  res.json({})
})

router.put('/:planId/:dayIndex', async(req, res) => {
  planId = req.params.planId
  dayIndex = req.params.dayIndex
  des = req.body.destination
  await PlanService.addDestination(planId, dayIndex, des)
  res.status(201)
  res.json({})
})

router.delete('/:planId/:dayIndex', async(req, res) => {
  await PlanService.deleteDay(req.params.planId, req.params.dayIndex)
  res.json({})
})

router.delete('/:planId/:dayIndex/:locationId', async(req, res) => {
  planId = req.params.planId
  dayIndex = req.params.dayIndex
  locationId = req.params.locationId
  await PlanService.deleteDestination(planId, dayIndex, locationId)
  res.json({})
})

module.exports = router
