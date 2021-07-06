<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  watch:{
    '$route'(to){
      document.title = to.meta.title || 'Rohan Kumar'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@500&display=swap');
* {
  margin: 0;
  padding: 0;

  font-family: 'Encode Sans SC', sans-serif;
}
body{
  background-color: #2B2B2B;
}
</style>
