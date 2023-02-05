<template>
  <div class="home">
    <div class="logo">
      <h2>MovieGo</h2>
      <img :src="require('@/assets/logo.png')"/>
    </div>
    
    <form class="search-bar" @submit.prevent="searchMovies">
      <input type="text" placeholder="What are you looking for ?" v-model="searchText"/>
      <button type="submit">
        <uil-search class="search-icon"/>
      </button>
    </form>

    <MovieList :movies="movies" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from 'vue';
import env from '@/env';
import LocalDB from '@/assets/js/LocalDB';
import MovieList from '@/components/MovieList.vue';
import { UilSearch } from '@iconscout/vue-unicons';

export default {
  components : {
    MovieList,
    UilSearch,
  },
  setup() {
    const searchText = ref("")
    const movies = ref([]);
    const localDB = new LocalDB();
    onMounted(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&language=en-US&page=1&include_adult=false&query=${localDB.get('search')}`)
        .then(response => response.json())
        .then(data => {
          movies.value = data.results.filter(movie => movie.poster_path !== null && movie.backdrop_path !== null)  // returns an Array of movies
          searchText.value = ""  // reset the search field
        })
    });
    const searchMovies = () => {
      localDB.set('search', searchText.value)
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&language=en-US&page=1&include_adult=false&query=${localDB.get('search')}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          movies.value = data.results.filter(movie => movie.poster_path !== null && movie.backdrop_path !== null)  // returns an Array of movies
          searchText.value = ""  // reset the search field
      })
    }
    
    return {
      searchText, 
      movies,
      localDB,
      searchMovies,
    }
  }
}
</script>

<style lang="scss">
.home {
  // LOGO 
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 42%;
    width: 250px;
    height: 250px;
    h2 {
      color: white;
      font-size: 60px;
      position: relative;
      top: 15px;
      right: 15px;
    }
    img {
      width: 70%;
      max-width: 500px;
    }
  }
  // SEARCH BAR 
  .search-bar {
    position: relative;
    left: 30%;
    width: 100%;
    margin-top: -20px;
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
}
</style>