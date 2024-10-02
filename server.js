// Import Dependencies
const express =require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

//configure environment variables
dotenv.config()


//create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//Test the connection
db.connect((err) =>{
    // if connection is not successful
    if(err) {
        console.log("Error connecting to the database: ",err)
    }

    //if connection is sucessful
    console.log("Successfully connected to MySQL: ", db.threadId)
})


// retrieving all patients
app.get('', (req, res) => {
    const sql = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
    db.query(sql, (err, data) => {
        // if error occurs
        if(err) {
            return res.status(400).send("failed to fetch patients")
        }

        // if no error
        res.status(200).send(data) 
      })
})


// retrieve all providers
app.get('', (req, res) => {
    const sql = "SELECT first_name, last_name, provider_specialty FROM providers"
    db.query(sql, (err, data) => {
        // if error occurs
        if(err) {
            return res.status(400).send("failed to fetch providers")
        }

        // if no error
        res.status(200).send(data) 
      })
})


// filter patients by their first name
app.get('', (req, res) => {
    const sql = "SELECT * FROM patients"
    const filteredPatients = first_name 
    patients.filter(patient => patient.first_name.toLowerCase() === first_name.toLowerCase());
    db.query(sql, (err, data) => {
        // if error occurs
        if(err) {
            return res.status(400).send("failed to fetch patients")
        }

        // if no error
        res.status(200).send(data) 
      })

})


// retrieve all providers by their specialty
app.get('', (req, res) => {
    const sql = "SELECT first_name, last_name, provider_specialty FROM providers"
    const filteredProviders = providers.filter(provider => provider.provider_specialty.toLowerCase() ===provider_specialty.toLowerCase());
    db.query(sql, (err, data) => {
        // if error occurs
        if(err) {
            return res.status(400).send("failed to fetch providers")
        }

        // if no error
        res.status(200).send(data) 
      })
})

//Start and listen to server
app.listen(3300, () => {
    console.log(`server is running on port 3300...`)
    
})