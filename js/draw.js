const articleMovieNow= document.querySelector('.movie-now')
const baseImgUrl = "https://image.tmdb.org/t/p/"
const imgSize = "w500/"

export const drawImg = (arr) => {
    
    console.log(arr)
    
    // classname: movie-now
    console.log(articleMovieNow)
    
    const nowArr = arr;
    for (let i = 0; i<nowArr.length; i++) {
        let img = document.createElement('img')
        let title = document.createElement('h3')
        let div = document.createElement('div', )
        div.classList.add('container')
        let section = document.createElement('section')

        
        img.src = `${baseImgUrl}${imgSize}${nowArr[i].poster_path}`
        // title.innerHTML(`${nowArr[i].original_title}`)
        // title.innerText('title')
        title.innerHTML = "title"
        div.appendChild(img)
        div.appendChild(title)
        
        section.appendChild(div)
        
        articleMovieNow.appendChild(section)
    }
    
}

