<script setup lang="ts"></script>

<template>
  <div class="search-form-container">
    <img alt="" src="../assets/search.png" class="search" />
    <input
      type="search"
      class="search-input"
      placeholder="Search for an album... |"
    />
  </div>
</template>

<style>
.search-form-container {
  display: flex;
  align-items: center;
}

.search {
  position: absolute;
  margin-left: 1.7rem;
  width: 1rem;
}

.search-input {
  padding: 1rem 3rem;
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
</style>
