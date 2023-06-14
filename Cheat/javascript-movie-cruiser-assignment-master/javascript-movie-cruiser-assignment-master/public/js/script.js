let allMovies = [];
let allFavorites = [];

// Function to get movies list.
async function getMovies() {
  const res = await fetch("http://localhost:3000/movies");
  const data = await res.json();
  allMovies = data;
  const moviesList = document.getElementById("moviesList");
  moviesList.innerHTML = "";
  data.forEach((movie) => {
    const movieItem = document.createElement("li");
    const addFavouriteBtn = document.createElement("button");
    movieItem.innerHTML = movie.title;
    addFavouriteBtn.innerText = "Add to Favourites";
    addFavouriteBtn.addEventListener("click", function () {
      addFavourite(movie.id);
    });
    movieItem.appendChild(addFavouriteBtn);
    moviesList.appendChild(movieItem);
  });
  return data;
}

// Function to get list of favourite movies.
async function getFavourites() {
  const res = await fetch("http://localhost:3000/favourites");
  const data = await res.json();
  allFavorites = data;
  const favouritesList = document.getElementById("favouritesList");
  favouritesList.innerHTML = "";
  data.forEach((favourite) => {
    const movieItem = document.createElement("li");
    movieItem.innerHTML = favourite.title;
    favouritesList.appendChild(movieItem);
  });
  return data;
}

// Function to add the movie into the favourite movies.
async function addFavourite(id) {
  const movie = allMovies.find((item) => item.id == id);
  if (allFavorites.some((item) => item.id == id))
    throw new Error("Movie is already added to favourites");
  const response = await fetch("http://localhost:3000/favourites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  const data = await response.json();
  const favouritesList = document.getElementById("favouritesList");
  const movieItem = document.createElement("li");
  movieItem.innerHTML = movie.title;
  favouritesList.appendChild(movieItem);
  allFavorites.push(movie);
  return allFavorites;
}

module.exports = {
  getMovies,
  getFavourites,
  addFavourite,
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution
