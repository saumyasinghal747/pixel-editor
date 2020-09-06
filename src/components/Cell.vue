<template>
    <div @click="$store.commit('changeCellColor',parseInt(x),parseInt(y));" style="width: 1vh;height: 1vh" :class="'bg-'+variant"></div>
</template>

<script>
    export default {
        name: "Cell",
        props: ['variant','x','y']
    }
</script>

<style scoped>

</style>