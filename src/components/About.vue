<template>
  <div class="row mb-5">
    <ul class="nav flex-column col-4">
      <li class="nav-item text-center">
        <router-link class="nav-link active" to="/about/test1">test1</router-link>
      </li>
      <li class="nav-item text-center">
        <router-link class="nav-link" to="/about/test2">test2</router-link>
      </li>
      <li class="nav-item text-center">
        <router-link class="nav-link" to="/about/test3">test3</router-link>
      </li>

    </ul>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>
