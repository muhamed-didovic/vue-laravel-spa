<template>
    <div>
        <navigation></navigation>
        <div class="py-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import navigation from './Navigation'
    export default {
        name: 'app',
        components: {
            navigation
        }
    }
</script>

<style>

</style>
