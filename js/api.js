const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "17f63f0af9afb30432061e00d90f277a";
const language = "ko";

export const getData = async () => {
  const url = `${baseUrl}movie/now_playing?api_key=${apiKey}&language=${language}`;
  const response = await fetch(url);

  const responseJsoned = await response.json();

  return responseJsoned;
};
