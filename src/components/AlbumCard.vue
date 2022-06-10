<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
  artiste: string;
}>();

const attachImage = (_img: string) => {
  return `background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb5fMw2UHXHnnNcW6t2Dpa7A_Ubc-9sTvEA&usqp=CAU')`;
};
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
@import "../assets/base.css";
.album-card {
  border: 1px solid #eee;
  width: 100%;
  max-width: 380px;
  height: 350px;
  color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
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

.album-card .container {
  width: 100%;
  text-align: center;
}

.play-container {
  height: 100%;
  align-items: flex-end;
}

.line {
  max-width: 120px;
  margin-left: -1rem;
}

.play {
  width: 2.5rem;
  position: relative;
  margin-bottom: -1rem;
}

@media only screen and (max-width: 1024px) {
  .album-card {
    width: 300px;
    height: 300px;
  }
}

@media only screen and (max-width: 992px) {
  .album-card {
    width: 250px;
    height: 250px;
  }
  .line {
    max-width: 100px;
  }
}

@media only screen and (max-width: 768px) {
  .album-card {
    width: 300px;
    height: 300px;
  }
  .line {
    max-width: 130px;
  }
}

@media only screen and (max-width: 576px) {
  .album-card {
    width: 250px;
    height: 250px;
  }
  .line {
    max-width: 100px;
  }
}
</style>
