<template>
  <div id="app">
    <ColorBar/>
    <Grid/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import ColorBar from "@/components/ColorBar.vue";
import Grid from "@/components/Grid.vue";

@Component({
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
