import { Router } from "express";
const router = Router();
//const Customer = require("../models/customer");
import {
  createNewTransaction,
  getTransactionById,
  getTransactions,
  getgetTransUpdate
} from "./controller";

router.post("/", (req, res) => {
  createNewTransaction(req.body)
    .then(resp => {
      return res.send(resp);
    })
    .catch(err => {
      console.log(err);
    });
  //
  //   return res.send(`hello ${name}`);
});

router.get("/", (req, res) => {
  getTransactions()
    // Customer.find({}, { name: 1, mobile: 1 })
    .then(transaction => {
      res.send(transaction);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  getTransactionById(req.params.id)
    //Customer.findById(req.params.id, { name: 1, _id: 0 })
    .then(transactions => {
      res.send(transactions);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;
