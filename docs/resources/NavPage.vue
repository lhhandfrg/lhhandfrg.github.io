<script setup>
  import { ref,onMounted } from 'vue'
  import { navigationData } from './data.js'
  import { ElCard } from 'element-plus'
  const res = ref(navigationData)
  onMounted(() => {
    console.log(res.value);
  })

  const goTo = (link) => {
    console.log(link);
    // 根据link跳转到对应的页面,并在新的页面打开

    // window.location.href = link

    // 这里可以用window.open打开新的页面，但是会导致当前页面的路由丢失，所以这里用location.href代替

    window.open(link)

    

    // 这里可以用window.location.href打开新的页面，但是会导致当前页面的路由丢失，所以这里用location.href代替

    // window.location.href = link
  }
</script>

<template>
  <div class="container">
    <div class="big-fox" v-for="(item,index) in res">
      <h2>{{ item.title }}</h2>
      <div class="card" v-for="(i,k) in item.items" @click="goTo(i.link)">
        <img :src="'https://cpython666.github.io' + i.icon" alt="">
        <p>{{ i.desc }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
  /* .container {
    padding-top: 100px;
  } */
  .big-fox {
    width: 1152px;
    /* min-height: 210px; */
    /* max-height: auto; */
    height: auto;
    /* background: red; */
    margin: 10px auto;
    overflow: hidden;
  }
  .big-fox>h2 {
    /* width: 100px;
    height: 30px; */
    /* background: #5672cd; */
    color: #a84ffe;
    text-indent: 2em;
    margin: 0;
  }
  .big-fox .card {
    width: 210px;
    height: 75px;
    float: left;
    margin: 0 10px 10px 0;
    /* background: blue; */
    margin-top: 10px;
    border-radius: 15px;
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 10px;
    display: flex;
    border: 1px solid #ccc;
    padding-right: 5px;
    box-shadow: 2px 2px 2px #ccc;
  }
  .big-fox .card:hover {
    border: 1px solid #eee;
    color: #3451b2;
    transform: translate(1px,1px);
  }
  .card img {
    width: 30px;
    height: 30px;
    display: block;
    margin-left: 10px;
  }
  .card p {
    margin: 0;
    transform: translateX(5px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>