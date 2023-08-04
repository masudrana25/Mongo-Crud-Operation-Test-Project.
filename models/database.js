const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mongo_crud_project:mongo_crud_project@cluster0.guszfhx.mongodb.net/mongo_crud_project');
    console.log('MongoDB is connected');
  } catch (error) {
    res.send(error);
    console.log('MongoDB is not connected');
  }
}

module.exports = connectDB;
