import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function makeArray(x: number,y: number,d: any) : Array<object> {
   return  JSON.parse(JSON.stringify((new Array(y)).fill((new Array(x)).fill(d))));

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
    availableColors: ["road","grass","concrete","library","history","cefg","gunn","science","language","other","util","computers","brick"]
  },
  mutations: {
    changeFColor(state,newColor){
      state.focusedColor = newColor
    },
    // @ts-ignore
    changeCellColor(state,payload){
      // @ts-ignore
      //console.log(state.grid[20]);
      state.grid[payload.y][payload.x].type=state.focusedColor
    }
  },
  actions: {
  },
  modules: {
  }
})
