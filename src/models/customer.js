import { model, Schema } from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const customerSchema = Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  }
});

const customerModel = model("customer", customerSchema);
export default customerModel;

// export default customerModel = model("customer", customerSchema);
export const CustomerTc = composeWithMongoose(customerModel);
