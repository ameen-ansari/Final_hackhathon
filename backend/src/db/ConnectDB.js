const mongoose = require('mongoose')

const dbConnector = async () => {
    try {
        await mongoose.connect(mongodb://localhost:27017/
        );
        console.log('dbConnected...');
    } catch (error) {
        console.log('while db_connection', error);
    }
}

module.exports = {
    dbConnector
}