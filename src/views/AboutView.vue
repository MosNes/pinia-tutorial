<template>
  <div class="about">
    <h1>About</h1>
    <button class="counter-button" @click="counterStore.increaseCount">
      {{ counterStore.count }}
    </button>
  </div>
</template>

<script setup>
  import {useCounterStore} from '@/stores/counter'

  const counterStore = useCounterStore();
</script>

<style>
  .counter-button {
    font-size: 50px;
  }
</style>