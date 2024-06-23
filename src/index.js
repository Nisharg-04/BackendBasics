import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const mongodbInstance = await mongoose.connect(
      `mongodb+srv://nisharg:nisharg123@cluster0.kmgjdjo.mongodb.net/${DB_NAME}`
    );
    console.log("MONGODB Connected Succesfully !!! ");
  } catch (error) {
    console.error("MONGODB failed to connect", error);
    process.exit(1);
  }
};
export default connectDB;
