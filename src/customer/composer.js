import { schemaComposer } from "graphql-compose";

export const CustomerTc = schemaComposer.createObjectTC({
  name: "Customer",
  fields: {
    id: "ID!",
    name: "String!",
    mobile: "String!"
  }
});
