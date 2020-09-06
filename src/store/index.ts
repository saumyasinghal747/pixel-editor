import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function makeArray(x: number,y: number,d: any) : Array<number> {
    return (new Array(y)).fill((new Array(x)).fill(d))
}


interface Cell {
  people: Array<any>,
  type: string
}

export default new Vuex.Store({
  state: {
    grid: makeArray(100,60,1),
    focusedColor:"road",
    availableColors: ["road","grass"]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
