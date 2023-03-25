const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: '1608@Ajha',
  port: 5432,
})

const getFac = (request, response) => {
    
    pool.query('SELECT * FROM faculty ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//get faculty by ID

const getFacbyID = (request, response) => {
    const id = request.params.id
    pool.query('SELECT * FROM faculty WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }




const getStu = (request, response) => {
    pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//get Student by ID

const getCourseByID = (request, response) => {
    const id = request.params.id
  
    pool.query('SELECT * FROM course WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//Register a cousre 
const RegisteredCrs = (request, response) => {
    const { id, crs_name, faculty, slot,crs_type} = request.body
  
    pool.query('INSERT INTO registered (id, crs_name,faculty,slot,crs_type) VALUES ($1, $2, $3, $4, $5) RETURNING *', [id, crs_name,faculty,slot,crs_type], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Registered Course added with ID: ${results.rows[0].id}`)
    })
  }


module.exports={getStu,getFac,getFacbyID,getCourseByID, RegisteredCrs}