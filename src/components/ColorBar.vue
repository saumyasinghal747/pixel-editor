<template>
    <div>
    <ColorSwatch v-for="color in $store.state.availableColors" :variant="color" />
    </div>
</template>

<script>
    import ColorSwatch from "@/components/ColorSwatch";
    export default {
        name: "ColorBar",
        components: {ColorSwatch}
    }
</script>

<style scoped>

</style>