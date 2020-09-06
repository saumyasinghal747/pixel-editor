<template>
    <div>
        <div v-for="(row, rindex) in $store.state.grid" style="overflow: visible;white-space: nowrap;flex-wrap: nowrap;" class="text-nowrap row">
            <Cell v-for="(cell, cindex) in row" :x="cindex" :y="rindex" :variant="cell.type" />
        </div>
    </div>
</template>

<script>
    import Cell from "@/components/Cell";
    export default {
        name: "Grid",
        components: {Cell}
    }
</script>

<style scoped>

</style>