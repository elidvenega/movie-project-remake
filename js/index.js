// API variables with keys
const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f2342a6e3901fac463896c0b0839dad9&page=1";
const IMG = "https://image.tmdb.org/t/p/w1280";
const SEARCH =
  "https://api.themoviedb.org/3/search/movie?&api_key=f2342a6e3901fac463896c0b0839dad9&query=";

// variables from the DOM
const form = document.getElementById("form");
const searchID = document.getElementById("search");
const searchClass = document.getElementsByClassName("search");
const main = document.getElementById("main");

/* Function to fetch data */
const getMovies = function (api) {
  fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.results);
      data.results.forEach((element) => {
        // creating elements for movies
        const el = document.createElement("div");
        const image = document.createElement("img");

        image.src = IMG + element.poster_path;
        el.appendChild(image);

        main.appendChild(el);
      });
    });
};

// const getMovies = async function (api) {
//   const apiFetch = await fetch(api);
//   const resp = await resp.json();
//   then((data) => {
//     console.log(data.results);
//     data.results.forEach((element) => {
//       // creating elements for movies
//       const el = document.createElement("div");
//       const image = document.createElement("img");

//       image.src = IMG + element.poster_path;
//       el.appendChild(image);

//       main.appendChild(el);
//     });
//   });
// };

getMovies(API);

/* Event lisener to filter throug data */
// retieve data and append to form
// research event listeners
// google how to add data
// Make best attemp to fix this

// searches for movie
// look up preventDefault
// The preventDefault() method cancels the event if it is cancelable
/* 
Briefly:

All the elements which allow a user to type something in or select something, have a value property with js. */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchTerm = search.value;

  // if (searchTerm) {
  //   getMovies(SEARCH + searchTerm);
  //   search.value = "";
  // }

  // terniary operator shorter syntax
  searchTerm ? getMovies(SEARCH + searchTerm) : (search.value = "");
});
