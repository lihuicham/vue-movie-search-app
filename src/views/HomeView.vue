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
    
    <form @submit.prevent="" class="search-box">
      <input type="text" placeholder="What are you looking for ?"/>
      <input type="submit" value="Search">
    </form>


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
}

</style>
