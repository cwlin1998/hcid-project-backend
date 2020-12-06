const express = require('express')
const port = process.env.PORT || 8000
const swagger_ui = require('swagger-ui-express'), swagger_document = require('../api/openapi.json')

var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api-docs', swagger_ui.serve, swagger_ui.setup(swagger_document))
app.use('/plans', require('./backend/api/plan'))
app.use('/locations', require('./backend/api/location'))
app.use('/users', require('./backend/api/user'))

server = app.listen(port, () => console.log('Listening on port ' + port))
