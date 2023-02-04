<template>
    <!-- <div class="movie-detail">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.release_date }}</p>
        <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title + ' poster'"/>
        <p>{{ movie.overview }}</p>
    </div> -->
    <div class="movie-banner">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" :alt="movie.title + ' poster'" class="movie-backdrop"/>
        <div class="movie-poster">
            <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" :alt="movie.title + ' poster'"/>
        </div>
        <div class="movie-detail">
            <div class="movie-text">
                <h2>{{ movie.title }}</h2>
                <h4>{{ movie.tagline }}</h4>
                <div v-for="genre in genres" :key="genre.id" class="movie-genres">
                    <span v-if="genres.indexOf(genre) !== genres.length - 1" class="genre-name"><i>{{ genre.name }}, </i></span>
                    <span v-else class="genre-name"><i>{{ genre.name }}</i></span>
                </div>
                <div class="movie-datetime">
                    <span><uil-clock class="icon"/>{{ movie.runtime }} mins</span>
                    <span><uil-schedule class="icon"/>{{ year }}</span>
                    <span><uil-star class="icon"/>{{ rating }}</span>
                </div>
                
                <p>{{ movie.overview }}</p>
            </div>
        </div>
    </div>

    <div class="movie-detail">

    </div>
</template>
<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env';
import '@/assets/styles/variables.css';
import { UilClock, UilSchedule, UilStar } from '@iconscout/vue-unicons';

export default {

    components: {
        UilClock,
        UilSchedule,
        UilStar,
    },

    setup() {
        const movie = ref({});
        const route = useRoute();
        const genres = ref([]);
        const year = ref("");
        const rating = ref("")

        onBeforeMount(() => {
            fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}&language=en-US`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    movie.value = data  // returns a Movie object
                    genres.value = movie.value.genres;
                    year.value = movie.value.release_date.slice(0, 4);
                    rating.value = movie.value.vote_average.toFixed(1);
                })
        });

        return {
            movie,
            route,
            genres,
            year,
            rating
        }
    }   
}
</script>
<style lang="scss">

    .movie-banner {
        position: relative;
        width: 100%;
        min-height: 91vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, rgba(181, 180, 180, 0.2), 30%, rgba(0, 0, 0, 0.7));

        .movie-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        .movie-detail {
            display: flex;
            justify-content: flex-start;
            width: 80%;

            .movie-text {
                color: white;
                margin-left: 40px;
                height: 100%;
                position: relative;
                bottom: 60px;

                h2 {
                    font-size: 60px;
                    font-weight: 600;
                    margin-bottom: 7px;
                    max-width: 60%;
                    line-height: 100%;
                }

                h4 {
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 15px;
                    letter-spacing: 2px;
                }

                .movie-genres {
                    display: inline;

                    .genre-name {
                        font-size: 17px;
                        font-weight: 300;
                    }
                }

                .movie-datetime {
                    margin-top: 5px;
                    margin-bottom: 15px;
                    font-size: 14px;
                    font-weight: 300;
                    display: flex;
                    column-gap: 15px;

                    span {
                        .icon {
                            margin-right: 4px;
                            font-size: 14px;
                            position: relative;
                            top: 2px;
                        }
                    }
                }

                p {
                    max-width: 50%;
                    font-weight: 200;
                    font-size: 16px;
                    letter-spacing: 1px;
                }
            }
        }

        .movie-poster {
            position: relative;
            width: 400px;
            height: auto;
            margin-left: 120px;

            img {
                width: 100%;
                border-radius: 20px;
            }
        }
    }

</style>