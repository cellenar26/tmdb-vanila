import { getData } from './api.js'
import { drawImg } from './draw.js';

 const  init = async()=> {
  console.log("index.html and index.js init");
    const now = await getData()
    console.log("now : ", now)
    drawImg(now.results)
}
init();
