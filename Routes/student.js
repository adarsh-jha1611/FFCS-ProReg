const express = require('express')
const db = require('../Controllers/stuController.js')
const route = express.Router()

//Get Students
route.get('/student', db.getStu)

//Get Faculties
route.get('/faculty', db.getFac)

//Get Faculties by ID
route.get('/faculty/:id', db.getFacbyID)
//addede ID for verification according to the schema

//Get Students by ID
route.get('/course/:id', db.getCourseByID)

//Register a crs
route.post('/register', db.RegisteredCrs)


module.exports = route
