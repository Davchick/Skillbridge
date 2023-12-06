import authRoutes from "./routes/auth.routes.js";
import mongoose from "mongoose";
import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";

/* CONFIGURATIONS */
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
dotenv.config();

/* ROUTES */
app.use("/auth", authRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
});

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server works on port - ${PORT}`))
  )
  .catch((err) => console.log(err));
