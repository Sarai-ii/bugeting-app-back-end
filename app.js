// DEPENDENCIES
const express = require("express");
const cors = require("cors")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON  
app.use(cors())
 
const transactionsController = require("./controllers/transactions.controllers")
app.use("/transactions", transactionsController)

// ROUTES
app.get("/", (req, res) => {
    res.send(
        `<h1> Welcome To The Budgeting App </h1>`
    );
});
  
// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Sorry, no page found." );
});

// EXPORT
module.exports = app;