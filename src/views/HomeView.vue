<template>
  <div class="home">
    
    <form @submit.prevent="searchMovies()" class="search-bar">
      <input type="text" placeholder="What are you looking for ?" v-model="searchText"/>
      <button type="submit">
        <uil-search class="search-icon"/>
      </button>
    </form>

    <div class="movie-list">
      <div class="movie-card" v-for="movie in movies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          <div class="movie-poster">
            <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" :alt="movie.title + ' poster'" />
          </div>
          <div class="movie-detail">
            <h3>{{ movie.title }}</h3>
            <div>
              <span>{{ movie.vote_average }}</span><uis-star class="star-icon"/>
            </div>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import env from '@/env';
import { UilSearch } from '@iconscout/vue-unicons';
import { UisStar } from '@iconscout/vue-unicons-solid';

export default {

  components : {
    UilSearch,
    UisStar,
  },

  setup() {
    const searchText = ref("");
    const movies = ref([]);

    const searchMovies = () => {
      if (searchText.value != "") {
        // FETCH FROM API 
        // FIX THIS : NEED TO HANDLE ERROR (MOVIE NOT FOUND PRINT ON SCREEN PROBABLY IS V-IF)
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
      searchMovies,
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

  // MOVIE 

  .movie-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    max-height: 75%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .movie-card {
      flex: 1 1 33.33%;
      position: relative;
      background-color: transparent;
      border-radius: 20px;
      overflow: hidden;

      .movie-poster {
        position: relative;
        overflow: hidden;

        img {
          width: 100%;
          transition: 0.5s;
        }

        &::before {
          content: '';
          position: absolute;
          bottom: -170px;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, var(--card-overlay-color) 50%, transparent);
          transition: 0.5s;
          z-index: 1;
        }
      }

      &:hover {
        .movie-poster::before {
          bottom: 0px;
        }

        .movie-poster {
          img {
            transform: translateY(-50px);
            filter: blur(3px);
          }
        }

        .movie-detail {
          bottom: 8px;
        }

      }

      .movie-detail {
        position: absolute;
        bottom: -130px;
        left: 0;
        padding: 20px;
        width: 100%;
        z-index: 2;
        transition: 0.5s;

        h3 {
          color: white;
          font-weight: 500;
          font-size: 28px
        }

        span {
          color: var(--movie-card-text-color);
          font-weight: 400;
          font-size: 15px;
        }
        
        p {
          color: var(--movie-card-text-color);
          font-weight: 200;
          margin-top: 15px;
          font-size: 14px;
        }

        .star-icon {
          color: yellow;
          margin-left: 4px;
          padding-top: 2.3px;
        }
      }

    }

  }

}


</style>
