<script setup lang="ts">
import AlbumCard from "./AlbumCard.vue";

defineProps<{
  albums: Array<object>;
}>();
</script>

<template>
  <div class="grid cols-3 gap-1">
    <AlbumCard title="" image="" artiste="" />
    <AlbumCard title="" image="" artiste="" />
    <AlbumCard title="" image="" artiste="" />
  </div>
</template>

<style>
@import "../assets/base.css";
</style>
