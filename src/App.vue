<script setup lang="ts">
import HeroComponent from "./components/HeroComponent.vue";
import AlbumCard from "./components/AlbumCard.vue";
</script>

<template>
  <div id="app">
    <header>
      <div class="container">
        <img alt="" src="./assets/groove.png" />
      </div>
    </header>

    <HeroComponent type="" />

    <section id="popular">
      <div class="container">
        <h3>Popular albums</h3>

        <div class="grid cols-3 gap-1">
          <AlbumCard title="" image="" />
          <AlbumCard title="" image="" />
          <AlbumCard title="" image="" />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import "./assets/base.css";

#popular h3 {
  font-size: 2rem;
  font-weight: 700;
}

#app {
  width: 100vw;
}
</style>
