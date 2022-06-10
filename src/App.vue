<script setup lang="ts">
import { onMounted, ref } from "vue";
import HeroComponent from "./components/HeroComponent.vue";
import AlbumCard from "./components/AlbumCard.vue";
// import { Credentials } from "./credentials";
// import axios from "axios";
// import { computed } from "@vue/reactivity";

// const spotify = Credentials();
// const token = ref("");
// const loader = ref(false)
// const filteredAlbums = ref("");
// const searchedKeywords = ref("");
const currentView = ref("view1");
const searching = ref("");

// onMounted(() => {
//   fetchData();
// });

// function searchedKeys(data: string) {
//   console.log(data);
// }

// const fetchData = async () => {
//   axios("https://accounts.spotify.com/api/token", {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization:
//         "Basic " + btoa(spotify?.ClientId + ":" + spotify?.ClientSecret),
//     },
//     data: "grant_type=client_credentials",
//     method: "POST",
//   })
//     .then((tokenResponse) => {
//       token.value = tokenResponse.data.access_token;

//       axios("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy", {
//         method: "GET",
//         headers: { Authorization: "Bearer " + tokenResponse?.data?.access_token },
//       }).then((albumResponse) => {
//         albums.values = albumResponse?.data;
//         console.log(albums);
//         console.log(tokenResponse);
//       });
//     })
//     .catch((err) => {
//       console.log(`${err.message}`, { cause: err });
//     });
// };

function switchView() {
  currentView.value = "view2";
}

function switchView1() {
  currentView.value = "view1";
}

function searchedKey(data: string) {
  searching.value = data;
}

// const filterAlbums = (searchedKeywords:string) => {
//   return albums?.value?.lowercase().includes(searchedKeywords.toLowerCase());
// }
</script>

<template>
  <div id="app">
    <header>
      <div class="container">
        <img alt="" src="./assets/groove.png" />
      </div>
    </header>

    <div v-if="currentView === 'view1'">
      <HeroComponent
        type=""
        @switchView="switchView"
        :searchedKey="searching"
      />

      <section id="popular">
        <div class="container">
          <h3>Popular albums</h3>
          <div class="grid cols-3 gap-1">
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
          </div>
        </div>
      </section>
    </div>

    <div v-else>
      <HeroComponent
        variant="type2"
        @switch-View1="switchView1"
        @searchedInput="searchedKey"
      />

      <section id="popular">
        <div class="container pt-3">
          <div class="grid cols-3 gap-1">
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
            <AlbumCard title="" image="" artiste="" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import "./assets/base.css";

#popular {
  overflow-x: hidden;
}

#popular h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
}

@media only screen and (max-width: 678px) {
  #popular h3 {
    text-align: center;
  }
}
</style>
