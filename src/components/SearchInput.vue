<template>
  <div class="search-form-container">
    <img alt="" src="../assets/search.png" class="search" />
    <input
      type="search"
      class="search-input"
      placeholder="Search for an album... |"
      v-model="searchValue"
      @change="searchFor"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SearchInput",
  data: () => ({
    searchValue: "",
  }),
  methods: {
    searchFor() {
      this.$emit("searchInput", this.searchValue);
      this.$emit("switchView");
    },
  },
  emits: ["searchInput", "switchView"],
});
</script>

<style>
@import "../assets/base.css";
.search-form-container {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.search {
  position: absolute;
  margin-left: 1.7rem;
  width: 1rem;
}

.search-input {
  padding: 1.5rem 3rem;
  border-radius: 50px;
  color: #868686;
  border: 1px solid rgba(0, 0, 0, 0.13);
  width: 100%;
  max-width: 380px;
}

:-ms-input-placeholder {
  color: #868686;
}

::-webkit-input-placeholder {
  color: #868686;
}

@media only screen and (max-width: 1024px) {
  .search-input {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }
}

@media only screen and (max-width: 768px) {
  .search {
    position: absolute;
    margin-left: 1.3rem;
    width: 1rem;
  }

  .search-form-container {
    max-width: 380px;
  }

  .search-input {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    color: #868686;
    border: 1px solid rgba(0, 0, 0, 0.13);
    width: 100%;
    max-width: 380px;
  }
}
</style>
