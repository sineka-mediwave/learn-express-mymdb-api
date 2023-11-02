# mymdb api in express

```
nvm use
npm i
npm start
```

## getMovie with id

with id finding the single movie

```routes points to index.js
router.get("/:id", getMovieController);

```

```
const getMovieController = (req, res, next) => {
  const movie = getMovie({ id: req.params.id });
  if (!movie) {
    return next({
      status: 400,
      message: "Movie not found",
    });
  }
  res.send(movie);
};
```

```db.js
const getMovie = ({ id }) => {
  const idx = movies.findIndex((m) => m.id == id);
  if (idx === -1) {
    return null;
  }
  const movie = movies[idx];
  return movie;
};
```
