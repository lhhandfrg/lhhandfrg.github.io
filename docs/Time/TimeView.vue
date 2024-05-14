<script setup>
import { computed, onMounted, ref, watch } from "vue"

// const runtime = () => {
//   // 初始时间，日/月/年 时:分:秒
//   let X = new Date("5/8/2024 16:00:00");
//   let Y = new Date();
//   let T = (Y.getTime()-X.getTime());
//   let M = 24*60*60*1000;
//   let a = T/M;
//   let A = Math.floor(a);
//   let b = (a-A)*24;
//   let B = Math.floor(b);
//   let c = (b-B)*60;
//   let C = Math.floor((b-B)*60);
//   let D = Math.floor((c-C)*60);
//   return { A, B, C, D };
// }

onMounted(() => {
  function secondToDate(second) {
    if (!second) {
      return 0
    }
    var time = new Array(0, 0, 0, 0, 0)
    if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600))
      second %= 365 * 24 * 3600
    }
    if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600))
      second %= 24 * 3600
    }
    if (second >= 3600) {
      time[2] = parseInt(second / 3600)
      second %= 3600
    }
    if (second >= 60) {
      time[3] = parseInt(second / 60)
      second %= 60
    }
    if (second > 0) {
      time[4] = second
    }
    return time
  }
  function setTime() {
    //mouth要少一个月不然会出问题
    var create_time = Math.round(
      new Date(Date.UTC(2021, 10, 24, 16, 0, 0)).getTime() / 1000
    )
    var timestamp = Math.round(
      (new Date().getTime() + 8 * 60 * 60 * 1000) / 1000
    )
    var currentTime = secondToDate(timestamp - create_time)
    var currentTimeHtml =
      currentTime[0] +
      "年" +
      currentTime[1] +
      "天" +
      currentTime[2] +
      "时" +
      currentTime[3] +
      "分" +
      currentTime[4] +
      "秒"
    if (document.getElementById("htmer_time") != null)
      document.getElementById("htmer_time").innerHTML =
        currentTimeHtml
  }
  //即时刷新
  setInterval(setTime, 1000)
})
</script>

<template>
  <div class="time-view">
    <div class="time-view-img">
      <img src="https://img2.imgtp.com/2024/05/10/nWn9hY6D.png" alt="" />
    </div>
    <div class="time-view-text">
      <div class="author-img">
        <img src="https://img2.imgtp.com/2024/05/10/QF5wo7t1.jpg" alt="frg">
      </div>
      <h1 id="htmer_time"></h1>
      <div class="author-img-two">
        <img src="https://img2.imgtp.com/2024/05/10/SMLlmE9V.jpg" alt="lzy">
      </div>
    </div>
    <!-- 波浪效果 -->
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop" style="background-image: url('../public/bone.png')"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle" style="background-image: url('../public/btwo.png')"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" style="background-image: url('../public/bthree.png')"></div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.time-view {
  width: 100%;
  position: relative;
}
.time-view-img {
  width: 100%;
  height: 853px;
  /* background: #340292; */
}
.time-view-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.time-view-text {
  width: 100%;
  height: 853px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.time-view-text h1 {
  /* font-size: 70px; */
  display: block;
  width: 550px;
  height: 100px;
  /* margin: 0 auto; */
  font-size: 50px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  transform: translate(125%, 270%);
  background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  -webkit-animation:  maskedAnimation 4s infinite linear;
  /* -webkit-animation: shine 2.4s infinite; */
}
/* @-webkit-keyframes shine{
		0%,100%{ color:#fff;text-shadow:0 0 6px #00ff37,0 0 6px #0ce454; }
		50%{ text-shadow:0 0 6px #06e94a,0 0 20px #00ff2a; }
} */
@keyframes maskedAnimation {
	0% {
    background-position: 0 0;
	}
	100% {
	    background-position: -100% 0;
	}
}

.author-img {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 30%;
  left: 30%;
  /* background: blue; */
  border-radius: 50%;
  overflow: hidden;
}
.author-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}
.author-img-two {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 30%;
  left: 65%;
  background: blue;
  border-radius: 50%;
  overflow: hidden;
}

/* 波浪效果 */
@keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1)
    }
}
.waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 150px;
}
.waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
    /*background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);*/
}
.bgTop {
    z-index: 15;
    opacity: 0.5;
}
.bgMiddle {
    z-index: 10;
    opacity: 0.75;
}
.bgBottom {
    z-index: 5;
}
.wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
}
.waveTop {
    background-size: 50% 115px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
   -webkit-animation: move-wave 3s;
   -webkit-animation-delay: 1s;
   animation-delay: 1s;
}
.waveMiddle {
    background-size: 50% 150px;
}
.waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
}
.waveBottom {
    background-size: 50% 150px;
}
.waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
}
</style>
