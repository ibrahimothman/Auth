const mongoose = require('mongoose');

async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.CONNECT_DB_URL,
        {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`Connected to ${connection.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

module.exports = connectDB
