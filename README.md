# vue-movie-search-app

## What is MovieGo ? 
MovieGo is a movie search web app built on Vue3.js framework. User can search for movies and view movie details. 
![]()

## Technologies used 
### API 
[The Movie Database (TMDB)](https://www.themoviedb.org/) [API (Version 3)](https://developers.themoviedb.org/3) is used for this project.  
### API Endpoints  
* [GET /search/movie : ](https://developers.themoviedb.org/3/search/search-movies) `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&page=1&include_adult=false`
* [Images : ](https://developers.themoviedb.org/3/getting-started/images)`https://image.tmdb.org/t/p/original/${movie.poster_path}`

### Tech Stack 
* App : Vue.js, SCSS, HTML5 
* Icons : IconScout 
## Instruction to run project locally 
1. Clone the repository `git clone https://github.com/lihuicham/vue-movie-search-app.git` to your preferred directory. 
2. `cd` to your directory. 
3. Run `npm install` at terminal to install dependencies. 
4. Run `npm run serve` at terminal to run the app locally `http://localhost:8080/` at your preferred browser. 

Note : You can run `npm run build` to build the app. 

## Design & Implementation 
### (A) Hover Animation

When hover over movie card, brief information about the movie item will slide up (from bottom) with a 0.5s transition. A black-coloured overlay is applied on the card to create to contrast the white words and the movie card image will go blur.  

<br>

![demo-img1](./src/assets/README-assets/demo-img1.png)

### (B) Dynamic movie details page

- Background image (`movie.backdrop_path`) and movie poster (`movie.poster_path`) are retrieved from API image endpoints. Images are high quality and non-compressed. 
- Movie details such as ratings and genres are pre-processed (rounding up and mapping) before displaying on app. This ensures complex data to be easily interpreted by user. 
- A back button (`router.go(-1)`) at the top left corner allows back navigation.  

<br>

![demo-img2](./src/assets/README-assets/demo-img2.png)

### (C) Search results is retained between page navigation 
The search results (a list of movies) are kept in browser's local storage (see `LocalDB.js`). Users can continue browsing their search result after navigating back from the movie details page. 

<br>

## Connect with Li Hui
[Personal Website](https://www.lihuicham.com/) | [LinkedIn](https://www.linkedin.com/in/lihuicham/) | [GitHub](https://github.com/lihuicham) | [Medium](https://medium.com/@lihuicham)
