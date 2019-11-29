import Account, { findById, find, findByIdAndUpdate } from "../models/account";
// const createNewAccount = account => {
//   const newAccount = new Account(account);
//   return newAccount.save();
// };
const createNewAccount = async account => {
  const newAccount = new Account(account);
  let createdAccount = await newAccount.save();
  return createdAccount.populate("customer").execPopulate();
};

const getAccountById = id => {
  return findById(id);
};

const getAccounts = () => {
  return find();
};

const updateBalance = (id, amount) => {
  return findByIdAndUpdate(id, {
    $inc: {
      balance: amount
    }
  });
};

export const createNewAccount = createNewAccount;
export const getAccountById = getAccountById;
export const getAccounts = getAccounts;
export const updateBalance = updateBalance;
