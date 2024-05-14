<script setup>
  import axios from 'axios'
  import { onMounted,ref } from 'vue';
  import { ElImage } from 'element-plus'
  import { imageData } from './data.js'
  const hito = ref('')
  const f = ref('')
  const imgUrl =ref('')
  const getSuiji = async () => {
    const abs = await axios.get('https://api.btstu.cn/sjbz/api.php?lx=dongman&format=json')
    // console.log(abs)
    imgUrl.value = abs.data.imgurl
  }
  const getSJText = async () => {
    // const res = await axios.get('https://v1.hitokoto.cn/?c=b')
    console.log(res.data);
    hito.value = res.data.hitokoto
    f.value = res.data.from
  }
  onMounted(async () => {
    // await getSJText()
    await getSuiji()
    // console.log(img.value.$el);
  })
</script>

<template>
  <div class="container">
    <div class="bg-image">
      <!-- <h3>刘哈哈的个人博客</h3> -->
      <el-image :src="imgUrl" fit="none" loading="lazy" lazy>
        <template #placeholder>
          <div class="image-slot">
            <!-- 加载效果 -->
            <div class="ball">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </template>
      </el-image>
      
      <p v-html="f" style="transform: translateY(20px);"></p>
      <p style="transform: translateY(270px);" v-html="hito"></p>
    </div>
    <div class="main-content">
      <h2>我❤️们</h2>
      <div class="card-container">
        <div class="img-card" v-for="item in imageData.data" :key="item.id">
          <div>
            <img :src="item.imgUrl"></img>
          </div>
          <h5 class="img-name">{{ item.name }}</h5>
          <h6 class="img-day">Date: 2023-07-17 11:36</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  
  .bg-image {
    width: 100%;
    height: 400px;
    /* border: 1px solid red; */
    margin: 0 auto;
    /* border-radius: 25px; */
    overflow: hidden;
    /* background: url('https://i.postimg.cc/jS0yb6zf/2222.png') no-repeat center center;
    background-size: cover; */
    position: relative;
  }
  .bg-image .el-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: none;
    opacity: 0.8;
    transition: all 0.5s ease-in-out;
    position: absolute;
  }
  .bg-image p {
    mix-blend-mode: difference;
    color: white;
    /* font-size: 24px; */
    text-overflow: ellipsis;

    white-space: nowrap;
    overflow: hidden;
    height: 50px;
    line-height: 50px;
  }
  
  /* 加载效果 */
  .ball{
		    width: 100px;
		    height: 100px;
		    margin: 50px auto;
		    position: relative;
		    transform: translateY(0px);
		}

		.ball> div {          /*设置水波纹的样式*/
		    background-color: #279fcf;
		    border-radius: 100%;
		    margin: 2px;
		    position: absolute;
		    left: 15px;
		    top: 65px;
		    opacity: 0;
		    width: 80px;
		    height: 80px;
		    animation: anim 1s 0s linear infinite both;
		}
		.ball > div:nth-child(2) {        /*设置动画延迟*/
		    animation-delay: 0.2s;
		}
		/*此处省略设置第三个和第四个圆圈的动画延迟的代码*/
		.ball> div:nth-child(3) {
		    animation-delay: 0.4s;
		}

		.ball > div:nth-child(4) {
		    animation-delay: 0.6s;
		}

		@keyframes anim {
		    0% {transform: scale(0);
		        opacity: 0; }
		    5% {opacity: 1; }
		    100% {transform: scale(1);
		           opacity: 0; }
		}

  .bg-image h3 {
    color: #3b0992;
    font-size: 28px;
    margin-top: 20px;
    margin-left: 20px;
    position: absolute;
    z-index: 1;
  }
  .bg-image p {
    font-size: 32px;
    text-align: center;
    color: #04ff19;
    letter-spacing: 1rem;
    z-index: 2;
  }

  .main-content {
    width: 80%;
    margin: 0 auto;
    /* border: 1px solid red; */
    margin-top: 5px;
    box-sizing: border-box;
    padding: 10px;
  }
  .main-content h2 {
    text-align: center;
    font-size: 32px;
    /* margin-top: 50px; */
    letter-spacing: 2rem;
    font-weight: 700;
    margin-top: 20px;
  }
  .card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .img-card {
    width: 400px;
    height: 500px;
    /* background: red; */
    box-shadow: 1px 1px 1px 1px #ccc;
    margin-top: 30px;
    border-radius: 25px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    justify-content: space-around;
  }
  /* .img-card:hover {
    background: blue;
    transform: scale(1);
    transition: all 0.5s ease-in-out;
  } */
  .img-card>div {
    width: 373px;
    height: 380px;
    border-radius: 18px;
    overflow: hidden;
    box-sizing: border-box;
  } 
  .img-card>div img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* border-radius: 18px;
    overflow: hidden;
    box-sizing: border-box; */
    transition: all 1s;
  }
  .img-card img:hover {
    transform: scale(1.2);
    /* transition: all 0.5s ease-in-out; */
    /* transform: translate(-10px, -10px); */
  }
</style>