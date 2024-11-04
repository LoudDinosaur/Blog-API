const mongoose = require("mongoose");

//env file ki configuration ko process waale object mein daalke access krlo
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB connected successfully"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1); //exit with error
    } )
};

module.exports = connectWithDb;