userDatabase = {
  "guest": {
    account: "guest",
    password: "guest",
    nickname: "guest",
    plans: [],
    comments: {}
  }
}

exports.addUser2Plan = (planId, userAccount) => {
  userDatabase[userAccount].plans.push(planId)
}

exports.deleteUserFromPlan = (planId, userAccount) => {
  index = userDatabase[userAccount].plans.indexOf(planId)
  userDatabase[userAccount].plans.splice(index, 1)
}

exports.getUsers = _ => {
  return userDatabase
}

exports.addUser = user => {
  user.plans = []
  user.comments = {}
  userDatabase[user.account] = user
}

exports.getUser = account => {
  user = userDatabase[account]
  commentArr = [] 
  for (let [key, value] of Object.entries(user.comments)) {
    commentArr.push(value)
  }
  user.comments = commentArr
  return user
}

exports.updateUser = (account, user) => {
  userDatabase[account].password = user.password
  userDatabase[account].nickname = user.nickname
}

exports.addComment = (account, comment) => {
  userDatabase[account].comments[comment.locationId] = comment
}

exports.getComment = (account, locationId) => {
  return userDatabase[account].comments[locationId]
}

exports.updateComment = (account, locationId, comment) => {
  // assert locationId == comment.locationId
  userDatabase[account].comments[locationId] = comment
}

exports.deleteComment = (account, locationId) => {
  delete userDatabase[account].comments[locationId]
}
