// server.js - Entry point cho backend
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employeesRouter = require('./routes/employees'); // Đường dẫn đến file routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Mở CORS cho phép frontend gọi API
app.use(express.json()); // Phân tích JSON trong request body

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Đã kết nối đến MongoDB'))
.catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Routes
app.use('/employees', employeesRouter); // Sử dụng route cho /employees

// Route mặc định
app.get('/', (req, res) => {
  res.send('Backend MEVN-CRUD đang chạy');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
