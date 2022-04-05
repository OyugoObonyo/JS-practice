// Understanding APIs in JS
const endpoint = 'https://api.tvmaze.com'

const searchByTitle = async (title) => {
    const movies = await axios.get(`${endpoint}/search/shows?q=${title}`)
    return(movies.data)
}

let title = prompt('Please fill in your movie title')
let movies = searchByTitle(title)
for(let movie of movies){
    console.log(movie)
}