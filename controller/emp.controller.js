const { exists } = require("../models/emps.model");
const Emps = require("../models/emps.model");
const ValidateEmp = require("../validation/Emps.validation");

/* AddEmp Controller */
const AddEmp = async (req, res) => {
  const { errors, isValid } = ValidateEmp(req.body);

  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Emps.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = " Employee already exists !";
          res.status(404).json(errors);
        } else {
          await Emps.create(req.body);
          res.status(201).json({ message: " Employee added with success " });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

/* FindallEmp Controller */
const FindallEmp = async (req, res) => {
  try {
    const data = await Emps.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

/* FindEmpById Controller */
const FindEmpById = async (req, res) => {
  try {
    const data = await Emps.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

/* UpddateEmp Controller */
const UpddateEmp = async (req, res) => {
  const { errors, isValid } = ValidateEmp(req.body);

  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Emps.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

/* DeleteEmp Controller */
const DeleteEmp = async (req, res) => {
  try {
    const data = await Emps.findOneAndDelete({ _id: req.params.id });
    res.status(201).json({ message: " Employee deleted with success " });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddEmp,
  FindallEmp,
  FindEmpById,
  UpddateEmp,
  DeleteEmp,
};
