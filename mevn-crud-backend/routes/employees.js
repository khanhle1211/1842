const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = require('../models/employee.model');

// 📌Get list of all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách nhân viên', error: err.message });
  }
});

// 📌 Lấy thông tin một nhân viên theo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID không hợp lệ' });
  }

  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
    }
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy thông tin nhân viên', error: err.message });
  }
});

// 📌 Thêm mới một nhân viên
router.post('/', async (req, res) => {
  const { name, email, position, language1, language2, language3 } = req.body;

  const employee = new Employee({
    name,
    email,
    position,
    language1,
    language2,
    language3
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: 'Lỗi khi thêm nhân viên', error: err.message });
  }
});

// 📌 Cập nhật nhân viên theo ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID không hợp lệ' });
  }

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Không tìm thấy nhân viên để cập nhật' });
    }

    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: 'Lỗi khi cập nhật nhân viên', error: err.message });
  }
});

// Xoá nhân viên
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID không hợp lệ' });
  }

  try {
    const result = await Employee.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Không tìm thấy nhân viên để xoá' });
    }

    res.json({ message: 'Đã xoá nhân viên thành công' });
  } catch (err) {
    console.error('❌ Lỗi xoá nhân viên:', err);
    res.status(500).json({ message: 'Lỗi khi xoá nhân viên', error: err.message });
  }
});


module.exports = router;
