import { model, Schema } from "mongoose";

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
export default customermodel;
