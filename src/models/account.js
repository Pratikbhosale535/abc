//const mongoose = require("mongoose");
import { model, Schema } from "mongoose";
const accountschema = Schema({
  type: {
    type: String,
    required: true,
    enum: ["currnet", "savings"]
  },
  balance: {
    type: Number,
    required: true
  },
  accountnumber: {
    type: String,
    required: true
  },
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "customer"
  }
});

const accountmodel = model("account", accountschema);
export default accountmodel;
