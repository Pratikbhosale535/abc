import Transaction, { findById, find } from "../models/transaction";
// const { getAccountById } = require("../account/controller");

//const Transaction = require("../models/transaction");
import { updateBalance } from "../account/controller";

// const createNewTransaction = transaction => {
//   const newTransaction = new Transaction(transaction);
//   console.log(newTransaction);
//   // let getAccountById = request.body.account;
//   // if (newTransaction.type == "debit") {
//   //   balance = balance - newTransaction.amt;
//   //   console.log(balance);
//   // } else {
//   //   balance = balance + amt;
//   // }
//   return newTransaction.save();
// };

const createNewTransaction = async transaction => {
  const newTransaction = new Transaction(transaction);
  let createdTransaction = await newTransaction.save();
  if (transaction.type == "debit") {
    await updateBalance(transaction.account, transaction.amt * -1);
  } else {
    await updateBalance(transaction.account, transaction.amt);
  }
  return createdTransaction.populate("account").execPopulate();
};

const getTransactionById = id => {
  return findById(id);
};

const getTransactions = () => {
  return find();
};

export const createNewTransaction = createNewTransaction;
export const getTransactionById = getTransactionById;
export const getTransactions = getTransactions;
