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

    
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style lang="scss">
.home {
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
}

</style>
