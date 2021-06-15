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
    grid: makeArray(100,70,{people:[],type:'road'}),
    focusedColor:"road",
    availableColors: ["road","grass","parking","concrete","library","jade","water","history","cefg","gunn","science","language","other","util","computers","brick"]
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
    },
    setGrid(state,grid){
      for (var y in grid){
        //console.log(y);
        for (var x in grid[y]){
          // @ts-ignore
          //console.log(grid[y][x]);
          state.grid[y][x].type = grid[y][x].type
          //console.log(state.grid[y][x])
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
