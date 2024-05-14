<script setup></script>
<template>
  <div class="view-container">
    <div class="one">
      <img src="https://img.btstu.cn/api/images/5e12f10dc0dac.jpg" alt="">
    </div>
  </div>
</template>
<style scoped>
  @media screen and (max-width: 768px) {
    .one {
      width: 100vw;
      height: 5rem;
      background: red;
    }
  }
  .one {
    width: 100vw;
    height: 400px;
    background: red;
  }
  .one img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>