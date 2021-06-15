<template>
    <div @click="$store.commit({type:'changeCellColor',x:parseInt(x),y:parseInt(y)});" @mousemove.meta.shift="$store.commit({type:'changeCellColor',x:parseInt(x),y:y-1});$store.commit({type:'changeCellColor',x:x,y:y-2});$store.commit({type:'changeCellColor',x:x-2,y:y});$store.commit({type:'changeCellColor',x:x-2,y:y-2});$store.commit({type:'changeCellColor',x:x-1,y:y-2});$store.commit({type:'changeCellColor',x:x-2,y:y-1});$store.commit({type:'changeCellColor',x:x-1,y:y-1});$store.commit({type:'changeCellColor',x:x-1,y:y});"
         @mousemove.meta="$store.commit({type:'changeCellColor',x:parseInt(x),y:parseInt(y)});"
         style="width: 1vh;height: 1vh;border: solid 1px rgba(0,0,0,0.1)" :class="'bg-'+variant"></div>
</template>

<script>
    export default {
        name: "Cell",
        props: ['variant','x','y']
    }
</script>

<style scoped>

</style>