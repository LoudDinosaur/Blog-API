

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse the json body structure
app.use(express.json());

//import routes
const blog = require("./routes/blog")
//mount
app.use("/api/v1" , blog);

//connect with db
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at PORT no ${PORT}`);
})

app.get("/" ,(req,res) => {
    res.send(`<h1>This is my Homepage baby</h1>`)
})