const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/hearing_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB successfully.');
}).catch(err => {
  console.error('Could not connect to MongoDB:', err);
});

app.get('/', (req, res) => {
  res.send('Ứng dụng Giải Quyết Vấn Đề Tai Nghe');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});