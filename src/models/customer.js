const { model, Schema } = require("mongoose");

const customerschema = Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  }
});

const customermodel = model("customer", customerschema);
module.exports = customermodel;
