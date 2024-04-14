const express = require("express");
const app = express();
const router = require("./router/auth-router");
app.use("/api/auth",router);


app.get("/", (req, res) =>{
    res.status(200).send("Welcome to the API");
});

app.get("/register", (req, res) =>{
    res.status(200).send("Welcome to the Register Page");
});

const PORT =5000;
app.listen(PORT, () => 
{
    console.log(`Server is running on ${PORT}`);
});