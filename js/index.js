import { getNowPlaying, getUpcomingMovies } from './api.js'
import { drawNowPlaying, drawUpcomingMovies } from './draw.js';

 const  init = async()=> {
    const nowPlaying = await getNowPlaying()
    const upcomingMovies = await getUpcomingMovies()
    
    drawNowPlaying(nowPlaying.results)
    drawUpcomingMovies(upcomingMovies.results)
}
init();
