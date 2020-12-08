var { v4: uuidv4 } = require('uuid')

var planDatabase = {}

exports.getPlans = _ => {
  return planDatabase
}

exports.addPlan = user => {
  plan = {
    id: uuidv4(),
    img: '',
    destinations: [[]],
    users: [user]
  }
  planDatabase[plan.id] = plan
  return plan
}

exports.getPlan = id => {
  return planDatabase[id]
}

exports.addDay = id => {
  planDatabase[id].destinations.push([])
}

exports.deletePlan = id => {
  delete planDatabase[id]
}

exports.addUser = (planId, user) => {
  if (!planDatabase[planId].users.includes(user)){
    planDatabase[planId].users.push(user)
  }
}

exports.deleteUser = (planId, userAccount) => {
  index = planDatabase[planId].users.indexOf(userAccount)
  planDatabase[planId].users.splice(index, 1)
}

exports.addDestination = (planId, dayIndex, des) => {
  if (!planDatabase[planId].destinations[dayIndex].includes(des)){
    planDatabase[planId].destinations[dayIndex].push(des)
  }
}

exports.deleteDay = (planId, dayIndex) => {
  planDatabase[planId].destinations.splice(dayIndex, 1)
}

exports.deleteDestination = (planId, dayIndex, locationId) => {
  index = planDatabase[planId].destinations[dayIndex].indexOf(locationId)
  planDatabase[planId].destinations[dayIndex].splice(index, 1)
}
