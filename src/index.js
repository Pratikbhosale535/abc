// const express = require("express");

// const app = express();

// app.use("/", (request, response) => {
//   if ((request.method = "GET")) {
//     return response.send("hello");
//   } else {
//     return response.sendStatus(405);
//   }
// });

// app.listen(3000);

import express from "express";
import { json, urlencoded } from "body-parser";

import { connect } from "mongoose";
// import customerRouter from "./customer/routes";
// import accountRouter from "./account/routes";
// import transactionRouter from "./transaction/routes";

import {
  createNewCustomer,
  getCustomerById,
  getCustomers
} from "./customer/controller";

import {
  createNewAccount,
  getAccounts,
  getAccountByID
} from "./account/controller";

import {
  createNewTransaction,
  getTransactionById,
  getTransactions
} from "./transaction/controller";

import { ApolloServer } from "apollo-server-express";

import schema from "./schema";
const app = express();
app.use(json({}));
app.use(
  urlencoded({
    extended: false
  })
);

// let typeDefs = gql`
//   type Customer {
//     id: ID!
//     name: String!
//     mobile: String!
//   }

//   type Account {
//     id: ID!
//     type: String!
//     balance: Float!
//     accountNumber: String!
//     customer: Customer!
//   }

//   type Transaction {
//     id: ID!
//     type: String!
//     amount: Float!
//     account: Account!
//   }

//   input CustomerInput {
//     name: String!
//     mobile: String!
//   }

//   input AccountInput {
//     type: String!
//     balance: Float!
//     accountNumber: String!
//     customer: ID!
//   }

//   input TransactionInput {
//     type: String!
//     amount: Float!
//     account: ID!
//   }

//   type Query {
//     customer(id: ID!): Customer
//     customers: [Customer]
//     account(id: ID!): Account
//     accounts: [Account]
//     transaction: Transaction
//     transactions: [Transaction]
//   }

//   type Mutation {
//     createCustomer(input: CustomerInput): Customer
//     createAccount(input: AccountInput): Account
//     createTransaction(input: TransactionInput): Transaction
//   }
// `;

// let resolvers = {
//   Query: {
//     customer(parent, args, context, info) {
//       return getCustomerById(args.id);
//     },
//     customers(parent, args, context, info) {
//       return getCustomers(args.id);
//     },
//     account(parent, args, context, info) {
//       return getAccountByID(args.id);
//     },
//     accounts(parent, args, context, info) {
//       return getAccounts(args.id);
//     },
//     transaction(parent, args, context, info) {
//       return getTransactionById(args.id);
//     },
//     transactions(parent, args, context, info) {
//       return getTransactions(args.id);
//     }
//   },

//   Mutation: {
//     createCustomer(parent, args, context, info) {
//       return createNewCustomer(args.input);
//     },

//     createAccount(parent, args, context, info) {
//       return createNewAccount(args.input);
//     },

//     createTransaction(parent, args, context, info) {
//       return createNewTransaction(args.input);
//     }
//   }
// };

const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

// app.use("/customer", customerRouter);
// app.use("/account", accountRouter);
// app.use("/transaction", transactionRouter);
// app.get("/", (req, res) => {
//   let name = req.query.name;
//   console.log(name);
//   return res.send(`hello ${name}`);
// });
// app.listen(3000);

connect(
  "mongodb+srv://root:root@cluster0-vrehy.mongodb.net/test?retryWrites=true&w=majority",
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true }
)
  .then(res => {
    console.log("database connected");
    app.listen(3000);
    console.log("server started");
  })
  .catch(err => {
    console.log("Server startup error.");
    console.log(err);
  });
