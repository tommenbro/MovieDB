import { Router } from "express";

export function MoviesApi() {
  const router = new Router();

  router.get("/", (req, res) => {
    res.json([
      {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.2,
        plot: "Two imprisoned mice in a small prison",
      },
      {
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      },
    ]);
  });
  router.post("/new", (req, res) => {
    res.sendStatus(500);
  });

  return router;
}
