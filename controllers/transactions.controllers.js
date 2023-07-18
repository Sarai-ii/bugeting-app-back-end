const express = require("express");

const transactions = express.Router();

const transactionArray = require("../models/transaction.model");

//INDEX
transactions.get("/", (req, res) => {
    res.json(transactionArray);
});

 //SHOW((GET))
transactions.get("/:arrayIndex", (req, res) => {
    if (transactionArray[req.params.arrayIndex]) {
        res.json(transactionArray[req.params.arrayIndex])
    } else {
        res.status(404).json({error: "Not Found" })
    }
});

 //CREATE((POST))
transactions.post("/", (req, res) => {
    transactionArray.push(req.body)
    res.json(transactionArray[transactionArray.length-1]);
});

 //DELETE
transactions.delete("/:indexArray", (req, res) => {
    const deletedTransaction = transactionArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedTransaction);
});

 //UPDATE((PUT))
transactions.put("/:arrayIndex", (req, res) => {
    transactionArray[req.params.arrayIndex] = req.body;
    res.status(200).json(transactionArray[req.params.arrayIndex]);
});


module.exports = transactions;