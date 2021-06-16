<template>
    <div>
        <drag-select-container  selectorClass="cell">
            <template slot-scope="{ selectedItems }">
                <div :key="'row-'+rindex" v-for="(row, rindex) in $store.state.grid" style="overflow: visible;white-space: nowrap;flex-wrap: nowrap;" class="text-nowrap row">
                    <Cell :data-cell="cell" @select="$store.commit({type:'changeCellColor',x:cindex,y:rindex})" class="cell" v-for="(cell, cindex) in row" :key="cindex+','+rindex" :x="cindex" :y="rindex" :variant="cell.type" />
                </div>
        
            </template>
        </drag-select-container>

    </div>
</template>

<script>
    import DragSelect from 'vue-drag-select/src/DragSelect.vue'
    import Cell from "@/components/Cell";
    export default {
        name: "Grid",
        components: {Cell,'drag-select-container': DragSelect},
        methods:{

        }
    }
</script>

<style scoped>

</style>