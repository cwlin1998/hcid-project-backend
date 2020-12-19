var express = require('express')
var UserService = require('../service/user')

var router = express.Router()

router.get('/', async(req, res) => {
  users = await UserService.getUsers(req.query.q)
  res.json(users)
})

router.post('/', async(req, res) => {
  await UserService.addUser(req.body)
  res.status(201)
  res.json({})
})

router.get('/:userAccount', async(req, res) => {
  try {
    user = await UserService.getUser(req.params.userAccount)
    res.json(user)
  } catch (e) {
    res.status(404)
    res.send(e)
  }
})

router.patch('/:userAccount', async(req, res) => {
  await UserService.updateUser(req.params.userAccount, req.body)
  res.json({})
})

router.put('/:userAccount/comment', async(req, res) => {
  await UserService.addComment(req.params.userAccount, req.body)
  res.status(201)
  res.json({})
})

router.get('/:userAccount/comment/:locationId', async(req, res) => {
  comment = await UserService.getComment(req.params.userAccount, req.params.locationId)
  res.json(comment)
})

router.patch('/:userAccount/comment/:locationId', async(req, res) => {
  await UserService.updateComment(req.params.userAccount, req.params.locationId, req.body)
  res.json({})
})

router.delete('/:userAccount/comment/:locationId', async(req, res) => {
  await UserService.deleteComment(req.params.userAccount, req.params.locationId)
  res.json({})
})

module.exports = router
