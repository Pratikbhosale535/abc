import { model, Schema } from "mongoose";

const transactionschema = Schema({
  type: {
    type: String,
    required: true,
    enum: ["debit", "credit"]
  },
  amt: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now
  },
  account: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "account"
  }
});

const transactionmodel = model("transaction", transactionschema);
export default transactionmodel;
