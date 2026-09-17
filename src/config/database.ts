import mongoose from "mongoose";

const connectDatabase = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    const connection = await mongoose.connect(mongoUri, {
      dbName: "TaskFlow",
    });

    console.log(
      `🍃 MongoDB connected successfully: ${connection.connection.name}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDatabase;