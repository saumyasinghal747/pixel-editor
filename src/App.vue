<template>
  <div id="app" class="px-5">
    <h1 class="my-2">Pixel Editor</h1>
    <ColorBar/>
    <Grid/>
    <b-form-textarea placeholder="Paste import here" v-model="importString" class="mx-5 my-5"/>
    <b-button @click="$store.commit('setGrid',JSON.parse(importString))" variant="info">Import JSON</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import ColorBar from "@/components/ColorBar.vue";
import Grid from "@/components/Grid.vue";

@Component({
  data: function(){
    return {
      importString:""
    }
  },
  components: {
    Grid,
    ColorBar,
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
@import '../public/colors.css'
</style>
