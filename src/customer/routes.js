import { Router } from "express";
const router = Router();
//const Customer = require("../models/customer");
import { createNewCustomer, getCustomerById, getCustomers } from "./controller";

router.post("/", (req, res) => {
  createNewCustomer(req.body)
    .then(resp => {
      return res.send("Customer");
    })
    .catch(err => {
      console.log(err);
    });
  //
  //   return res.send(`hello ${name}`);
});

router.get("/", (req, res) => {
  getCustomers()
    // Customer.find({}, { name: 1, mobile: 1 })
    .then(customers => {
      res.send(customers);
    })
    .catch(err => {
      console.log(err);
    });
});
router.get("/:id", (req, res) => {
  getCustomerById(req.params.id)
    //Customer.findById(req.params.id, { name: 1, _id: 0 })
    .then(customers => {
      res.send(customers);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;
