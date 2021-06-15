<template>
    <div style="height:5vh;width: 5vh;display: inline-block"  class="my-5" @click="$store.commit('changeFColor',variant)" :class="'bg-'+variant+[variant==$store.state.focusedColor? ' focused':'']"></div>
</template>

<script>
    export default {
        name: "ColorSwatch",
        props:['variant']
    }
</script>

<style scoped>
    .focused{
        border:8px solid rgba(0,0,0,0.2)
    }
</style>