<template>
  <div>
    Manager
  </div>
</template>

<script>
    export default {
        name: "Manager",
        data(){
          return{
            name:"message"
          }
        }
      //   ,
      // //组件内的守卫
      // beforeRouteEnter:(to,form,next)=>{
      //     //alert(this.name);
      //     //next();
      //     next(vm=>{
      //       alert(vm.name)
      //     })
      // },
      // beforeRouteLeave(to,from,next){
      //     if(confirm("你确定离开吗？")==true){
      //       next();
      //     }else{
      //       ndex(false);
      //     }
      // }
    }
</script>

<style scoped>

</style>
