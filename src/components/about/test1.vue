<template>
    <div>
        <h1>Test1</h1>
        <ul class="row">
            <li><router-link to="/about/test1/test4">test4</router-link></li>
          <li><router-link to="/about/test1/test5">test4</router-link></li>
        </ul>
        <div>
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "test1"
    }
</script>

<style scoped>

</style>
