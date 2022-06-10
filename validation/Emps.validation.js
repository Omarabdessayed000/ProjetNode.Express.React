const isEmpty = require("./isEmpty");

const validator = require("validator");

module.exports = function ValidateEmp(data) {
  let errors = {};
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
  data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
  data.Phone = !isEmpty(data.Phone) ? data.Phone : "";
  data.Age = !isEmpty(data.Age) ? data.Age : "";

  if (!validator.isEmail(data.Email)) {
    errors.Email = "Wrong Email format ! ";
  }

  if (validator.isEmpty(data.Email)) {
    errors.Email = "Required Email ";
  }

  if (validator.isEmpty(data.Lastname)) {
    errors.Lastname = "Required Lastname ";
  }

  if (validator.isEmpty(data.Firstname)) {
    errors.Firstname = "Required Firstname ";
  }

  if (validator.isEmpty(data.Phone)) {
    errors.Phone = "Required Phone ";
  }

  if (validator.isEmpty(data.Age)) {
    errors.Age = "Required Age ";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
