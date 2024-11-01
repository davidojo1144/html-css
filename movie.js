const API_KEY = "api_key=98b734a8c910161a188bbfe8628094eb";
const BASE_URL = "https://api.themoviedb.org/3/";
const SEARCHMOVIEURL = `${BASE_URL}search/movie?${API_KEY}`;
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";



const movieMainContainer = document.querySelector(".movieMainContainer");
console.log(movieMainContainer)
//https://image.tmdb.org/t/p/w500





console.log(API_URL)


// const getMovie = (url) =>{
//     fetch(url)
//     .then((Response)=> Response.json())
//     .then((data)=> {
//         console.log(data)
//     })
//     .catch((error)=> console.log(error))
// }



const getMovie = async (url)=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results)
        showMovie(data.results)
    } catch(error){
        console.log(error)
    }

}


getMovie(API_URL)


// function showMovie(movies){
//     movies.forEach(movie => {
//     const {overview, title, vote_average, poster_path} = movie
//     console.log(vote_average)
//     });
// }

function showMovie(movies){
   movieMainContainer.innerHTML = ' ';

    movies.forEach(movie => {
    const {overview, title, vote_average, poster_path} = movie;
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `

         <img src = "${IMAGE_URL}${poster_path}">
       
         <div class = "titlerating">
            <div class = "own">
            <span>${title}</span>
            <span>${vote_average}</span>
            </div>
        </div>
        <div class = "overview">
            <h2>Overview</h2>
            <p>${overview} </p>
        </div>
    </div>
    `
    movieMainContainer.appendChild(movieElement)
    });

}



const searchMovieForm = document.querySelector('.search');

searchMovieForm.addEventListener('keyup', (event)=>{
    event.preventDefault();
    const inputValue = event.target.value
    if (inputValue){
        const searchUrl = SEARCHMOVIEURL +  "&query="  +  inputValue
        console.log(searchUrl)
        getMovie(searchUrl)
    }
    else {
        getMovie(API_URL)
    }
})

