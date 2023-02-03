<template>
  <div class="home">
    
    <form @submit.prevent="searchMovies()" class="search-bar">
      <input type="text" placeholder="What are you looking for ?" v-model="searchText"/>
      <button type="submit">
        <uil-search class="search-icon"/>
      </button>
    </form>

    <div class="movie-list">
      <div class="movie">
        <router-link :to="'/movie/'" class="movie-link">
          <div class="movie-img">
            <img :src="`https://image.tmdb.org/t/p/original/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg`" />
            <div class="movie-rating">5.8</div>
          </div>
          <div class="movie-detail">
            <p class="movie-year">2022-02-01</p>
            <h3>Avenger</h3>
          </div>
        </router-link>
      </div>
    </div>

    <!-- <div class="movie-list">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          <div class="movie-img">
            <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title + ' poster'" />
            <div class="movie-type">{{ movie.vote_average }}</div>
          </div>
          <div class="movie-detail">
            <p class="movie-year">{{ movie.release_date }}</p>
            <h3>{{ movie.title }}</h3>
          </div>
        </router-link>
      </div>
    </div> -->

  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import env from '@/env';
import { UilSearch } from '@iconscout/vue-unicons'

export default {

  components : {
    UilSearch
  },

  setup() {
    const searchText = ref("");
    const movies = ref([]);

    const searchMovies = () => {
      if (searchText.value != "") {
        // FETCH FROM API 
        // FIX THIS : NEED TO HANDLE ERROR (MOVIE NOT FOUND PRINT ON SCREEN PROBABLY IS V-IF)
        // fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${searchText.value}`)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&language=en-US&page=1&include_adult=false&query=${searchText.value}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            movies.value = data.results.filter(movie => movie.poster_path !== null && movie.backdrop_path !== null)  // returns an Array of movies 
            searchText.value = ""  // reset the search field
          })
      }
    }

    return {
      searchText, 
      movies,
      searchMovies
    }
  }
}

</script>

<style lang="scss">

.home {


  // SEARCH BAR 
  .search-bar {
    position: relative;
    left: 32%;
    margin-top: 200px;
    width: 100%;
    max-width: 700px;
    background: var(--search-bar-color);
    display: flex;
    align-items: center;
    border-radius: 60px;
    padding: 10px 20px;
    
    input {
      background: transparent;
      flex: 1;
      border: none;
      appearance: none;
      outline: none;
      padding: 24px 20px;
      font-size: 23px;
      color: var(--search-bar-text);

      &::placeholder {
        color: var(--search-bar-placeholder)
      }
    }

    button {
      border: none;
      outline: none;
      text-align: center;
      background: var(--search-icon-background);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      cursor: pointer;
    
      .search-icon {
        font-size: 25px;
        color: var(--search-bar-placeholder);
      }
    }

  }


  // MOVIE LIST 
  .movie-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 80px 8px;
    max-height: 75%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .movie {
      max-width: 30%;
      flex: 1 1 30%;
      padding: 16px 8px;

      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;

        .movie-img {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 300px;
            object-fit: cover;
          }

          .movie-rating {
            position: absolute;
            padding: 8px 16px;
            background-color: green;
            color: white;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }

        .movie-detail {
          background-color: black;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;

          .movie-year {
            color: white;
            font-size: 14px;
          }

          h3 {
            color: white;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }

}

</style>
