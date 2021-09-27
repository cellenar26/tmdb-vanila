import { getNowPlaying, getUpcomingMovies } from './api.js'
import { drawNowPlaying, drawUpcomingMovies } from './draw.js';

const test = document.querySelector('.test')
const ac = document.querySelector('.article-container')



 const  init = async()=> {
     test.style.backgroundColor = 'white'
     test.style.zIndex = 15
     test.style.width = "100%"
    //  test.style.height = "100%"
    // ac.style.display = 'none'
    
    console.log(test)
    const nowPlaying = await getNowPlaying()
    const upcomingMovies = await getUpcomingMovies()
    
    drawNowPlaying(nowPlaying.results)
    drawUpcomingMovies(upcomingMovies.results)
}
init();

const loading = () => {
    //  로딩 창을 띄운다
    //  1초에 전역 카운트를 1씩 증가 시키는 함수를 호출한다.
    // 그 전역 카운트가 3이 되면 clear 실시
 
    
}