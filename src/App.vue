

<template>
    <div id="hello">
        <h2>{{ message }}</h2>
        <font-awesome-icon :icon="icon" />

    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                message: 'Welcome to Vue.js'
            }
        }
    }
</script>

<style>
    #hello {
        font-family: Verdana;
        color: navy;
    }
</style>