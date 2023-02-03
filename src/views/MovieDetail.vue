<template>
    <div class="movie-detail">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.release_date }}</p>
        <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" :alt="movie.title + ' poster'"/>
        <p>{{ movie.overview }}</p>
    </div>
</template>
<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env';

export default {
    setup() {
        const movie = ref({});
        const route = useRoute();

        onBeforeMount(() => {
            // fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
            fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}&language=en-US`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    movie.value = data  // returns a Movie object
                })
        });

        return {
            movie,
            route
        }
    }   
}
</script>
<style lang="scss">
    
    .movie-detail {
        padding: 16px;

        h2 {
            color: rgb(18, 100, 126);
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        img {
            display: block;
            max-width: 200px;
            margin-bottom: 16px;
        }

        p {
            color: rgb(142, 73, 9);
            font-size: 18px;
            line-height: 1.4;
        }
    }
</style>