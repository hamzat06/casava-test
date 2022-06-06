<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
}>();

const attachImage = (img: string) => {
  return `background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb5fMw2UHXHnnNcW6t2Dpa7A_Ubc-9sTvEA&usqp=CAU')`;
}
</script>

<template>
  <div :style="attachImage(image)" class="album-card">
    <div class="container flex justify-between items-center">
      <div class="block">
        <h5>Gifted</h5>
        <p>Beyonce</p>
      </div>
      <div>
        <img alt="" src="../assets/line.png" class="line" />
      </div>
      <div class="play-container">
        <img alt="" src="../assets/play.png" class="play" />
      </div>
    </div>
  </div>
</template>

<style>
.album-card {
  border: 1px solid #eee;
  max-width: 400px;
  max-width: 400px;
  color: white;
}

.album-card h5 {
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.album-card p {
  font-weight: 450;
  margin: 0;
}

.play-container {
  height: 100%;
  background-color: red;
}

.line {
  max-width: 120px;
  margin-left: -1rem;
}

.play {
  width: 2.5rem;
}
</style>