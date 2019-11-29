// const express = require("express");

// const app = express();

// app.use("/", (request, response) => {
//   if ((request.method = "GET")) {
//     return response.send("hello");
//   } else {
//     return response.sendStatus(405);
//   }
// });

// app.listen(3000);

import express from "express";
import { json, urlencoded } from "body-parser";
const app = express();
import { connect } from "mongoose";
import customerRouter from "./customer/routes";
import accountRouter from "./account/routes";
import transactionRouter from "./transaction/routes";
app.use(json({}));

app.use(
  urlencoded({
    extended: false
  })
);
app.use("/customer", customerRouter);
app.use("/account", accountRouter);
app.use("/transaction", transactionRouter);
// app.get("/", (req, res) => {
//   let name = req.query.name;
//   console.log(name);
//   return res.send(`hello ${name}`);
// });
// app.listen(3000);

connect(
  "mongodb+srv://root:root@cluster0-vrehy.mongodb.net/test?retryWrites=true&w=majority",
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true }
)
  .then(res => {
    console.log("database connected");
    app.listen(3000);
    console.log("server started");
  })
  .catch(err => {
    console.log("Server startup error.");
    console.log(err);
  });
