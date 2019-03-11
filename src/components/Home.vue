<template>
  <div id="home">
      <div class="adver_container">
        <h1>一口软欧包</h1>
        <button class="btn btn-success" @click="gotoMenu">goto Menu</button>
      </div>

  </div>
</template>

<script>
    export default {
        name: "Home",
      methods:{
          gotoMenu:function () {
              //跳转到上一次路由
              //this.$router.go(-1);

              //跳转到指定地址
              //this.$router.replace("/menu");

              //this.$router.replace({name:'menuLink'});

              //this.$router.push("/menu");
            this.$router.push({name:'menuLink'});
          }
      }
    }
</script>

<style scoped>
  #home{background: url("../assets/food.jpg") 0px 0px no-repeat;
    background-size: cover;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .adver_container{width: 60%;height: 60%;
    background: rgba(666,666,666,0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .adver_container h1{margin: 20px 0px;color: white;}


</style>
