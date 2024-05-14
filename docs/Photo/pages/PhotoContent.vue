<script setup>
import { imageList } from "../Photo.json"
import { onMounted } from "vue"
import { Plus } from "@element-plus/icons-vue"
// 使用原生js获取地址栏参数
const query = window.location.search.slice(1)
const params = new URLSearchParams(query)
const id = params.get("type")
console.log(id)
// 根据type获取图片列表

const imgList = imageList.filter((item) => item.type === id)
onMounted(() => {
  console.log(imageList)
  console.log(imgList)
})
</script>

<template>
  <div class="photo-content-container" v-if="imgList.length > 0">
    <!-- <el-affix :offset="120">
      <el-button type="primary">Offset top 120px</el-button>
    </el-affix> -->
    <a class="add-but" href="../components/addImage"
      ><el-button type="warning" :icon="Plus" circle size="large"></el-button
    ></a>
    <div class="img-item" v-for="item in imgList" :key="item.id">
      <a :href="item.url" target="_blank"
        ><img :src="item.url" alt="加载失败" :placehoder="item.text"
      /></a>
    </div>

    <!-- 解决flex布局问题 -->
    <div
      style="width: 300px; height: 0"
      v-for="n in imgList.length"
      :key="n"
    ></div>
  </div>
  <el-empty description="暂无图片哦" v-else />
</template>

<style scoped>
.photo-content-container {
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .add-but {
    position: fixed;
    right: 120px;
    bottom: 120px;
  }
  .img-item {
    width: 300px;
    height: 300px;
    /* border: 1px solid red; */
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
}
</style>
