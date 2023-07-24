import express from "express";
import movieRouter from "./routes/movie.js";

export default function createServer() {
  const app = express();

  app.use(express.json());

  app.use("/movies", movieRouter);

  return app;
}
