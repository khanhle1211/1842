// models/employee.model.js -Define Mongoose schema for employees
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  position: { type: String, required: true },
  language1: { type: String },
  language2: { type: String },
  language3: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Employee', EmployeeSchema);
