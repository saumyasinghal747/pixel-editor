import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function makeArray(x: number,y: number,d: any) : Array<number> {
   const a: Array<any> =  (new Array(y)).fill((new Array(x)).fill(d));
   const b: Array<any> = $.from(true,{},a);
}


interface Cell {
  people: Array<any>,
  type: string
}

// @ts-ignore
export default new Vuex.Store({
  state: {
    grid: makeArray(100,60,{people:[],type:'road'}),
    focusedColor:"road",
    availableColors: ["road","grass"]
  },
  mutations: {
    changeFColor(state,newColor){
      state.focusedColor = newColor
    },
    // @ts-ignore
    changeCellColor(state,x,y){
      // @ts-ignore
      state.grid[y][x].type=state.focusedColor
    }
  },
  actions: {
  },
  modules: {
  }
})
