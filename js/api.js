export async function getData() {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=17f63f0af9afb30432061e00d90f277a&language=ko";
      const response =await fetch(url)
    // console.log(response)
    const responseJsoned = await response.json()
    console.log(responseJsoned)
    
  }

function init() {
    console.log('api')
    getData()
}

export function test(a, b) {
    console.log('test called')
    return a+b
}

