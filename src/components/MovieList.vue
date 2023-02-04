<template>
    <div class="movie-list">
      <div class="movie-card" v-for="movie in movies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          <div class="movie-poster">
            <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" :alt="movie.title + ' poster'" />
          </div>
          <div class="movie-detail">
            <h3>{{ movie.title }}</h3>
            <div class="movie-ratings">
              <span>{{ movie.vote_average }}</span><uis-star class="star-icon"/>
            </div>
            <p v-if="movie.overview !== ''">{{ movie.overview }}</p>
            <p v-else>Click to see more details</p>
          </div>
        </router-link>
      </div>
    </div>
</template>
<script>

import { UisStar } from '@iconscout/vue-unicons-solid';
export default {

  props: ['movies'],

  components: {
    UisStar,
  },

}
</script>
<style lang="scss">
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
        bottom: -78px;
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
        .movie-ratings {
          margin-bottom: 15px;
        }
        span {
          color: var(--movie-card-text-color);
          font-weight: 400;
          font-size: 18px;
        }
        
        p {
          color: var(--movie-card-text-color);
          font-weight: 200;
          font-size: 14px;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .star-icon {
          color: yellow;
          margin-left: 4px;
          padding-top: 2.3px;
        }
      }
    }
  }
</style>