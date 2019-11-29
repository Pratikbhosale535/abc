import Customer, { findById, find } from "../models/customer";
const createNewCustomer = customer => {
  const newCustomer = new Customer(customer);
  return newCustomer.save();
};

const getCustomerById = id => {
  return findById(id);
};
const getCustomers = () => {
  return find();
};

export const createNewCustomer = createNewCustomer;
export const getCustomerById = getCustomerById;
export const getCustomers = getCustomers;
