import { Router } from "express";

export function MoviesApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const movies = await mongoDatabase
      .collection("movies")
      .find()
      .sort({
        metacritic: -1,
      })
      .map(
        ({
          title,
          year,
          plot,
          genres,
          poster,
          metacritic,
          fullplot,
          runtime,
          imdb,
          directors,
          languages,
        }) => ({
          title,
          year,
          plot,
          genres,
          poster,
          metacritic,
          fullplot,
          runtime,
          imdb,
          directors,
          languages,
        })
      )
      .limit(100)
      .toArray();
    res.json(movies);
  });

  router.post("/new", (req, res) => {
    const { title } = req.body;
    const result = mongoDatabase.collection("movies").insertOne({ title });
    res.sendStatus(500);
  });

  return router;
}
