import { getNowPlaying, getUpcomingMovies } from "./api.js";
import { drawNowPlaying, drawUpcomingMovies } from "./draw.js";

const loader = document.querySelector(".loader");
const articleContainer = document.querySelector(".article-container");

const init = async () => {
  const nowPlaying = await getNowPlaying();
  const upcomingMovies = await getUpcomingMovies();
  setTimeout(loading(), 1000);
  drawNowPlaying(nowPlaying.results);
  drawUpcomingMovies(upcomingMovies.results);
};

const loading = () => {
  loader.style.display = "none";
};

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  console.log("unload");
  articleContainer.style.display = "none";
});

init();
