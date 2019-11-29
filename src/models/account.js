//const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
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
module.exports = accountmodel;
