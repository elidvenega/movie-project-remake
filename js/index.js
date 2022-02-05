// API variables with keys
const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f2342a6e3901fac463896c0b0839dad9&page=1";
const IMG = "https://image.tmdb.org/t/p/w1280";
const SEARCH =
  "https://api.themoviedb.org/3/search/movie?&api_key=f2342a6e3901fac463896c0b0839dad9&query=";

// variables from the DOM
const form = document.querySelector("#form");
const searchID = document.querySelector("#search");
const searchClass = document.querySelectorAll(".search");
const main = document.querySelector("#main");

/* Function to fetch data */
const getMovies = async function (api) {
  try {
    const apiFetch = await fetch(api);
    const moviesInfo = await apiFetch.json();
    moviesInfo.results.forEach((element) => {
      // creating elements for movies
      const el = document.createElement("div");
      const image = document.createElement("img");

      image.src = IMG + element.poster_path;
      el.appendChild(image);

      main.appendChild(el);
    });
  } catch (error) {
    console.log("error", error);
  }
};

// invoke function
getMovies(API);

//All the elements which allow a user to type something in or select something,
//have a value property with js.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchTerm = search.value;
  searchTerm ? getMovies(SEARCH + searchTerm) : (search.value = "");
});
