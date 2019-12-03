import { model, Schema } from "mongoose";

import { composeWithMongoose } from "graphql-compose-mongoose";

const transactionSchema = Schema({
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

const transactionModel = model("transaction", transactionSchema);
export default transactionModel;

// export default model = model("transaction", transactionSchema);
export const TransactionTc = composeWithMongoose(transactionModel);
