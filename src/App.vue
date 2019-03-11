<template>
  <div id="app">
      <app-header></app-header>
      <div id="container">
        <router-view></router-view>
        <!--<router-view></router-view>-->
      </div>

      <!--routerView 组件复用-->
      <div class="container">
            <div class="row">
                  <div class="col-sm-12 col-md-4">
                    <router-view name="test1"></router-view>
                  </div>
              <div class="col-sm-12 col-md-4">
                <router-view name="test2"></router-view>
              </div>
              <div class="col-sm-12 col-md-4">
                <router-view name="test3"></router-view>
              </div>

            </div>
      </div>
  </div>
  <!--<div id="container">
      &lt;!&ndash;<router-view></router-view>&ndash;&gt;
  </div>-->
</template>

<script>

  import Header from "./components/Header"
export default {
  components:{
    "app-header":Header
  }
}
</script>

<style>

</style>
