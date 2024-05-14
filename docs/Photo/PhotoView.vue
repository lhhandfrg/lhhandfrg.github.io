<script setup>
import { onMounted, ref } from "vue"
import { CoverPictureList } from "./Photo.json"

onMounted(() => {
  console.log(CoverPictureList)
})

const page = ref("./pages/PhotoContent")
</script>

<template>
  <div class="photo-view-container">
    <!-- <el-button type="primary">Primary</el-button>
    <el-button type="success"><a href="./pages/PhotoContent">aaa</a></el-button> -->
    <a
      :href="page + '?type=' + item.type"
      v-for="item in CoverPictureList"
      :key="item.id"
    >
      <el-card style="max-width: 360px" shadow="hover">
        <template #header>
          <div
            style="
              text-align: center;
              height: 10px;
              line-height: 10px;
              font-size: 24px;
              color: #333;
            "
          >
            {{ item.title }}
          </div>
        </template>
        <div class="imgHover">
          <el-image
            :src="item.url"
            style="border-radius: 14px"
            fit="cover"
            alt="图片加载失败"
            lazy
          ></el-image>
        </div>
      </el-card>
    </a>
  </div>
</template>

<style scoped>
.photo-view-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  justify-content: space-around;
  flex-direction: row;
  a {
    margin-bottom: 20px;
    .el-card {
      width: 318px;
      height: 400px;
      overflow: hidden;
      .imgHover {
        width: 276px;
        height: 310px;
        overflow: hidden;
        border-radius: 14px;
      }
      .el-image {
        width: 276px;
        height: 310px;
        overflow: hidden;
        transition: all 0.8s ease-in-out;

        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
    .el-card:hover {
      .el-image {
        transform: scale(1.1);
      }
    }
  }
}
a:last-child:nth-child(5n - 1) {
  margin-right: calc(191px + 190px);
}

a:last-child:nth-child(5n - 2) {
  margin-right: calc(191px + 191px + 190px + 190px);
}

a:last-child:nth-child(5n - 3) {
  margin-right: calc(191px + 191px + 191px + 190px + 190px + 190px);
}

a:last-child:nth-child(5n - 4) {
  margin-right: calc(
    191px + 191px + 191px + 191px + 190px + 190px + 190px + 190px
  );
}
</style>
