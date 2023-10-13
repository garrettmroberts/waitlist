import mongoose from "mongoose";

const connectMondoDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
    } else {
      throw new Error('No MONGODB_URI in env file. Please add one.')
    }
  } catch (error) {
    console.error(error);
  }
}

export default connectMondoDB;