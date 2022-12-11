<template>
  <div class="home">
    <div class="count">
      {{count}}
    </div>
    <div class="buttons">
      <button @click="decreaseCount">-</button>
      <button @click="increaseCount">+</button>
    </div>
    <hr>
    <div>
      This counter is: {{oddOrEven}}
    </div>
  </div>
</template>

<script setup>
//Composition API Imports
//-------------------------------------------------------
import { ref, computed } from 'vue';

//state data variables
//-------------------------------------------------------
const count = ref(0);

//methods
//-------------------------------------------------------
const increaseCount = () => {
  count.value++;
};

const decreaseCount = () => {
  count.value--;
};

//computed properties
//-------------------------------------------------------
const oddOrEven = computed( () => {
  if (count.value % 2 === 0) {
    return 'even';
  }
  return 'odd';
});

</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>