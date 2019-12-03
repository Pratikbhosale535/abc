import { schemaComposer } from "graphql-compose";

export const AccountTc = schemaComposer.createObjectTC({
  name: "Account",
  fields: {
    id: "ID!",
    type: "String!",
    balance: "Float!",
    accountnumber: "String!",
    customer: "Customer!"
  }
});
