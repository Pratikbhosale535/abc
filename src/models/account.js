//const mongoose = require("mongoose");
import { model, Schema } from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";
const accountSchema = Schema({
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

const accountModel = model("account", accountSchema);
export default accountModel;
// export default model = model("account", accountSchema);
export const AccountTc = composeWithMongoose(accountModel);
