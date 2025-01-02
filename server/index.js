 import dotenv from "dotenv";
import express from "express"; // Import Express
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js"
dotenv.config({
  path: "./.env",
});

const app = express(); // Initialize Express app
//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: `http://localhost:${port}`,
  credentials: true,
}));
//apis
app.use("/api/v1/user",userRoute);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      const port = process.env.PORT || 8000;
      const localHostLink = `http://localhost:${port}`;
      console.log(`⚙️ Server is running at port: ${port}`);
      console.log(`🌐 Local host link: ${localHostLink}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!! ", err);
  });
