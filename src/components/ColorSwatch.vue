<template>
    <div style="height:5vh;width: 5vh;display: inline-block" @click="$store.commit('changeFColor',variant)" :class="'bg-'+variant"></div>
</template>

<script>
    export default {
        name: "ColorSwatch",
        props:['variant']
    }
</script>

<style scoped>

</style>