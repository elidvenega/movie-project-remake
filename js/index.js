/* 4 Steps to solve any problem
1.Make sure you 100% understand the problem. ask the right questions
to get a clear picture of the problem.
 -Get API Data and successfully output to the DOM
 2.Divide and conquer: Break a big problem into smaller sub-problems
3.Don't be afraid to do as much research as you have to
4.For bigger problems, write pseudo-code
before writing the actual code.
 */

/* Variables with data and variables that get the DOM */
//API key and variables
const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f2342a6e3901fac463896c0b0839dad9&page=1";
const IMGP = "https://image.tmdb.org/t/p/w1280";
const SEARCH =
  "https://api.themoviedb.org/3/search/movie?&api_key=f2342a6e3901fac463896c0b0839dad9&query=";

// variables from the DOM
const form = document.getElementById("form");
const searchID = document.getElementById("search");
const searchClass = document.getElementsByClassName("search");
const main = document.getElementById("main");

/* Function to fetch data */
const getData = function (api) {
  fetch(api)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
  // create a loop to get content and append it to #main div
  data.forEach((element) => {});
};

getData(API);

/* Event lisener to filter throug data */
