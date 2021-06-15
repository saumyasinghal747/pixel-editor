<template>
    <div class="mx-auto">
    <ColorSwatch v-for="color in $store.state.availableColors" :variant="color" /><b-button v-clipboard:copy="JSON.stringify($store.state.grid)" variant="info">Copy JSON</b-button>
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