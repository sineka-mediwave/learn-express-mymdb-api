const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.middleware");
const { movieSchema } = require("../validations/movie.schema");

const {
  getAllMoviesController,
  addMovieController,
  updateMovieController,
  deleteMovieController,
  getMovieController,
} = require("../controllers/movie.controller");

// READ
router.get("/", getAllMoviesController);
router.get("/:id", getMovieController);
// CREATE
router.post("/", validate(movieSchema), addMovieController);

// UPDATE
router.put("/:id", validate(movieSchema), updateMovieController);

// DELETE
router.delete("/:id", deleteMovieController);

module.exports = router;
