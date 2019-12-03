import { schemaComposer } from "graphql-compose";

import { CustomerTc } from "./models/customer";
// import { getCustomers } from "./customer/controller";

import { AccountTc } from "./models/account";
// import { getAccounts } from "./account/controller";

import { TransactionTc } from "./models/transaction";
import { Source } from "graphql";
// import { getTransactions } from "./transaction/controller";

AccountTc.addRelation("customer", {
  resolver: CustomerTc.getResolver("findById"),
  prepareArgs: {
    _id: Source => Source.customer
  }
});

TransactionTc.addRelation("account", {
  resolver: AccountTc.getResolver("findById"),
  prepareArgs: {
    _id: Source => Source.account
  }
});

schemaComposer.Query.addFields({
  customers: CustomerTc.getResolver("findMany"),
  accounts: AccountTc.getResolver("findMany"),
  transactions: TransactionTc.getResolver("findMany")
});

export default schemaComposer.buildSchema();
