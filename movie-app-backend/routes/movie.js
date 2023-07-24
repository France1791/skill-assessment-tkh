import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

router.get("/", async (_request, response) => {
  //There is a keyword missing here so that the function can wait for data and then send back as a request
  const movies = prisma.movies.findMany();

  //Attach the status method before .json with it set to 200 and a success property above the movies property on line 12
  response.json({
    movies,
  });
});

router.post("/", async (request, response) => {
  try {
    const newMovie = await prisma.movies.create({
      data: {
        title: request.body.title,
        directorName: request.body.directorName,
        company: request.body.company,
      },
    });

    //Attach the status method before .json with it set to 200 and a success property above the movies property on line 28
    response.json({
      newMovie,
    });
    //Add better error handling in case adding a movie does not work. Use status codes and a json body with success set to false.
  } catch (e) {}
});

export default router;
