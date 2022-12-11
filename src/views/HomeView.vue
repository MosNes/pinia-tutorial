<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="counterStore.decreaseCount">-</button>
      <button @click="counterStore.increaseCount">+</button>
    </div>
    <hr>
    <div>
      This counter is: {{counterStore.oddOrEven}}
    </div>
    <hr>
    <div>
      <h3>Edit Counter</h3>
      <input type="number" v-model="counterStore.count">
    </div>
  </div>
</template>

<script setup>
//import components
//-------------------------------------------------------
import Counter from '@/components/Counter.vue'

//import global store and assign to variable
//-------------------------------------------------------
import {useCounterStore} from '@/stores/counter'

const counterStore = useCounterStore();

//Composition API Imports
//-------------------------------------------------------
// import { ref, computed } from 'vue';

//state data variables
//-------------------------------------------------------
// const count = ref(0);

//methods
//-------------------------------------------------------
// const increaseCount = () => {
//   count.value++;
// };

// const decreaseCount = () => {
//   count.value--;
// };

//computed properties
//-------------------------------------------------------
// const oddOrEven = computed( () => {
//   if (count.value % 2 === 0) {
//     return 'even';
//   }
//   return 'odd';
// });

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