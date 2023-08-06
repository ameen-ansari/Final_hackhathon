const express = require("express");
const bodyParser = require('body-parser');
const { dbConnector } = require("./src/db/ConnectDB");
const app = express()
require('dotenv').config()
//Use External Lib. to Encrypt the data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors');
const userSchema = require("./src/models/authModel");
app.use(cors());
//port Number
const port = 800

app.get('/', (req, res) => {
    res.send('welcome');
})

app.post('/saveuser', async (req, res) => {
    console.log(req.body);
    // try {
        const user =await new userSchema(req.body)
        await user.save()
        res.send('ok')
    // } catch (error) {
        // res.send(error)
    // }
})
app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
    dbConnector()
})