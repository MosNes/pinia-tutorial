import { defineStore } from 'pinia'

export const useCounterStore = defineStore( {

  id: 'counter',

  //State Data
  state: () => ({
    count: 0,
  }),

  //Getters (equivalent of Computed properties, updated whenever the inputted state changes)
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) {
            return 'even';
          }
      return 'odd';
    }
    },

  //actions (equivalent of Methods, update the data in the global state)
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    }
  }

});