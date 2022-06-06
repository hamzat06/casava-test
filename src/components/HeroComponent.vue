<script setup lang="ts">
import SearchInput from "./SearchInput.vue";

defineProps<{
  type: string;
}>();
</script>

<template>
  <div id="hero">
    <div class="container" v-if="type === 'type2'">
      <img src="../assets/back.png" class="back" alt="">
      <h1>
        Albums <br />
        matching "boys"
      </h1>
      <SearchInput />
    </div>
    <div class="container grid cols-2 gap" v-else>
      <div>
        <h1>Don’t stop the groove.</h1>
        <h5>Find new music you love with a search</h5>
        <SearchInput />
      </div>
      <div>
        <div>
          <img alt="" src="../assets/hero.jpg" class="hero-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/base.css";
#hero .container {
  padding: 0 2rem;
  align-items: center;
}

#hero .hero-img {
  width: 100%;
}

#hero h1 {
  letter-spacing: -0.3rem;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 4.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

#hero h5 {
  /* letter-spacing: -0.3rem; */
  font-weight: 450;
  color: #868686;
  font-size: 1.05rem;
  line-height: 1rem;
  margin-bottom: 2rem;
}

.back {
  width: 20px;
  margin-top: 2rem;
}
</style>
