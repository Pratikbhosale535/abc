const Account = require("../models/account");
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
  return Account.findById(id);
};

const getAccounts = () => {
  return Account.find();
};

const updateBalance = (id, amount) => {
  return Account.findByIdAndUpdate(id, {
    $inc: {
      balance: amount
    }
  });
};

module.exports = {
  createNewAccount: createNewAccount,
  getAccountById: getAccountById,
  getAccounts: getAccounts,
  updateBalance: updateBalance
};
