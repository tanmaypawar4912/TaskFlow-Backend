import dotenv from "dotenv";
import app from "./app";
import connectDatabase from "./config/database";

dotenv.config();

const PORT = Number(process.env.PORT) || 5000;

const start = async (): Promise<void> => {
  try {
    await connectDatabase();
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 TaskFlow API running on port ${PORT}`);
      console.log(
        `🌐 http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "❌ Failed to start TaskFlow",
      error
    );
    process.exit(1);
  }
};

start();