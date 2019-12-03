import { schemaComposer } from "graphql-compose";

export const TransactionTc = schemaComposer.createObjectTC({
  name: "Transaction",
  fields: {
    id: "ID!",
    type: "String!",
    amt: "Float!",
    account: "Account!"
  }
});
