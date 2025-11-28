import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import usersRoutes from "./routes"
import { corsOptions, errorHandler } from "../../../shared/middleware";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;


//set up middleware
app.use(cors(corsOptions()));
app.use(helmet());

// Middleware to parse JSON bodies
app.use(express.json({limit: '10mb'})); 
app.use(express.urlencoded({ extended: true }));

//API routes
app.use("/users", usersRoutes);

//Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Health check endpoint: http://localhost:${PORT}/health`);
});

export default app;