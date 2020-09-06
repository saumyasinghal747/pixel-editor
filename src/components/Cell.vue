<template>
    <div @drag="$store.commit({type:'changeCellColor',x:parseInt(x),y:parseInt(y)});" @mousedown="$store.commit({type:'changeCellColor',x:parseInt(x),y:parseInt(y)});" style="width: 1vh;height: 1vh" :class="'bg-'+variant"></div>
</template>

<script>
    export default {
        name: "Cell",
        props: ['variant','x','y']
    }
</script>

<style scoped>

</style>