<template>
  <div id="hero">
    <div class="container hero-1" v-if="variant === 'type2'">
      <img src="/back.png" class="back" alt="" @click="$emit('switch-View1')" />
      <h1 class="mb-5">
        Albums <br />
        matching "{{ searchFor || "_" }}"
      </h1>
      <SearchInput @searchInput="searchForKeys" />
    </div>
    <div class="container grid cols-2 gap" v-else>
      <div class="mb-5">
        <h1>Don’t stop the groove.</h1>
        <h5>Find new music you love with a search</h5>
        <SearchInput
          @searchInput="searchForKeys"
          @switchView="$emit('switch-View')"
        />
      </div>
      <div>
        <div class="hero-img-container">
          <img alt="" src="/hero.jpg" class="hero-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "./SearchInput.vue";

export default defineComponent({
  name: "HeroComponent",
  data: () => ({
    searchFor: "",
  }),
  components: { SearchInput },
  props: {
    variant: String,
  },
  methods: {
    searchForKeys(data: string) {
      // this.$emit("searchedInput", data);
      this.searchFor = data;
    },
  },
  emits: ["switch-View", "searchedInput", "switch-View1"],
});
</script>

<style scoped>
@import "../assets/base.css";
#hero .container {
  padding: 0 2rem;
  align-items: center;
}

#hero .hero-img {
  width: 100%;
  margin: 0 auto;
}

#hero h1 {
  letter-spacing: -0.3rem;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 4.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
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

@media only screen and (max-width: 1024px) {
  #hero h1 {
    font-size: 3.5rem;
    line-height: 3rem;
  }

  .hero-img-container {
    margin: 0 auto;
  }
}

@media only screen and (max-width: 768px) {
  #hero .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #hero .hero-1.container {
    display: block
  }

  #hero .hero-img {
    max-width: 550px;
    margin: 0 auto;
    margin-top: 2rem;
  }

  #hero h1 {
    text-align: center;
  }

  #hero h5 {
    text-align: center;
    line-height: 1.5rem;
  }
}

@media only screen and (max-width: 576px) {
  #hero h1 {
    font-size: 3rem;
    text-align: center;
  }

  #hero h5 {
    text-align: center;
  }
}
</style>
