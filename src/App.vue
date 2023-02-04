<template>
  <header>
    <div class="header-container">
      <router-link to="/">
        <h1>MovieGo</h1>
      </router-link>
      <a href="https://github.com/lihuicham/vue-movie-search-app" target="_blank">
        <span class="source">Source</span><uil-github class="github-icon"/>
      </a>
    </div>
  </header>

  <main>
    <router-view></router-view>
  </main>
  
</template>

<script>
import { UilGithub } from '@iconscout/vue-unicons'

  export default {
    components: {
      UilGithub,
    }
  }


</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import '@/assets/styles/variables.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

}

body {
  background-color: var(--dark-background);
}

header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 30px;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
  }
}

a {
  text-decoration: none;
  color: white;

  .source {
    margin-right: 5px;
  }

  .github-icon {
    font-size: 20px;
    position: relative;
    top: 4px;
  }
}


h1:hover,
a:hover {
  color: var(--search-bar-text)
}

</style>
