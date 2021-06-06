<template>
    <div>
        <navigation-bar-component></navigation-bar-component>

        <!-- Page Heading -->
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {{ pageTitle }}
            </div>
        </header>

        <!-- Page Content -->
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>
 
<script>
    export default {
        name: 'app',
        computed: {
            pageTitle: function () {
                return this.$route.name
            }
        }
    }
</script>