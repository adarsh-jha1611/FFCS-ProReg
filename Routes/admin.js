const express = require('express')
const db = require('../Controllers/adminController.js')
const route = express.Router()

//Creating Faculties
route.post('/admin/faculty', db.createFac)

//Creating Students
route.post('/admin/student', db.createStu)

//Creating Slots
route.post('/admin/slots',db.createSlots)

//Creating Courses
route.post('/admin/course',db.createCrs)

//Creating Exams
route.post('/admin/exams',db.createExm)


module.exports = route
