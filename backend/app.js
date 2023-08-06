const express = require("express");
const bodyParser = require('body-parser');
const { dbConnector } = require("./src/db/ConnectDB");
const app = express()
var jwt = require('jsonwebtoken');
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
    try {
        let token = await jwt.sign({ email: req.body.email, password: req.body.password }, 'yustyu:Pdjh');
        const user = await new userSchema({ ...req.body, token })
        await user.save()
        res.send('ok')
    } catch (error) {
        res.send(error)
    }
})
app.post('/manageauth', async (req, res) => {
    // let user = await userSchema.find({ token:req.body })
    console.log(req.body);
    res.status(200).send({ token:req.body })
})
app.post('/checkuser', async (req, res) => {

    try {
        let token = await jwt.sign({ email: req.body.email, password: req.body.password }, 'yustyu:Pdjh');
        let user = await userSchema.find({ token })
        console.log(user);
        res.status(200).send(user)
    } catch (error) {
        res.send(error)
    }
})
app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
    console.log('DB Connecting... wait');
    dbConnector()
})