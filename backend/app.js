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

app.post('/signup', async (req, res) => {
    try {
        let token = jwt.sign({ email: req.body.email, password: req.body.password }, 'a')
        const user = new userSchema({ ...req.body, token })
        await user.save()
        res.send({ message: 'User Saved' })
    } catch (error) {
        res.send({ message: 'Something Went Wrong', error: error })
        console.log(error);
    }
})

app.post('/manageauth', async (req, res) => {
    try {
        let user = await userSchema.findOne({ token: req.body.token })
        if (user) {
            res.send({
                message: "verified"
            })
        } else {
            res.send({
                message: "user not verified"
            })
        }
    } catch (error) {
        res.send({ message: 'Something Went Wrong', error: error })
        console.log(error);
    }
})

app.post('/login', async (req, res) => {
    try {
        let user = await userSchema.findOne({ email: req.body.email })
        if (user.password === req.body.password) {
            res.status(200).send({ token: user.token, message: 'SuccessFully Login' })
        } else {
            res.status(200).send({ message: 'Incorrect Password' })
        }
    } catch (error) {
        res.send({ message: 'Something Went Wrong', error: error })
        console.log(error);
    }

    // try {
    //     let user = userSchema.findOne({ token })
    //     if (user) {
    //         res.status(200).send({
    //             message: token,
    //             user
    //         })
    //     } else {
    //         res.send({
    //             message: 'Something Went Wrong'
    //         })

    //     }
    // } catch (error) {
    //     res.send({ message: 'Something Went Wrong', error: error })
    //     console.log(error);
    // }
})
app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
    console.log('DB Connecting... wait');
    dbConnector()
})