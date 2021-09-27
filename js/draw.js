const sectionNowPoster = document.querySelector(".now-poster");
const sectionUpcomingPoster = document.querySelector(".upcoming-poster");

const baseImgUrl = "https://image.tmdb.org/t/p/";
const imgSize = "original/";

const youtubeBaseUrl = "https://www.youtube.com/results?search_query=";
let youtubeQuery = "";

export const drawNowPlaying = (arr) => {
  const nowArr = arr;
  for (let i = 0; i < nowArr.length; i++) {
    let aTitle = document.createElement("a");
    youtubeQuery = encodeURIComponent(`${nowArr[i].title}`);
    aTitle.style.backgroundImage = `url(${baseImgUrl}${imgSize}${nowArr[i].poster_path})`;
    aTitle.href = `${youtubeBaseUrl}${youtubeQuery}`;
    aTitle.target = "_blank";
    aTitle.classList.add('poster-img')
    sectionNowPoster.appendChild(aTitle);

  }
};

export const drawUpcomingMovies = (arr) => {
  const nowArr = arr;
  for (let i = 0; i < nowArr.length; i++) {
    let aTitle = document.createElement("a");
    youtubeQuery = encodeURIComponent(`${nowArr[i].title}`);
    aTitle.style.backgroundImage = `url(${baseImgUrl}${imgSize}${nowArr[i].poster_path})`;
    aTitle.href = `${youtubeBaseUrl}${youtubeQuery}`;
    aTitle.target = "_blank";
    aTitle.classList.add('poster-img')
    sectionUpcomingPoster.appendChild(aTitle);
  }
};
