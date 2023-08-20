const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const adminRoute = require('./Routes/admin.js')
const studentRoute = require('./Routes/student.js')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//Testing PORT
app.get('/', (request, response) => {
    response.json({ info: 'Adarsh Jha, 20BCE10988, VIT' })
  })

//Admin routes :http://localhost:3000/admin/
//can also set the v1 with auth 

app.post('/admin/faculty', adminRoute)
app.post('/admin/student', adminRoute)
app.post('/admin/slots', adminRoute)
app.post('/admin/course', adminRoute)

//Student routes eg:http://localhost:3000/faculty/{faculty_id}

app.get('/student' ,studentRoute)
app.get('/faculty', studentRoute)
app.get('/course/:id', studentRoute)
app.get('/faculty/:id', studentRoute)
app.post('/register', studentRoute)



//On running -node index.js
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


