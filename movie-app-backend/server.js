import express from "express";
import movieRouter from "./routes/movie.js";
import cors from 'cors'
export default function createServer() {
  const app = express();
app.use(cors())
  app.use(express.json());

  app.use("/movies", movieRouter);

  return app;
}
