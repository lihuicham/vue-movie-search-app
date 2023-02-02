<template>
  <div class="home">
    <div class="featured-card">
      <router-link to="/movie/tt0409591">
        <img src="@/assets/avatar-poster.avif" alt="Avatar Poster" class="featured-img"/>
        <div class="featured-detail">
          <h3>Avatar : The Way of Water (2022)</h3>
          <p>
            Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. 
            Once a familiar threat returns to finish what was previously started, 
            Jake must work with Neytiri and the army of the Na'vi race to protect their home.
          </p>
        </div>
      </router-link>
    </div>
    
    <form @submit.prevent="searchMovies()" class="search-box">
      <input type="text" placeholder="What are you looking for ?" v-model="searchText"/>
      <input type="submit" value="Search">
    </form>

    <div class="movie-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="movie-img">
            <img :src="movie.Poster" :alt="movie.Title + ' poster'" />
            <div class="movie-type">{{ movie.Type }}</div>
          </div>
          <div class="movie-detail">
            <p class="movie-year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
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

export default {
  setup() {
    const searchText = ref("");
    const movies = ref([]);

    const searchMovies = () => {
      if (searchText.value != "") {
        // FETCH FROM API 
        // FIX THIS : NEED TO HANDLE ERROR (MOVIE NOT FOUND PRINT ON SCREEN PROBABLY IS V-IF)
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${searchText.value}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            movies.value = data.Search  // returns an Array of movies 
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

  // FEATURED CARD 
  .featured-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 600px;
      object-fit: fill;
      position: relative;
      z-index: 0;
    }

    .featured-detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 25px;
      z-index: 1;

      h3 {
        color: white;
        margin-bottom: 16px;
      }

      p {
        color: white;
      }
    }
  }

  // SEARCH BOX
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: white;
        background-color: #98b9dc;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 10px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #e7e3e3;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: rgb(169, 114, 42);
        padding: 16px;
        border-radius: 10px;
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        cursor: pointer;
      }

      &:active {
        opacity: 0.6;
      }
    }
  }

  // MOVIE LIST 
  .movie-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0px 8px;

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

          .movie-type {
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
