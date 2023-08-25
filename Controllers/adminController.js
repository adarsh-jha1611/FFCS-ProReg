const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: '1608@Ajha',
  port: 5432,
})

// Admin access to create Faculties with required entites
const createFac = (request, response) => {
    const { id, fac_name } = request.body
  
    pool.query('INSERT INTO faculty (id, fac_name) VALUES ($1, $2) RETURNING *', [id, fac_name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Faculty added with ID: ${results.rows[0].id}`)
    })
  }

// Admin access to create Slots with required entites

const createSlots = (request, response) => {
    const { id, timings } = request.body
  
    pool.query('INSERT INTO slots (id, timings) VALUES ($1, $2) RETURNING *', [id, timings], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Slots added with ID: ${results.rows[0].id}`)
    })
  }

// Admin access to create Courses with required entites

const createCrs = (request, response) => {
    const { id, crs_name, crs_type, faculties, allowed_slots } = request.body
  
    pool.query('INSERT INTO course (id, crs_name,crs_type,faculties,allowed_slots) VALUES ($1, $2, $3, $4, $5) RETURNING *', [id, crs_name,crs_type,faculties,allowed_slots], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Course added with ID: ${results.rows[0].id}`)
    })
  }

// Admin access to create Students with required entites

const createStu = (request, response) => {
    const { id, stu_name, reg_crs } = request.body
  
    pool.query('INSERT INTO students (id, stu_name, reg_crs) VALUES ($1, $2, $3) RETURNING *', [id, stu_name, reg_crs], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Student added with ID: ${results.rows[0].id}`)
    })
  }
// Admin access to create exams with required entites

const createStu = (request, response) => {
    const { id, stu_name, reg_crs } = request.body
  
    pool.query('INSERT INTO students (id, stu_name, reg_crs) VALUES ($1, $2, $3) RETURNING *', [id, stu_name, reg_crs], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Student added with ID: ${results.rows[0].id}`)
    })
  }




  
  

module.exports={createFac,createStu,createSlots,createCrs}
