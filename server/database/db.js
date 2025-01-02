import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Updated to match the variable name in .env
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error occurred:", error);
  }
};

export default connectDB;
