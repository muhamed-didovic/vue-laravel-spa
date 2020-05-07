<template>
    <div>
        <navigation></navigation>

        <div class="container">
            FRESH APP
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